import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * This is the language object which will be returned by `downloadModel`, `deleteModel`, `getAvailableModels` and `getDownloadedModels` methods.
 */
export interface LanguageModel {
  /**
   * BCP-47 language code of the language. For example: en
   * For full list of languages codes, see https://firebase.google.com/docs/ml-kit/translation-language-support
   */
  code: string;

  /**
   * Display name of the language. For example: English
   */
  displayName: string;
}

/**
 * @name MLKitTranslate
 * @description
 * Plugin that implements MLKit Translation and Language Identification features.
 * @usage
 * ```typescript
 * import { MLKitTranslate } from '@awesome-cordova-plugins/ml-kit-translate';
 *
 *
 * constructor(private mlkitTranslate: MLKitTranslate) { }
 *
 * ...
 *
 * this.mlkitTranslate.translate('Hello', 'en', 'es')
 *   .then((resultText: string) => console.log(res))
 *   .catch((error: string) => console.error(error));
 *
 * @interfaces
 * LanguageModel
 * ```
 */
@Plugin({
  pluginName: 'MLKitTranslate',
  plugin: 'cordova-plugin-mlkit-translate',
  pluginRef: 'MLKitTranslate',
  repo: 'https://github.com/rigelglen/cordova-plugin-mlkit-translate',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class MLKitTranslate extends AwesomeCordovaNativePlugin {
  /**
   * Translates text from one language to another. Requires the source and target languages need to be downloaded.
   * If not the languages are downloaded in the background automatically.
   *
   * @param text {string} text to be translated
   * @param targetLanguage {string} BCP-47 language code of the language to translate to
   * @param sourceLanguage {string=} (optional) BCP-47 language code of the language to translate to. If not provided, source language is inferred from text
   * @returns {Promise<string>} Returns a promise that resolves with the translated text
   */
  @Cordova()
  translate(text: string, targetLanguage: string, sourceLanguage?: string): Promise<string> {
    return;
  }

  /**
   * Determines the language of a string of text.
   *
   * @param text {string} text to be translated
   * @returns {Promise<LanguageModel>} Returns a promise that resolves with the identified language
   */
  @Cordova()
  identifyLanguage(text: string): Promise<LanguageModel> {
    return;
  }

  /**
   * List of language models that have been downloaded to the device.
   *
   * @returns {Promise<LanguageModel[]>} Returns a promise that resolves with an array of languages that have been downloaded.
   */
  @Cordova()
  getDownloadedModels(): Promise<LanguageModel[]> {
    return;
  }

  /**
   * List of language models that can be downloaded.
   *
   * @returns {Promise<LanguageModel[]>} Returns a promise that resolves with an array of possible languages that can be downloaded.
   */
  @Cordova()
  getAvailableModels(): Promise<LanguageModel[]> {
    return;
  }

  /**
   * Downloads a specified language model.
   *
   * @param code {string} BCP-47 language code of the language to download
   * @returns {Promise<LanguageModel>} Returns a promise that resolves with the downloaded language.
   */
  @Cordova()
  downloadModel(code: string): Promise<LanguageModel> {
    return;
  }

  /**
   * Deletes a specified language model.
   *
   * @param code {string} BCP-47 language code of the language to delete
   * @returns {Promise<LanguageModel>} Returns a promise that resolves with the deleted language.
   */
  @Cordova()
  deleteModel(code: string): Promise<LanguageModel> {
    return;
  }
}
