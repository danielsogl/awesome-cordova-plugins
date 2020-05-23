import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Interface of a blink up options.
 */
export interface BlinkUpOptions {
  apiKey: string;
  developmentPlanId?: string;
  isInDevelopment?: boolean;
  timeoutMs?: number;
}

/**
 * Interface of a blink up wifi options.
 */
export interface BlinkUpWifiOptions {
  apiKey: string;
  timeoutMs?: number;
  ssid: string;
  password: string;
}

/**
 * Interface of a blink up wps options.
 */
export interface BlinkUpWPSOptions {
  apiKey: string;
  timeoutMs?: number;
  wpsPin: string;
}

/**
 * @name BlinkUp
 * @description
 * Electric Imp BlinkUp ionic plugin.
 *
 * @usage
 * ```typescript
 * import { BlinkUp } from '@ionic-native/blinkup/ngx';
 *
 * const options = <BlinkUpWifiOptions>{
 *    apiKey: 'API_KEY',
 *    timeoutMs: 60000,
 *    ssid: 'MY_SSID',
 *    password: 'MY_PASSWORD'
 *  }
 *  BlinkUp.flashWifiBlinkUp(options).subscribe(
 *     (result) => console.log('Done'),
 *     (error) => console.log(error)
 *   )
 * ```
 */
@Plugin({
  pluginName: 'BlinkUp',
  plugin: 'cordova-plugin-blinkup',
  pluginRef: 'blinkup',
  repo: 'https://github.com/SensorShare/cordova-plugin-blinkup',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class BlinkUp extends IonicNativePlugin {
  /**
   * startBlinkUp - starts the blinkup process
   * @param {module:blinkup.BlinkUpOptions} options BlinkUp Options
   * @return {Observable<any>} Returns an Observable
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
  })
  startBlinkUp(options: BlinkUpOptions): Observable<any> {
    return;
  }

  /**
   * flashWifiBlinkUp - invokes the flash wifi process
   * @param {module:blinkup.BlinkUpWifiOptions} options BlinkUp Wifi Options
   * @return {Observable<any>} Returns an Observable
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
  })
  flashWifiBlinkUp(options: BlinkUpWifiOptions): Observable<any> {
    return;
  }

  /**
   * flashWPSBlinkUp - invokes the flash wps process
   * @param {module:blinkup.BlinkUpWPSOptions} options BlinkUp WPS Options
   * @return {Observable<any>} Returns an Observable
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
  })
  flashWPSBlinkUp(options: BlinkUpWPSOptions): Observable<any> {
    return;
  }

  /**
   * abortBlinkUp - abort blinkup process
   * @return {Observable<any>} Returns an Observable
   */
  @Cordova({
    observable: true,
  })
  abortBlinkUp(): Observable<any> {
    return;
  }

  /**
   * clearBlinkUpData - clear wifi data
   * @return {Observable<any>} Returns an Observable
   */
  @Cordova({
    observable: true,
  })
  clearBlinkUpData(): Observable<any> {
    return;
  }
}
