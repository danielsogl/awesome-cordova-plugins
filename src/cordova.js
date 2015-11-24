import {Promise} from 'es6-promise';


const promisifyCordova = (pluginObj, pluginName, methodName) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      if(!window.cordova) {
        console.warn('Cordova: tried calling', '"' + pluginName + '.' + methodName + '"', 'but Cordova is not defined. Please make sure you have cordova.js included in your index.html file and you are running in a proper cordova environment');
        reject({
          error: 'cordova_not_available'
        });
        return;
      }

      if(!pluginObj.installed()) {
        console.warn('Cordova: tried calling', '"' + pluginName + '.' + methodName + '"', 'but the ' + pluginObj.plugin + ' plugin is not installed.');
        return;
      }
      console.log('Cordova: exec(' + pluginName + ', ' + methodName +')');
      cordova.exec(resolve, reject, pluginName, methodName, args);
    })
  }
}

export {promisifyCordova};
