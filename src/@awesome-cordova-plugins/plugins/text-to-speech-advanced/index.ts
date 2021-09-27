import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

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
  /** Voice language */
  language: string;
  /** Voice identifier string */
  identifier: string;
}

/**
 * @name Text To Speech Advanced
 * @description
 * Text to Speech plugin
 * @usage
 * ```typescript
 * import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
 *
 * constructor(private tts: TextToSpeechAdvanced) { }
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
 * TTSVoice
 */
@Plugin({
  pluginName: 'Text To Speech Advanced',
  plugin: 'cordova-plugin-tts-advanced',
  pluginRef: 'TTS',
  repo: 'https://github.com/spasma/cordova-plugin-tts-advanced',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class TextToSpeechAdvanced extends AwesomeCordovaNativePlugin {
  /**
   * This function speaks
   *
   * @param textOrOptions {string | TTSOptions} Text to speak or TTSOptions
   * @returns {Promise<any>} Returns a promise that resolves when the speaking finishes
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
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  stop(): Promise<any> {
    return;
  }

  /**
   * Get all voices
   *
   * @returns {Promise<TTSVoice[]>}
   */
  @Cordova()
  getVoices(): Promise<TTSVoice[]> {
    return;
  }
}
