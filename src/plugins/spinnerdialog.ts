import {Plugin, Cordova} from './plugin';

@Plugin({
  plugin: 'cordova-plugin-spinner-dialog',
  pluginRef: 'window.plugins.spinnerDialog',
  platforms: ['Android','iOS','Windows Phone 8']
})
export class SpinnerDialog {

  @Cordova()
  static show(title : string, message : string) : Promise<any> {return}

  @Cordova({
    sync: true
  })
  static hide() : void {}

}