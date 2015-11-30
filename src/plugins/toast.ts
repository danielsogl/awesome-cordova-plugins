import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Toast',
  plugin: 'cordova-plugin-x-toast',
  pluginRef: 'plugins.toast',
  repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin'
})
export class Toast {
  @Cordova({
    successIndex: 0,
    errIndex: 1
  })
  static hide(){};

  @Cordova({
    successIndex: 1,
    errIndex: 2
  })
  static showWithOptions(options:any){};
}
