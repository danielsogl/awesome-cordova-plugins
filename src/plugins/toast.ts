import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Toast',
  plugin: 'cordova-plugin-x-toast',
  pluginRef: 'plugins.toast',
  repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin'
})
export class Toast {
  @Cordova()
  static hide(){};

  @Cordova()
  static showWithOptions(options:any){};
}
