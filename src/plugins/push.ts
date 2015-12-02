import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Push',
  plugin: 'phonegap-plugin-push',
  pluginRef: 'PushNotification'
})
export class Push {
  @Cordova()
  static init(options:any){};
}
