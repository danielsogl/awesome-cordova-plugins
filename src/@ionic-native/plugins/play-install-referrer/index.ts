/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'PlayInstallReferrer',
  plugin: 'cordova-plugin-play-installreferrer', // npm package name, example: cordova-plugin-camera
  pluginRef: 'installReferrer', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/swayangjit/cordova-plugin-play-installreferrer', // the github repository URL for the plugin
  platforms: ['Android'],
})
@Injectable()
export class PlayInstallReferrer extends IonicNativePlugin {
  @Cordova()
  getReferrer(): Promise<any> {
    return;
  }
}
