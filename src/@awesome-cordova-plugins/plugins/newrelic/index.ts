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
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name newrelic
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { newrelic } from '@awesome-cordova-plugins/newrelic';
 *
 *
 * constructor(private newrelic: newrelic) { }
 *
 * ...
 *
 *
 * this.newrelic.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'NewRelic',
  plugin: 'newrelic-cordova-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'NewRelic', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/ndesai-newrelic/newrelic-cordova-plugin', // the github repository URL for the plugin
  install:
    'ionic cordova plugin add https://github.com/ndesai-newrelic/newrelic-cordova-plugin.git --variable IOS_APP_TOKEN="{ios-app-token}" --variable ANDROID_APP_TOKEN="{android-app-token}"', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['IOS_APP_TOKEN', 'ANDROID_APP_TOKEN'], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class NewRelic extends AwesomeCordovaNativePlugin {
  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    sync: true,
  })
  setUserId(userId: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  setAttribute(name: string, value: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  removeAttribute(name: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  recordBreadcrumb(name: string, eventAttributes: Map<string, any>): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  recordCustomEvent(eventType: string, eventName: string, eventAttributes: Map<string, any>): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  startInteraction(name: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  endInteraction(name: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  recordError(name: string, message: string, stack: string, isFatal: boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  crashNow(message: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  currentSessionId(name: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  incrementAttribute(name: string, value: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  recordMetric(name: string, category: any, value: Number, countUnit: string, valueUnit: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  removeAllAttributes(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  setMaxEventPoolSize(maxPoolSize: Number): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  setMaxEventBufferTime(maxBufferTimeInSeconds: Number): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  analyticsEventEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  networkRequestEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  networkErrorRequestEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    sync: true,
  })
  httpRequestBodyCaptureEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
