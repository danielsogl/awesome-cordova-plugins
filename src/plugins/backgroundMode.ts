import {Plugin, Cordova} from './plugin';

/**
* @name Background Mode
* @description
* The ActionSheet plugin shows a native list of options the user can choose from.
*
* Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
*
* @usage
* ```ts
* import {ActionSheet} from 'ionic-native';
*
* let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
* ActionSheet.show({
*   'title': 'What do you want with this image?',
*   'buttonLabels': buttonLabels,
*   'addCancelButtonWithLabel': 'Cancel',
*   'addDestructiveButtonWithLabel' : 'Delete'
* }).then(buttonIndex => {
*   console.log('Button pressed: ' + buttonLabels[buttonIndex - 1]);
* });
* ```
*
*/
@Plugin({
  plugin: 'cordova-plugin-background-mode',
  pluginRef: 'cordova.plugin.background-mode',
  repo: 'https://github.com/katzer/cordova-plugin-background-mode',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class BackgroundMode {
  @Cordova({
    sync: true
  })
  static enable(): void{}

  @Cordova()
  static disable(): void{}

  @Cordova()
  static isEnabled(): Promise<boolean> {return; }

  @Cordova()
  static isActive(): Promise<boolean> {return; }

  @Cordova()
  static setDefaults(options?:Defaults):void{}

  @Cordova()
  static configure(options?:Configure):void{}
  /**
  * Sets a callback for a specific event
  * @param eventName The name of the event. Available events: activate, deactivate, failure
  */
  @Cordova({
    sync: true
  })
  static on(eventName: string, callback: any): void {}
}
/**
*Configurations avaialable only on Android
*/
export interface Defaults{
  /**
  *Title of the background task
  */
  title?: String;

  /**
  *The text that scrolls itself on statusbar
  */
  ticker?: String;

  /**
  *Description of background task
  */
  text?: String;

}

export interface Configure{
  /**
  *Title of the background task
  */
  title?: String;

  /**
  *The text that scrolls itself on statusbar
  */
  ticker?: String;

  /**
  *Description of background task
  */
  text?: String;

  /**
  *Boolean, if true plugin will not display a notification. Default is false.
  */
  silent?:boolean;

}
