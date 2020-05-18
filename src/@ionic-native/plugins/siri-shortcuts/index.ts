import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface SiriShortcut {
  persistentIdentifier: string;
  title: string;
  userInfo: { [key: string]: string };
  suggestedInvocationPhrase: string;
}

export interface SiriShortcutOptions extends SiriShortcut {
  isEligibleForSearch?: boolean;
  isEligibleForPrediction?: boolean;
}

export interface ActivatedShortcutOptions {
  clear?: boolean;
}

/**
 * @beta
 * @name Siri Shortcuts
 * @description
 * This plugin only works when your app is built with XCode 10. Shortcuts will only appear on iOS-versions >= 12.0
 *
 * This plugin enables the use of Siri shortcuts in Cordova. Siri Shortcuts enable the user to perform certain actions by adding them to Siri.
 * After you have donated a shortcut to Siri, it will appear in the settings menu, after which the user is able to add the action. You can check
 * whether the user launched your app through a shortcut by calling `getActivatedShortcut()` when the app is resumed. It will return `null`
 * if it has not been launched by Siri, and if it did, it will return an object with `SiriShortcut` properties.
 *
 * @usage
 * ```typescript
 * import { SiriShortcuts } from '@ionic-native/siri-shortcuts/ngx';
 *
 *
 * constructor(private siriShortcuts: SiriShortcuts) { }
 *
 * ...
 *
 *
 * this.siriShortcuts.donate({
 *       persistentIdentifier: 'open-my-app',
 *       title: 'Open my app',
 *       suggestedInvocationPhrase: 'Open my app',
 *       userInfo: { username: 'username' },
 *       isEligibleForSearch: true,
 *       isEligibleForPrediction: true,
 *   })
 *   .then(() => console.log('Shortcut donated.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.present({
 *       persistentIdentifier: 'open-my-app',
 *       title: 'Open my app',
 *       suggestedInvocationPhrase: 'Open my app',
 *       userInfo: { username: 'username' },
 *   })
 *   .then(() => console.log('Shortcut added.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.remove('open-my-app')
 *   .then(() => console.log('Shortcut removed.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.removeAll()
 *   .then(() => console.log('All shortcuts removed removed.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.getActivatedShortcut()
 *   .then((data: SiriShortcut|null) => console.log(data))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * SiriShortcut
 * SiriShortcutOptions
 * ActivatedShortcutOptions
 */
@Plugin({
  pluginName: 'SiriShortcuts',
  plugin: 'cordova-plugin-siri-shortcuts',
  pluginRef: 'cordova.plugins.SiriShortcuts',
  repo: 'https://github.com/bartwesselink/cordova-plugin-siri-shortcuts',
  platforms: ['iOS'],
})
@Injectable()
export class SiriShortcuts extends IonicNativePlugin {
  /**
   * Donate shortcut to Siri
   * @param {SiriShortcutOptions} options Options to specify for the donation
   * @param {string} options.persistentIdentifier Specify an identifier to uniquely identify the shortcut, in order to be able to remove it
   * @param {string} options.title Specify a title for the shortcut, which is visible to the user as the name of the shortcut
   * @param {string} options.suggestedInvocationPhrase Specify the phrase to give the user some inspiration on what the shortcut to call
   * @param {object} options.userInfo Provide a key-value object that contains information about the shortcut, this will be returned in the getActivatedShortcut method. It is not possible to use the persistentIdentifier key, it is used internally
   * @param {boolean} options.isEligibleForSearch This value defaults to true, set this value to make it searchable in Siri
   * @param {boolean} options.isEligibleForPrediction This value defaults to true, set this value to set whether the shortcut eligible for prediction
   * @return Promise<void>
   */
  @Cordova()
  donate(options: SiriShortcutOptions): Promise<void> {
    return;
  }

  /**
   * Present shortcut to the user, will popup a view controller asking the user to add it to Siri
   * @param {SiriShortcutOptions} options Options to specify for the donation
   * @param {string} options.persistentIdentifier Specify an identifier to uniquely identify the shortcut, in order to be able to remove it
   * @param {string} options.title Specify a title for the shortcut, which is visible to the user as the name of the shortcut
   * @param {string} options.suggestedInvocationPhrase Specify the phrase to give the user some inspiration on what the shortcut to call
   * @param {object} options.userInfo Provide a key-value object that contains information about the shortcut, this will be returned in the getActivatedShortcut method. It is not possible to use the persistentIdentifier key, it is used internally
   * @param {boolean} options.isEligibleForSearch This value defaults to true, set this value to make it searchable in Siri
   * @param {boolean} options.isEligibleForPrediction This value defaults to true, set this value to set whether the shortcut eligible for prediction
   * @return Promise<void>
   */
  @Cordova()
  present(options: SiriShortcutOptions): Promise<void> {
    return;
  }

  /**
   * Remove shortcuts based on identifiers
   * @param {string|string[]} persistentIdentifiers Specify which shortcut(s) to delete by their persistent identifiers
   * @return Promise<void>
   */
  @Cordova()
  remove(persistentIdentifiers: string | string[]): Promise<void> {
    return;
  }

  /**
   * Remove all shortcuts from the application
   * @return Promise<void>
   */
  @Cordova()
  removeAll(): Promise<void> {
    return;
  }

  /**
   * Get the current clicked user activity, and return `null` if none
   * @param {ActivatedShortcutOptions|null} options Options to specify for getting the shortcut
   * @param {boolean} options.clear Clear the currently activated shortcut, defaults to true
   * @return Promise<SiriShortcut|null>
   */
  @Cordova()
  getActivatedShortcut(options?: ActivatedShortcutOptions): Promise<SiriShortcut | null> {
    return;
  }
}
