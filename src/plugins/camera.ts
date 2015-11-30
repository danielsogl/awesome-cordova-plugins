import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Camera',
  plugin: 'cordova-plugin-camera',
  pluginRef: 'navigator.camera'
})
export class Camera {
  @Cordova({
    // Not sure why this plugin has the success/err come first...
    callbackOrder: 'reverse'
  })
  static getPicture(options:any){};

  @Cordova()
  static cleanup(){};
}
