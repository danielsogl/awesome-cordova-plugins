declare var window: any;

/**
 * @private
 */
export function get(obj, path) {
  path = path.split('.');
  for (let i = 0; i < path.length; i++) {
    if (!obj) { return null; }
    obj = obj[path[i]];
  }
  return obj;
}


/**
 * @private
 */
export function getPromise(cb) {

  const tryNativePromise = () => {
    if (window.Promise) {
      return new Promise((resolve, reject) => {
        cb(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular 2 or on a recent browser.');
    }
  };

  return tryNativePromise();
}

/**
 * @private
 * @param pluginRef
 * @returns {null|*}
 */
export function getPlugin(pluginRef: string): any {
  return get(window, pluginRef);
};

/**
 * @private
 */
export const pluginWarn = function(pluginName: string, plugin?: string, method?: string) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but it\'s not installed.');
  }
  if (plugin) {
    console.warn('Install the ' + pluginName + ' plugin: \'ionic plugin add ' + plugin + '\'');
  }
};

/**
 * @private
 * @param pluginName
 * @param method
 */
export const cordovaWarn = function(pluginName: string, method?: string) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  }
};
