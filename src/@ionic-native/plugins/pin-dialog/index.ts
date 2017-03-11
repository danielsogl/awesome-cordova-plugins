import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @name Pin Dialog
 * @description
 *
 * @usage
 * ```typescript
 * import { PinDialog } from '@ionic-native/pin-dialog';
 *
 *
 * constructor(private pinDialog: PinDialog) { }
 *
 * ...
 *
 * this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
 *   .then(
 *     (result: any) => {
 *       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
 *       else if(result.buttonIndex == 2) console.log('User cancelled');
 *     }
 *   );
 * ```
 */
@Plugin({
  pluginName: 'PinDialog',
  plugin: 'cordova-plugin-pin-dialog',
  pluginRef: 'plugins.pinDialog',
  repo: 'https://github.com/Paldom/PinDialog'
})
@Injectable()
export class PinDialog {
  /**
   * Show pin dialog
   * @param {string} message Message to show the user
   * @param {string} title Title of the dialog
   * @param {string[]} buttons Buttons to show
   * @returns {Promise<{ buttonIndex: number, input1: string }>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 4 // no error callback
  })
  prompt(message: string, title: string, buttons: string[]): Promise<{ buttonIndex: number, input1: string }> { return; }

}
