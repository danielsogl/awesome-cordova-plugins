export declare class Cordova {
    static hasPlugin(pluginRef: string): boolean;
    static plugin(pluginRef: string): any;
    static promisify(pluginRef: any, pluginName: any, methodName: any, successIndex: any, errorIndex: any): (...args: any[]) => any;
}
