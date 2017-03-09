import { Observable } from 'rxjs/Observable';
/**
 * @private
 * @param pluginRef
 * @returns {null|*}
 */
export declare const getPlugin: (pluginRef: string) => any;
/**
 * @private
 * @param pluginObj
 * @param method
 */
export declare const pluginWarn: (pluginObj: any, method?: string) => void;
/**
 * @private
 * @param pluginName
 * @param method
 */
export declare const cordovaWarn: (pluginName: string, method: string) => void;
/**
 * @private
 * @param pluginObj
 * @param methodName
 * @param opts
 * @returns {function(...[any]): (undefined|*|Observable|*|*)}
 */
export declare const wrap: (pluginObj: any, methodName: string, opts?: any) => (...args: any[]) => any;
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
export declare function Plugin(config: any): (cls: any) => any;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export declare function Cordova(opts?: any): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...args: any[]) => any;
};
/**
 * @private
 *
 * Wrap an instance method
 */
export declare function CordovaInstance(opts?: any): (target: Object, methodName: string) => {
    value: (...args: any[]) => any;
};
/**
 * @private
 *
 *
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
export declare function CordovaProperty(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
/**
 * @private
 * @param target
 * @param key
 * @param descriptor
 * @constructor
 */
export declare function InstanceProperty(target: any, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export declare function CordovaFunctionOverride(opts?: any): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...args: any[]) => Observable<any>;
};
