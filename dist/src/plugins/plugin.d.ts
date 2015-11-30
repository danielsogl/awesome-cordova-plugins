export declare const getPlugin: (pluginRef: string) => any;
export declare const isInstalled: (pluginRef: string) => boolean;
export declare const pluginWarn: (pluginName: string, method: string, plugin: string) => void;
export declare const cordovaWarn: (pluginName: string, method: string) => void;
export declare const wrap: (pluginObj: any, methodName: string, opts?: any) => (...args: any[]) => any;
export declare function Plugin(config: any): (cls: any) => any;
export declare function Cordova(opts?: any): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...args: any[]) => any;
};
export declare function RequiresPlugin(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
