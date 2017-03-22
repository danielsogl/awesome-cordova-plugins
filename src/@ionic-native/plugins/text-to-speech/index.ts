import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

export interface TTSOptions {
    /** text to speak */
    text: string;
    /** a string like 'en-US', 'zh-CN', etc */
    locale?: string;
    /** speed rate, 0 ~ 1 */
    rate?: number;
}

/**
 * @name Text To Speech
 * @description
 * Text to Speech plugin
 *
 * @usage
 * ```
 * import { TextToSpeech } from '@ionic-native/text-to-speech';
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
  pluginName: 'Text To Speech',
  plugin: 'cordova-plugin-tts',
  pluginRef: 'TTS',
  repo: 'https://github.com/vilic/cordova-plugin-tts'
})
@Injectable()
export class TextToSpeech {

  /**
   * This function speaks
   * @param options {string | TTSOptions} Text to speak or TTSOptions
   * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  speak(options: string | TTSOptions): Promise<any> {
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

}
