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
    [key: string]: any;
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
export declare function InstanceCheck(opts?: CordovaCheckOptions): (pluginObj: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
/**
 * Executes function only if plugin is available
 * @private
 */
export declare function CordovaCheck(opts?: CordovaCheckOptions): (pluginObj: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
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
export declare function Plugin(config: PluginConfig): ClassDecorator;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export declare function Cordova(opts?: CordovaOptions): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...args: any[]) => any;
    enumerable: boolean;
};
/**
 * @private
 *
 * Wrap an instance method
 */
export declare function CordovaInstance(opts?: any): (target: Object, methodName: string) => {
    value: (...args: any[]) => any;
    enumerable: boolean;
};
/**
 * @private
 *
 *
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
export declare function CordovaProperty(target: any, key: string): void;
/**
 * @private
 * @param target
 * @param key
 * @constructor
 */
export declare function InstanceProperty(target: any, key: string): void;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export declare function CordovaFunctionOverride(opts?: any): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...args: any[]) => Observable<any>;
    enumerable: boolean;
};
/**
 * @private
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 *
 */
export declare function CordovaFiniteObservable(opts?: CordovaFiniteObservableOptions): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...args: any[]) => Observable<any>;
    enumerable: boolean;
};
