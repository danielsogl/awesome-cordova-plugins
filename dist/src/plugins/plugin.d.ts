export declare const getPlugin: (pluginRef: string) => any;
export declare const isInstalled: (pluginRef: string) => boolean;
export declare const pluginWarn: (pluginName: string, method: string, plugin: string) => void;
export declare const cordovaWarn: (pluginName: string, method: string) => void;
export declare const wrap: (pluginObj: any, methodName: any, opts?: any) => (...args: any[]) => any;
export declare function Plugin(config: any): (cls: any) => any;
export declare function Cordova(opts?: any): (obj: any, methodName: any) => void;
export declare function RequiresPlugin(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
