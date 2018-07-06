import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export declare type SpeechRecognitionListeningOptions = SpeechRecognitionListeningOptionsIOS | SpeechRecognitionListeningOptionsAndroid;
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
export declare class SpeechRecognition extends IonicNativePlugin {
    /**
     * Check feature available
     * @return {Promise<boolean>}
     */
    isRecognitionAvailable(): Promise<boolean>;
    /**
     * Start the recognition process
     * @return {Promise< Array<string> >} list of recognized terms
     */
    startListening(options?: SpeechRecognitionListeningOptions): Observable<Array<string>>;
    /**
     * Stop the recognition process
     */
    stopListening(): Promise<void>;
    /**
     * Get the list of supported languages
     * @return {Promise< Array<string> >} list of languages
     */
    getSupportedLanguages(): Promise<Array<string>>;
    /**
     * Check permission
     * @return {Promise<boolean>} has permission
     */
    hasPermission(): Promise<boolean>;
    /**
     * Request permissions
     * @return {Promise<void>}
     */
    requestPermission(): Promise<void>;
}
