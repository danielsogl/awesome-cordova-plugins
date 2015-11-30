import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'ActionSheet',
  plugin: 'cordova-plugin-actionsheet',
  pluginRef: 'plugins.actionsheet',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet'
})
export class ActionSheet {
  @Cordova()
  static show(options:any){};

  @Cordova()
  static hide(options:any){};
}
