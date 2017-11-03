import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';


/**
 * @name UXCam
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { UXCam } from '@ionic-native/ux-cam';
 *
 *
 * constructor(private uXCam: UXCam) { }
 *
 * ...
 *
 *
 * this.uXCam.startWithKey('3jkhg3j4h5g')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'UXCam',
  plugin: 'cordova-uxcam', // npm package name, example: cordova-plugin-camera
  pluginRef: 'UXCam', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/uxcam/cordova-uxcam', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
  install: '', // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class UXCam extends IonicNativePlugin {

  /**
   * Starts the UXCam application to ping the server, get the settings configurations and start capturing the data according to the configuration. Use startWithKey with appVariantIdentifier parameter to separate Debug and Release builds
   * 
   * @param {string} key 
   * @returns {Promise<any>} 
   */
  @Cordova()
  startWithKey(key: string): Promise<any> {
    return;
  }

  /**
   * Starts the UXCam session and sets a variant identifier for the app to differentiate builds of the same app on the dashboard.
   * 
   * @param {string} key 
   * @param {string} appVariant 
   * @returns {Promise<any>} 
   */
  @Cordova()
  startWithKeyAndAppVariant(key: string, appVariant: string): Promise<any> {
    return;
  }

  /**
   * Stops the faceCamera video recording if your application uses camera
   * 
   * @returns {Promise<any>} 
   */
  @Cordova()
  stopUXCamCameraVideo(): Promise<any> {
    return;
  }

  /**
   * Stops the UXCam application and sends captured data to the server. Use this to start sending the data on UXCam server without waiting for the app going into the background.
   * 
   * @returns {Promise<any>} 
   */
  @Cordova()
  stopApplicationAndUploadData(): Promise<any> {
    return;
  }

  /**
   * You can mark a user specifically if certain condition are met making them a good user for further testing. You can then filter these users and perform further test.
   * 
   * @returns {Promise<any>} 
   */
  @Cordova()
  markUserAsFavorite(): Promise<any> {
    return;
  }

  @Cordova()
  setAutomaticScreenNameTagging(enableAutomaticNameTagging: boolean): Promise<any> {
    return;
  }

  /**
   * UXCam captures the view controller name automatically but in case where it doesn’t (such as in OpenGL) or you would like to set a different unique name, use this function.
   * 
   * @param {string} screenName 
   * @returns {Promise<any>} 
   */
  @Cordova()
  tagScreenName(screenName: string): Promise<any> {
    return;
  }

  /**
   * UXCam uses a unique number to tag a device. You can tag a device allowing you to search for it on the dashboard and review their session further.
   * 
   * @param {string} userName 
   * @returns {Promise<any>} 
   */
  @Cordova()
  tagUsersName(userName: string): Promise<any> {
    return;
  }

  /**
   * Insert a general tag into the timeline - stores the tag with the timestamp when it was added.
   * 
   * @param {string} eventName 
   * @returns {Promise<any>} 
   */
  @Cordova()
  addTag(eventName: string): Promise<any> {
    return;
  }

  /**
   * Insert a general tag into the timeline - stores the tag with the timestamp when it was added, along with the properties to associate with this instance of the tag.
   * 
   * @param {string} eventName 
   * @param {*} properties 
   * @returns {Promise<any>} 
   */
  @Cordova()
  addTagWithProperties(eventName: string, properties: any): Promise<any> {
    return;
  }

  /**
 * Hide / un-hide the screen from being recorded. Call once with 'true' to start hiding the screen and later with 'false' to record normal contents again. Useful to hide sensitive entry fields that you would not want to record the contents of.
 * 
 * @param {boolean} occludeSensitiveScreen 
 * @returns {Promise<any>}
 */
  @Cordova()
  occludeSensitiveScreen(occludeSensitiveScreen: boolean): Promise<any> {
    return;
  }

  @Cordova()
  addVerificationListener(): Promise<any> {
    return;
  }

  @Cordova()
  urlForCurrentUser(): Promise<any> {
    return;
  }

  @Cordova()
  urlForCurrentSession(): Promise<any> {
    return;
  }

}
