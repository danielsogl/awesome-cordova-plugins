import {promisify} from '../util';

let PLUGIN_REF = 'navigator.camera';

export var Camera = {
  // Metadata
  name: 'Camera',
  plugin: 'cordova-plugin-camera',

  // Methods
  getPicture: promisify(PLUGIN_REF, 'getPicture', 0, 1),
  cleanup: promisify(PLUGIN_REF, 'cleanup', 0, 1)
}
