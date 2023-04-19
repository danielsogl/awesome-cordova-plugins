import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Wikitude Plugin
 * @description
 * This plugin  helps to bridge the functions in Cordova Plugin of Wikitude to Ionic/Angular for Capacitor
 *
 * @usage
 * ```typescript
 * import { WikitudePlugin } from '@awesome-cordova-plugins/wikitude-plugin';
 *
 *
 * constructor(private wikitudePlugin: WikitudePlugin) { }
 *
 * ...
 *
 *
 * this.wikitudePlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'WikitudePlugin',
  plugin: 'com.wikitude.phonegap.wikitudeplugin',
  pluginRef: 'WikitudePlugin',
  repo: 'git+https://github.com/Wikitude/wikitude-phonegap.git',
  install: '',
  installVariables: [],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class WikitudePlugin extends AwesomeCordovaNativePlugin {
  @Cordova()
  isDeviceSupported(successCallback: any, errorCallback: any, requiredFeatures: any): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  loadARchitectWorld(
    successCallback: any,
    errorCallback: any,
    arExperienceUrl: any,
    requiredFeatures: any,
    startupConfiguration: any
  ): Promise<void> {
    return;
  }

  @Cordova()
  close(): Promise<void> {
    return;
  }

  @Cordova()
  requestAccess(successCallback: any, errorCallback: any, requiredFeatures: any): Promise<void> {
    return;
  }

  @Cordova()
  setOnUrlInvokeCallback(onUrlInvokeCallback: any): Promise<void> {
    return;
  }

  @Cordova()
  callJavaScript(js: any): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setJSONObjectReceivedCallback(onJSONObjectReceived: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
