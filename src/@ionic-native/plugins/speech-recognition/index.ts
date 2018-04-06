import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export type SpeechRecognitionListeningOptions =
  | SpeechRecognitionListeningOptionsIOS
  | SpeechRecognitionListeningOptionsAndroid;

export interface SpeechRecognitionListeningOptionsIOS {
  /**
   * used language for recognition (default `"en-US"`)
   */
  language?: string;

  /**
   * umber of return matches (default `5`)
   */
  matches?: number;

  /**
   * Allow partial results to be returned (default `false`)
   */
  showPartial?: boolean;
}

export interface SpeechRecognitionListeningOptionsAndroid {
  /**
   * used language for recognition (default `"en-US"`)
   */
  language?: string;

  /**
   * number of return matches (maximum number of matches)
   */
  matches?: number;

  /**
   * displayed prompt of listener popup window
   */
  prompt?: string;

  /**
   * display listener popup window with prompt (default `true`)
   */
  showPopup?: boolean;

  /**
   * Allow partial results to be returned (default `false`)
   */
  showPartial?: boolean;
}

/**
 * @name Speech Recognition
 * @description
 * This plugin does speech recognition using cloud services
 *
 * @usage
 * ```typescript
 * import { SpeechRecognition } from '@ionic-native/speech-recognition';
 *
 * constructor(private speechRecognition: SpeechRecognition) { }
 *
 * ...
 *
 *
 *
 * // Check feature available
 * this.speechRecognition.isRecognitionAvailable()
 *   .then((available: boolean) => console.log(available))
 *
 * // Start the recognition process
 * this.speechRecognition.startListening(options)
 *   .subscribe(
 *     (matches: Array<string>) => console.log(matches),
 *     (onerror) => console.log('error:', onerror)
 *   )
 *
 * // Stop the recognition process (iOS only)
 * this.speechRecognition.stopListening()
 *
 * // Get the list of supported languages
 * this.speechRecognition.getSupportedLanguages()
 *   .then(
 *     (languages: Array<string>) => console.log(languages),
 *     (error) => console.log(error)
 *   )
 *
 * // Check permission
 * this.speechRecognition.hasPermission()
 *   .then((hasPermission: boolean) => console.log(hasPermission))
 *
 * // Request permissions
 * this.speechRecognition.requestPermission()
 *   .then(
 *     () => console.log('Granted'),
 *     () => console.log('Denied')
 *   )
 *
 * ```
 */
@Plugin({
  pluginName: 'SpeechRecognition',
  plugin: 'cordova-plugin-speechrecognition',
  pluginRef: 'plugins.speechRecognition',
  repo: 'https://github.com/pbakondy/cordova-plugin-speechrecognition',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class SpeechRecognition extends IonicNativePlugin {
  /**
   * Check feature available
   * @return {Promise<boolean>}
   */
  @Cordova()
  isRecognitionAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Start the recognition process
   * @return {Promise< Array<string> >} list of recognized terms
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true
  })
  startListening(
    options?: SpeechRecognitionListeningOptions
  ): Observable<Array<string>> {
    return;
  }

  /**
   * Stop the recognition process
   */
  @Cordova()
  stopListening(): Promise<void> {
    return;
  }

  /**
   * Get the list of supported languages
   * @return {Promise< Array<string> >} list of languages
   */
  @Cordova()
  getSupportedLanguages(): Promise<Array<string>> {
    return;
  }

  /**
   * Check permission
   * @return {Promise<boolean>} has permission
   */
  @Cordova()
  hasPermission(): Promise<boolean> {
    return;
  }

  /**
   * Request permissions
   * @return {Promise<void>}
   */
  @Cordova()
  requestPermission(): Promise<void> {
    return;
  }
}
