declare const window: any;

/**
 * @private
 */
export const get = (element: Element | Window, path: string): any => {
  const paths: string[] = path.split('.');
  let obj: any = element;
  for (let i: number = 0; i < paths.length; i++) {
    if (!obj) { return null; }
    obj = obj[paths[i]];
  }
  return obj;
};


/**
 * @private
 */
export const getPromise = (callback: Function): Promise<any> => {

  const tryNativePromise = () => {
    if (window.Promise) {
      return new Promise((resolve, reject) => {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  return tryNativePromise();
};

/**
 * @private
 * @param pluginRef
 * @returns {null|*}
 */
export const getPlugin = (pluginRef: string): any => {
  return get(window, pluginRef);
};

/**
 * @private
 */
export const pluginWarn = (pluginName: string, plugin?: string, method?: string): void => {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but it\'s not installed.');
  }
  if (plugin) {
    console.warn('Install the ' + pluginName + ' plugin: \'ionic cordova plugin add ' + plugin + '\'');
  }
};

/**
 * @private
 * @param pluginName
 * @param method
 */
export const cordovaWarn = (pluginName: string, method?: string): void => {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  }
};
