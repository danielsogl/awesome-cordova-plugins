/**
 * @private
 */
export declare const get: (element: Element | Window, path: string) => any;
/**
 * @private
 */
export declare const getPromise: (callback: Function) => Promise<any>;
/**
 * @private
 * @param pluginRef
 * @returns {null|*}
 */
export declare const getPlugin: (pluginRef: string) => any;
/**
 * @private
 */
export declare const pluginWarn: (pluginName: string, plugin?: string, method?: string) => void;
/**
 * @private
 * @param pluginName
 * @param method
 */
export declare const cordovaWarn: (pluginName: string, method?: string) => void;
