import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface TTSOptions {
  /** text to speak */
  text: string;
  /** cancel, boolean: true/false */
  identifier: string;
  /** voice identifier (iOS / Android) from getVoices */
  locale?: string;
  /** speed rate, 0 ~ 1 */
  rate?: number;
  /** pitch, 0 ~ 1 */
  pitch?: number;
  /** cancel, boolean: true/false */
  cancel?: boolean;
}

export interface TTSVoice {
  /** Voice name */
  name: string;
  /** Language **/
  language: string;
  /** Voice identifier string */
  identifier: string;
}

/**
 * @name Text To Speech
 * @description
 * Text to Speech plugin
 *
 * @usage
 * ```typescript
 * import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
 *
 * constructor(private tts: TextToSpeech) { }
 *
 * ...
 *
 * this.tts.speak('Hello World')
 *   .then(() => console.log('Success'))
 *   .catch((reason: any) => console.log(reason));
 *
 * ```
 * @interfaces
 * TTSOptions
 */
@Plugin({
  pluginName: 'Text To Speech Advanced',
  plugin: 'cordova-plugin-tts-advanced',
  pluginRef: 'TTS',
  repo: 'https://github.com/spasma/cordova-plugin-tts-advanced',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class TextToSpeechAdvanced extends IonicNativePlugin {
  /**
   * This function speaks
   * @param textOrOptions {string | TTSOptions} Text to speak or TTSOptions
   * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  speak(textOrOptions: string | TTSOptions): Promise<any> {
    return;
  }

  /**
   * Stop any current TTS playback
   * @return {Promise<any>}
   */
  @Cordova()
  stop(): Promise<any> {
    return;
  }

  /**
   * Get all voices
   * @return {Promise<TTSVoice[]>}
   */
  @Cordova()
  getVoices(): Promise<TTSVoice[]> {
    return;
  }
}
