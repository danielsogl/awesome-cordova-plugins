import {Plugin, Cordova} from './plugin';

let PLUGIN_REF = 'navigator.camera';

@Plugin({
  name: 'Camera',
  plugin: 'cordova-plugin-camera',
  pluginRef: 'navigator.camera'
})
export class Camera {
  @Cordova({
    successIndex: 0,
    errIndex: 1
  })
  static getPicture;

  @Cordova({
    successIndex: 0,
    errIndex: 1
  })
  static cleanup;
}
