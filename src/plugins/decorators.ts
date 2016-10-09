import { getPlugin, wrap, wrapInstance, overrideFunction, pluginWarn, cordovaWarn } from './plugin';
import { Observable } from 'rxjs/Observable';

declare var window;

/**
 * @private
 *
 * Class decorator specifying Plugin metadata. Required for all plugins.
 *
 * @usage
 * ```typescript
 * @Plugin({
 *  name: 'MyPlugin',
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
export function Plugin(config) {
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
      let pluginInstance = getPlugin(config.pluginRef);

      if (!pluginInstance) {
        pluginWarn(cls);
        return false;
      }
      return true;
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
export function Cordova(opts: any = {}) {
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
export function CordovaProperty(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>) {
  let originalMethod = descriptor.get;

  descriptor.get = function(...args: any[]) {
    if (!window.cordova) {
      cordovaWarn(this.name, null);
      return {};
    }
    let pluginObj: any = this;
    let pluginInstance = getPlugin(pluginObj.pluginRef);
    if (!pluginInstance) {
      pluginWarn(this, key);
      return {};
    }
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

/**
 * @private
 * @param target
 * @param key
 * @param descriptor
 * @constructor
 */
export function InstanceProperty(target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
  descriptor.get = function() {
    return this._objectInstance[key];
  };

  descriptor.set = function(...args: any[]) {
    this._objectInstance[key] = args[0];
  };

  return descriptor;
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
      value: function(...args: any[]): Observable<any> {
        return overrideFunction(this, methodName, opts);
      }
    };
  };
}
