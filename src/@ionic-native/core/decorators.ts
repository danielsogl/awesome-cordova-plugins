import { instanceAvailability, checkAvailability, wrap, wrapInstance, overrideFunction } from './plugin';
import { getPlugin, getPromise } from './util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/throw';

export interface PluginConfig {
  /**
   * Plugin name, this should match the class name
   */
  pluginName: string;
  /**
   * Plugin NPM package name
   */
  plugin: string;
  /**
   * Plugin object reference
   */
  pluginRef?: string;
  /**
   * Github repository URL
   */
  repo?: string;
  /**
   * Custom install command
   */
  install?: string;
  /**
   * Available installation variables
   */
  installVariables?: string[];
  /**
   * Supported platforms
   */
  platforms?: string[];
}

export interface CordovaOptions {
  /**
   * Set to true if the wrapped method is a sync function
   */
  sync?: boolean;
  /**
   * Callback order. Set to reverse if the success/error callbacks are the first 2 arguments that the wrapped method takes.
   */
  callbackOrder?: 'reverse';
  /**
   * Callback style
   */
  callbackStyle?: 'node' | 'object';
  /**
   * Set a custom index for the success callback function. This doesn't work if callbackOrder or callbackStyle are set.
   */
  successIndex?: number;
  /**
   * Set a custom index for the error callback function. This doesn't work if callbackOrder or callbackStyle are set.
   */
  errorIndex?: number;
  /**
   * Success function property name. This must be set if callbackStyle is set to object.
   */
  successName?: string;
  /**
   * Error function property name. This must be set if callbackStyle is set to object.
   */
  errorName?: string;
  /**
   * Set to true to return an observable
   */
  observable?: boolean;
  /**
   * If observable is set to true, this can be set to a different function name that will cancel the observable.
   */
  clearFunction?: string;
  /**
   * This can be used if clearFunction is set. Set this to true to call the clearFunction with the same arguments used in the initial function.
   */
  clearWithArgs?: boolean;
  /**
   * Creates an observable that wraps a global event. Replaces document.addEventListener
   */
  eventObservable?: boolean;
  /**
   * Event name, this must be set if eventObservable is set to true
   */
  event?: string;
  /**
   * Element to attach the event listener to, this is optional, defaults to `window`
   */
  element?: any;
  /**
   * Set to true if the wrapped method returns a promise
   */
  otherPromise?: boolean;
  /**
   * Supported platforms
   */
  platforms?: string[];
}

export interface CordovaCheckOptions {
  sync?: boolean;
  observable?: boolean;
}

export interface CordovaFiniteObservableOptions extends CordovaOptions {
  /**
   * Function that gets a result returned from plugin's success callback, and decides whether it is last value and observable should complete.
   */
  resultFinalPredicate?: (result: any) => boolean;
  /**
   * Function that gets called after resultFinalPredicate, and removes service data that indicates end of stream from the result.
   */
  resultTransform?: (result: any) => any;
}

/**
 * @private
 */
