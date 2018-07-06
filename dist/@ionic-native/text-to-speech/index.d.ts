import { IonicNativePlugin } from '@ionic-native/core';
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
 * ```typescript
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
export declare class TextToSpeech extends IonicNativePlugin {
    /**
     * This function speaks
     * @param textOrOptions {string | TTSOptions} Text to speak or TTSOptions
     * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
     */
    speak(textOrOptions: string | TTSOptions): Promise<any>;
    /**
     * Stop any current TTS playback
     * @return {Promise<any>}
     */
    stop(): Promise<any>;
}
