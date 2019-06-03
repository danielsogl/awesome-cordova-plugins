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
  destruct?: boolean;
  /**
   * Set to true if the wrapped method is a sync function
   */
  sync?: boolean;
  /**
   * Callback order. Set to reverse if the success/error callbacks are the first 2 arguments that the wrapped method
   * takes.
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
   * This can be used if clearFunction is set. Set this to true to call the clearFunction with the same arguments used
   * in the initial function.
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

export declare const Plugin: (config: PluginConfig) => ClassDecorator;
export declare const Cordova: (config?: CordovaOptions) => MethodDecorator;
export declare const CordovaProperty: () => PropertyDecorator;
export declare const CordovaInstance: (config?: CordovaOptions) => MethodDecorator;
export declare const InstanceProperty: () => PropertyDecorator;
export declare const CordovaCheck: (config?: CordovaOptions) => MethodDecorator;
export declare const InstanceCheck: (config?: CordovaOptions) => MethodDecorator;
export declare const CordovaFunctionOverride: () => MethodDecorator;
