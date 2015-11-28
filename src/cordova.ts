//patch the window definition
declare var Promise;
declare var cordova;
declare var window;

import {get} from './util';

export class Cordova {
  static hasPlugin(pluginRef: string) {
    return !!this.plugin(pluginRef);
  }
  static plugin(pluginRef: string) {
    return get(window, pluginRef);
  }

  static promisify(pluginRef, pluginName, methodName, successIndex, errorIndex) {
    return (...args) => {
      return new Promise((resolve, reject) => {
        if(!window.cordova) {
          console.warn('Cordova: tried calling', '"' + pluginName + '.' + methodName + '"', 'but Cordova is not defined. Please make sure you have cordova.js included in your index.html file and you are running in a proper cordova environment');
          reject({
            error: 'cordova_not_available'
          });
          return;
        }

        if(!this.hasPlugin(pluginRef)) {
          console.warn('Cordova: tried calling', '"' + pluginName + '.' + methodName + '"', 'but the ' + pluginName + ' plugin is not installed.');
          reject({
            error: 'plugin_not_installed'
          });
          return;
        }
        console.log('Cordova: exec(' + pluginName + ', ' + methodName +')');

        args[successIndex] = resolve;
        args[errorIndex] = reject;

        get(window, pluginRef)[methodName].apply(this, args);
      })
    }
  }
}
