import { fromEvent, Observable } from 'rxjs';

import { CordovaOptions } from './interfaces';

declare const window: any;

export const ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
export const ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };

export function getPromise<T>(callback: (resolve: Function, reject?: Function) => any): Promise<T> {
  const tryNativePromise = () => {
    if (Promise) {
      return new Promise<T>((resolve, reject) => {
        callback(resolve, reject);
      });
    } else {
      console.error(
        'No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.'
      );
    }
  };

  if (typeof window !== 'undefined' && window.angular) {
    const doc = window.document;
    const injector = window.angular
      .element(doc.querySelector('[ng-app]') || doc.body)
      .injector();
    if (injector) {
      const $q = injector.get('$q');
      return $q((resolve: Function, reject: Function) => {
        callback(resolve, reject);
      });
    }
    console.warn(
      `Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.`
    );
  }

  return tryNativePromise();
}

export function wrapPromise(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: CordovaOptions = {}
) {
  let pluginResult: any, rej: Function;
  const p = getPromise((resolve: Function, reject: Function) => {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(
        pluginObj,
        methodName,
        args,
        opts,
        (...args: any[]) => resolve(args),
        (...args: any[]) => reject(args)
      );
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }
    rej = reject;
  });
  // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error
  if (pluginResult && pluginResult.error) {
    p.catch(() => {});
    typeof rej === 'function' && rej(pluginResult.error);
  }
  return p;
}

function wrapOtherPromise(pluginObj: any, methodName: string, args: any[], opts: any = {}) {
  return getPromise((resolve: Function, reject: Function) => {
    const pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({ error: 'unexpected_error' });
    }
  });
}

function wrapObservable(pluginObj: any, methodName: string, args: any[], opts: any = {}) {
  return new Observable(observer => {
    let pluginResult;

    if (opts.destruct) {
      pluginResult = callCordovaPlugin(
        pluginObj,
        methodName,
        args,
        opts,
        (...args: any[]) => observer.next(args),
        (...args: any[]) => observer.error(args)
      );
    } else {
      pluginResult = callCordovaPlugin(
        pluginObj,
        methodName,
        args,
        opts,
        observer.next.bind(observer),
        observer.error.bind(observer)
      );
    }

    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }
    return () => {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(
              pluginObj,
              opts.clearFunction,
              args,
              opts,
              observer.next.bind(observer),
              observer.error.bind(observer)
            );
          }
          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn(
          'Unable to clear the previous observable watch for',
          pluginObj.constructor.getPluginName(),
          methodName
        );
        console.warn(e);
      }
    };
  });
}

/**
 * Wrap the event with an observable
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event: string, element: any): Observable<any> {
  element = (typeof window !== 'undefined' && element) ? get(window, element) : element || typeof window !== 'undefined' || {};
  return fromEvent(element, event);
}

/**
 * Checks if plugin/cordova is available
 * @return {boolean | { error: string } }
 * @private
 */
export function checkAvailability(
  pluginRef: string,
  methodName?: string,
  pluginName?: string
): boolean | { error: string };
export function checkAvailability(
  pluginObj: any,
  methodName?: string,
  pluginName?: string
): boolean | { error: string };
export function checkAvailability(
  plugin: any,
  methodName?: string,
  pluginName?: string
): boolean | { error: string } {
  let pluginRef, pluginInstance, pluginPackage;

  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }

  pluginInstance = getPlugin(pluginRef);

  if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
    if (typeof window === 'undefined' || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }

    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }

  return true;
}

