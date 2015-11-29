import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Toast',
  plugin: 'cordova-plugin-x-toast',
  pluginRef: 'plugins.toast'
})
export class Toast {
  @Cordova({
    successIndex: 0,
    errIndex: 1
  })
  static hide;

  @Cordova({
    successIndex: 0,
    errIndex: 1
  })
  static showWithOptions;
}
