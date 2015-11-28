export declare function get(obj: any, path: any): any;
export declare const promisify: (pluginRef: any, methodName: any, successIndex: any, errorIndex: any) => (...args: any[]) => any;
export declare const wrap: (pluginRef: any, methodName: any, successIndex?: any, errorIndex?: any) => (...args: any[]) => any;
