export interface CordovaPlugin {
    id: string;
    className: string;
    plugin: string;
    pluginRef: string;
    promise?: any;
}
export declare var PluginConfig: CordovaPlugin[];
