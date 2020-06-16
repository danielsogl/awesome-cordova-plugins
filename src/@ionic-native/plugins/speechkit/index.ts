import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name SpeechKit
 * @description
 * Implementation of Nuance SpeechKit SDK on Ionic
 *
 * @usage
 * ```typescript
 * import { SpeechKit } from '@ionic-native/speechkit/ngx';
 *
 * constructor(private speechkit: SpeechKit) { }
 *
 *
 * // find voice names that match language from: https://developer.nuance.com/public/index.php?task=supportedLanguages
 * this.speechkit.tts('Text to be read out loud', 'ENG-GBR', 'Serena').then(
 *   (msg) => { console.log(msg); },
 *   (err) => { console.log(err); }
 * );
 * ```
 */
@Plugin({
  pluginName: 'SpeechKit',
  plugin: 'cordova-plugin-nuance-speechkit',
  pluginRef: 'plugins.speechkit',
  repo: 'https://github.com/Shmarkus/cordova-plugin-nuance-speechkit',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SpeechKit extends IonicNativePlugin {
  /**
   * Speak text out loud in given language
   * @returns {Promise<string>}
   */
  @Cordova()
  tts(text: string, language: string, voice: string): Promise<string> {
    return;
  }

  /**
   * Try to recognize what the user said
   * @returns {Promise<string>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  asr(language: string): Promise<string> {
    return;
  }
}
