import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

export interface NativeKeyboardOptions {
  /**
   * A function invoked when the user submits his input. Receives the text as a single property. Make sure your page is UTF-8 encoded so Chinese and Emoji are rendered OK.
   */
  onSubmit: Function;

  /**
   * A function invoked when the keyboard is about to pop up. Receives the height as a single property. (iOS only)
   */
  onKeyboardWillShow: Function;

  /**
   * A function invoked when the keyboard popped up. Receives the height as a single property.
   */
  onKeyboardDidShow: Function;

  /**
   * A function invoked when the keyboard is about to close. (iOS only)
   */
  onKeyboardWillHide: Function;

  /**
   * A function invoked when the keyboard closed.
   */
  onKeyboardDidHide: Function;

  /**
   * A function invoked when any key is pressed, sends the entire text as response.
   */
  onTextChanged: Function;

  /**
   * Highly recommended to pass in if you want to replicate the behavior of the video's above (scroll down when the keyboard opens). Pass in the scrollable DOM element containing the messages.
   */
  autoscrollElement: HTMLElement;

  /**
   * If `autoscrollElement` was set you can also make the list scroll down initially, when the messenger bar (without the keyboard popping up) is shown.
   */
  scrollToBottomAfterMessengerShows: boolean;

  /**
   * Setting this to `true` is like the video's above: the keyboard doesn't close upon submit. Defaults to `false`.
   */
  keepOpenAfterSubmit: boolean;

  /**
   * Makes the messenger bar slide in from the bottom. Defaults to `false`.
   */
  animated: boolean;

  /**
   * Open the keyboard when showing the messenger. Defaults to `false`.
   */
  showKeyboard: boolean;

  /**
   * The default text set in the messenger input bar.
   */
  text: string;

  /**
   * The color of the typed text. Defaults to `#444444`.
   */
  textColor: string;

  /**
   * Like a regular HTML input placeholder.
   */
  placeholder: string;

  /**
   * The color of the placeholder text. Defaults to `#CCCCCC`.
   */
  placeholderColor: string;

  /**
   * The background color of the messenger bar. Defaults to `#F6F6F6`.
   */
  backgroundColor: string;

  /**
   * The background color of the textview. Looks nicest on Android if it's the same color as the `backgroundColor` property. Defaults to `#F6F6F6`.
   */
  textViewBackgroundColor: string;

  /**
   * The border color of the textview. Defaults to `#666666`. (iOS only)
   */
  textViewBorderColor: string;

  /**
   * Setting this > 0 will make a counter show up on iOS (and ignore superfluous input on Android, for now)
   */
  maxChars: number;

  /**
   * Options are: `"none"`, `"split"`, `"countdown"`, `"countdownreversed"`. Note that if `maxChars` is set, `"none"` will still show a counter. Defaults to `"none"`. (iOS only)
   */
  counterStyle: string;

  /**
   * Options are: "default", "decimalpad", "phonepad", "numberpad", "namephonepad", "number", "email", "twitter", "url", "alphabet", "search", "ascii". (iOS only)
   */
  type: string;

  /**
   * Options are: "light", "dark". (iOS only)
   */
  appearance: string;

  /**
   * Disables things like the Emoji keyboard and the Predicive text entry bar (iOS only)
   */
  secure: boolean;

  /**
   *
   */
  leftButton: NativeKeyboardLeftButton;

  /**
   *
   */
  rightButton: NativeKeyboardButton;
}

export interface NativeKeyboardButton {
  /**
   * Either "text" (Android only currently), "fontawesome" or "ionicon".
   */
  type: string;
  /**
   * Depends on the type. Examples: for "text" use "Send", for "fontawesome" use "fa-battery-quarter", for "ionicon" use "\uf48a" (go to http://ionicons.com, right-click and inspect the icon and use the value you find in :before). Note that some fonticons are not supported as the embedded fonts in the plugin may lag behind a little. So try one of the older icons first.
   */
  value: string;
  /**
   * If type is "text" you can set this to either "normal", "bold" or "italic".
   */
  textStyle: string;
  /**
   * A function invoked when the button is pressed. Use this button to prompt the user what he wants to do next by for instance rendering an ActionSheet.
   */
  onPress: Function;
}

export interface NativeKeyboardLeftButton extends NativeKeyboardButton {
  /**
   * Set to `true` to disable the button once text has been entered.
   */
  disabledWhenTextEntered: boolean;
}

export interface NativeKeyboardUpdateMessengerOptions {
  /**
   * Replace the messenger's text by this. The current text remains if omitted.
   */
  text: string;
  /**
   * Position the cursor anywhere in the text range. Defaults to the end of the text.
   */
  caretIndex: number;
  /**
   * If `false` or omitted no changes to the keyboard state are made.
   */
  showKeyboard: boolean;
}

/**
 * @paid
 * @name Native Keyboard
 * @description
 * A cross platform WhatsApp / Messenger / Slack -style keyboard even. For your Cordova app.
 * @usage
 * ```
 * import { NativeKeyboard } from '@awesome-cordova-plugins/native-keyboard/ngx';
 *
 *
 * constructor(private nativeKeyboard: NativeKeyboard) { }
 *
 * ...
 *
 *
 * ```
 * @interfaces
 * NativeKeyboardOptions
 * NativeKeyboardButton
 * NativeKeyboardLeftButton
 * NativeKeyboardUpdateMessengerOptions
 */
@Plugin({
  pluginName: 'NativeKeyboard',
  plugin: 'cordova-plugin-native-keyboard',
  pluginRef: 'NativeKeyboard',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class NativeKeyboard extends AwesomeCordovaNativePlugin {
  /**
   * Show messenger
   *
   * @param options {NativeKeyboardOptions}
   */
  @Cordova({ sync: true })
  showMessenger(options: NativeKeyboardOptions): void {}

  /**
   * Hide messenger
   *
   * @param options {NativeKeyboardOptions}
   */
  @Cordova({ sync: true })
  hideMessenger(options: NativeKeyboardOptions): void {}

  /**
   * Programmatically pop up the keyboard again if the user dismissed it.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  showMessengerKeyboard(): Promise<any> {
    return;
  }

  /**
   * Programmatically hide the keyboard (but not the messenger bar)
   */
  @Cordova()
  hideMessengerKeyboard(): Promise<any> {
    return;
  }

  /**
   * Manipulate the messenger while it's open. For instance if you want to update the text programmatically based on what the user typed.
   *
   * @param options
   */
  @Cordova()
  updateMessenger(options: NativeKeyboardUpdateMessengerOptions): Promise<any> {
    return;
  }
}
