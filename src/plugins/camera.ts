import {Plugin, Cordova} from './plugin';

/**
 * Take a photo or capture video.
 *
 * Requires Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```js
 * Camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = "data:image/jpeg;base64," + imageData;
 * }, (err) => {
 * });
 * ```
 */
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