/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
export function instanceAvailability(pluginObj: any, methodName?: string): boolean {
  return (
    pluginObj._objectInstance &&
    (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined')
  );
}

export function setIndex(args: any[], opts: any = {}, resolve?: Function, reject?: Function): any {
  // ignore resolve and reject in case sync
  if (opts.sync) {
    return args;
  }

  // If the plugin method expects myMethod(success, err, options)
  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push((err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    const obj: any = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    const setSuccessIndex = () => {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };

    const setErrorIndex = () => {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
      // defined and thus causing non expected behavior.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }
  return args;
}

export function callCordovaPlugin(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {},
  resolve?: Function,
  reject?: Function
) {
  // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.
  args = setIndex(args, opts, resolve, reject);

  const availabilityCheck = checkAvailability(pluginObj, methodName);

  if (availabilityCheck === true) {
    const pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}

export function callInstance(
  pluginObj: any,
  methodName: string,
  args: any[],
  opts: any = {},
  resolve?: Function,
  reject?: Function
) {
  args = setIndex(args, opts, resolve, reject);

  if (instanceAvailability(pluginObj, methodName)) {
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
  }
}

export function getPlugin(pluginRef: string): any {
  if (typeof window !== 'undefined') {
    return get(window, pluginRef);
  }
  return null;
}

export function get(element: Element | Window, path: string) {
  const paths: string[] = path.split('.');
  let obj: any = element;
  for (let i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}

export function pluginWarn(pluginName: string, plugin?: string, method?: string): void {
  if (method) {
    console.warn(
      'Native: tried calling ' +
        pluginName +
        '.' +
        method +
        ', but the ' +
        pluginName +
        ' plugin is not installed.'
    );
  } else {
    console.warn(`Native: tried accessing the ${pluginName} plugin but it's not installed.`);
  }
  if (plugin) {
    console.warn(`Install the ${pluginName} plugin: 'ionic cordova plugin add ${plugin}'`);
  }
}

/**
 * @private
 * @param pluginName
 * @param method
 */
export function cordovaWarn(pluginName: string, method?: string): void {
  if (typeof process === 'undefined') {
    if (method) {
      console.warn(
        'Native: tried calling ' +
          pluginName +
          '.' +
          method +
          ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator'
      );
    } else {
      console.warn(
        'Native: tried accessing the ' +
          pluginName +
          ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator'
      );
    }
  }
}

// Fixes a bug in TypeScript 2.9.2 where the ...args is being converted into args: {} and
// causing compilation issues
export type WrapFn = (...args: any[]) => any;

/**
 * @private
 */
export const wrap = (pluginObj: any, methodName: string, opts: CordovaOptions = {}): WrapFn => {
  return (...args: any[]) => {
    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};

/**
 * @private
 */
export function wrapInstance(pluginObj: any, methodName: string, opts: any = {}): Function {
  return (...args: any[]) => {
    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new Observable(observer => {
        let pluginResult;

        if (opts.destruct) {
          pluginResult = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            (...args: any[]) => observer.next(args),
            (...args: any[]) => observer.error(args)
          );
        } else {
          pluginResult = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            observer.next.bind(observer),
            observer.error.bind(observer)
          );
        }

        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
        }

        return () => {
          try {
            if (opts.clearWithArgs) {
              return callInstance(
                pluginObj,
                opts.clearFunction,
                args,
                opts,
                observer.next.bind(observer),
                observer.error.bind(observer)
              );
            }
            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn(
              'Unable to clear the previous observable watch for',
              pluginObj.constructor.getPluginName(),
              methodName
            );
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise((resolve: Function, reject: Function) => {
        let result;
        if (opts.destruct) {
          result = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            (...args: any[]) => resolve(args),
            (...args: any[]) => reject(args)
          );
        } else {
          result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }
        if (result && result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      let pluginResult: any, rej: Function;
      const p = getPromise((resolve: Function, reject: Function) => {
        if (opts.destruct) {
          pluginResult = callInstance(
            pluginObj,
            methodName,
            args,
            opts,
            (...args: any[]) => resolve(args),
            (...args: any[]) => reject(args)
          );
        } else {
          pluginResult = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
      });
      // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error
      if (pluginResult && pluginResult.error) {
        p.catch(() => {});
        typeof rej === 'function' && rej(pluginResult.error);
      }
      return p;
    }
  };
}