export function InstanceCheck(opts: CordovaCheckOptions = {}) {
  return (pluginObj: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> => {
    return {
      value: function(...args: any[]): any {
        if (instanceAvailability(this)) {
          return descriptor.value.apply(this, args);
        } else {

          if (opts.sync) {
            return;
          } else if (opts.observable) {
            return new Observable<any>(() => {});
          }

          return getPromise(() => {});

        }
      }
    };
  };
}

/**
 * Executes function only if plugin is available
 * @private
 */
export function CordovaCheck(opts: CordovaCheckOptions = {}) {
  return (pluginObj: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> => {
    return {
      value: function(...args: any[]): any {
        const check = checkAvailability(pluginObj);
        if (check === true) {
          return descriptor.value.apply(this, args);
        } else {
          if (opts.sync) {
            return null;
          } else if (opts.observable) {
            return Observable.throw(new Error(check && check.error));
          }
          return Promise.reject(check && check.error);
        }
      }
    };
  };
}


/**
 * @private
 *
 * Class decorator specifying Plugin metadata. Required for all plugins.
 *
 * @usage
 * ```typescript
 * @Plugin({
 *  pluginName: 'MyPlugin',
 *  plugin: 'cordova-plugin-myplugin',
 *  pluginRef: 'window.myplugin'
 *  })
 *  export class MyPlugin {
 *
 *    // Plugin wrappers, properties, and functions go here ...
 *
 *  }
 * ```
 */
export function Plugin(config: PluginConfig) {
  return function(cls) {

    // Add these fields to the class
    for (let k in config) {
      cls[k] = config[k];
    }

    cls['installed'] = function(printWarning?: boolean) {
      return !!getPlugin(config.pluginRef);
    };

    cls['getPlugin'] = function() {
      return getPlugin(config.pluginRef);
    };

    cls['checkInstall'] = function() {
      return checkAvailability(cls) === true;
    };

    cls['getPluginName'] = function() {
      return config.pluginName;
    };

    cls['getPluginRef'] = function() {
      return config.pluginRef;
    };

    cls['getPluginInstallName'] = function() {
      return config.plugin;
    };

    cls['getPluginRepo'] = function() {
      return config.repo;
    };

    cls['getSupportedPlatforms'] = function() {
      return config.platforms;
    };

    return cls;
  };
}

/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export function Cordova(opts: CordovaOptions = {}) {
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    return {
      value: function(...args: any[]) {
        return wrap(this, methodName, opts).apply(this, args);
      }
    };
  };
}

/**
 * @private
 *
 * Wrap an instance method
 */
export function CordovaInstance(opts: any = {}) {
  return (target: Object, methodName: string) => {
    return {
      value: function(...args: any[]) {
        return wrapInstance(this, methodName, opts).apply(this, args);
      }
    };
  };
}

/**
 * @private
 *
 *
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
export function CordovaProperty(target: any, key: string) {
  Object.defineProperty(target, key, {
    enumerable: true,
    get: () => {
      if (checkAvailability(target, key) === true) {
        return getPlugin(target.constructor.getPluginRef())[key];
      } else {
        return null;
      }
    },
    set: (value) => {
      if (checkAvailability(target, key) === true) {
        getPlugin(target.constructor.getPluginRef())[key] = value;
      }
    }
  });
}

/**
 * @private
 * @param target
 * @param key
 * @constructor
 */
export function InstanceProperty(target: any, key: string) {
  Object.defineProperty(target, key, {
    enumerable: true,
    get: function(){
      return this._objectInstance[key];
    },
    set: function(value){
      this._objectInstance[key] = value;
    }
  });
}

/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export function CordovaFunctionOverride(opts: any = {}) {
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    return {
      value: function(...args: any[]) {
        return overrideFunction(this, methodName, opts);
      }
    };
  };
}


/**
 * @private
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 *
 */
export function CordovaFiniteObservable(opts: CordovaFiniteObservableOptions = {}) {
  if (opts.observable === false) {
    throw new Error('CordovaFiniteObservable decorator can only be used on methods that returns observable. Please provide correct option.');
  }
  opts.observable = true;
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    return {
      value: function(...args: any[]) {
        let wrappedObservable: Observable<any> = wrap(this, methodName, opts).apply(this, args);
        return new Observable<any>((observer) => {
          let wrappedSubscription = wrappedObservable.subscribe({
            next: (x) => {
              observer.next(opts.resultTransform ? opts.resultTransform(x) : x);
              if (opts.resultFinalPredicate && opts.resultFinalPredicate(x)) {
                observer.complete();
              }
            },
            error: (err) => { observer.error(err); },
            complete: () => { observer.complete(); }
          });
          return () => {
            wrappedSubscription.unsubscribe();
          };
        });
      }
    };
  };
}
