import { Plugin, Cordova } from './plugin';
import { Observable } from 'rxjs/Observable';

export type SpeechRecognitionListeningOptions = SpeechRecognitionListeningOptionsIOS | SpeechRecognitionListeningOptionsAndroid;

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
}

/**
 * @beta
 * @name SpeechRecognition
 * @description
 * This plugin does speech recognition using cloud services
 *
 * @usage
 * ```
 * import { SpeechRecognition } from 'ionic-native';
 *
 * // Check feature available
 * SpeechRecognition.isRecognitionAvailable()
 *   .then((available: boolean) => console.log(available))
 *
 * // Start the recognition process
 * SpeechRecognition.startListening(options)
 *   .subscribe(
 *     (matches: Array<string>) => console.log(matches),
 *     (onerror) => console.log('error:', onerror)
 *   )
 *
 * // Stop the recognition process (iOS only)
 * SpeechRecognition.stopListening()
 *
 * // Get the list of supported languages
 * SpeechRecognition.getSupportedLanguages()
 *   .then(
 *     (languages: Array<string>) => console.log(languages),
 *     (error) => console.log(error)
 *   )
 *
 * // Check permission
 * SpeechRecognition.hasPermission()
 *   .then((hasPermission: boolean) => console.log(hasPermission))
 *
 * // Request permissions
 * SpeechRecognition.requestPermission()
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
export class SpeechRecognition {

  /**
   * Check feature available
   * @return {Promise<boolean>}
   */
  @Cordova()
  static isRecognitionAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Start the recognition process
   * @return {Promise< Array<string> >} list of recognized terms
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,

  })
  static startListening(options?: SpeechRecognitionListeningOptions): Observable<Array<string>> {
    return;
  }

  /**
   * Stop the recognition process
   */
  @Cordova({
    platforms: ['iOS']
  })
  static stopListening(): Promise<void> {
    return;
  }

  /**
   * Get the list of supported languages
   * @return {Promise< Array<string> >} list of languages
   */
  @Cordova()
  static getSupportedLanguages(): Promise<Array<string>> {
    return;
  }

  /**
   * Check permission
   * @return {Promise<boolean>} has permission
   */
  @Cordova()
  static hasPermission(): Promise<boolean> {
    return;
  }

  /**
   * Request permissions
   * @return {Promise<void>}
   */
  @Cordova()
  static requestPermission(): Promise<void> {
    return;
  }

}
