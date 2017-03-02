import { Plugin, Cordova } from './plugin';

export interface TTSOptions {
    /** text to speak */
    text: string;
    /** a string like 'en-US', 'zh-CN', etc */
    locale?: string;
    /** speed rate, 0 ~ 1 */
    rate?: number;
}

/**
 * @name TextToSpeech
 * @description
 * Text to Speech plugin
 *
 * @usage
 * ```
 * import {TextToSpeech} from 'ionic-native';
 *
 * TextToSpeech.speak('Hello World')
 *   .then(() => console.log('Success'))
 *   .catch((reason: any) => console.log(reason));
 *
 * ```
 * @interfaces
 * TTSOptions
 */
@Plugin({
  pluginName: 'TextToSpeech',
  plugin: 'cordova-plugin-tts',
  pluginRef: 'TTS',
  repo: 'https://github.com/vilic/cordova-plugin-tts'
})
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
  static speak(options: string | TTSOptions): Promise<any> {
    return;
  }

  static stop(): Promise<any> {
    return;
  }

}
