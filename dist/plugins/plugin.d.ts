export declare const getPlugin: (pluginRef: string) => any;
export declare const isInstalled: (pluginRef: string) => boolean;
export declare const pluginWarn: (pluginName: string, method: string, plugin: string) => void;
export declare const cordovaWarn: (pluginName: string, method: string) => void;
export declare const wrap: (pluginObj: any, methodName: string, opts?: any) => (...args: any[]) => any;
/**
 * Class decorator specifying Plugin metadata. Required for all plugins.
 */
export declare function Plugin(config: any): (cls: any) => any;
/**
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export declare function Cordova(opts?: any): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...args: any[]) => any;
};
/**
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
export declare function RequiresPlugin(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
