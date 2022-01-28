import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

@Plugin({
  pluginName: 'PlayInstallReferrer',
  plugin: 'cordova-plugin-play-installreferrer',
  pluginRef: 'installReferrer',
  repo: 'https://github.com/swayangjit/cordova-plugin-play-installreferrer',
  platforms: ['Android'],
})
@Injectable()
export class PlayInstallReferrer extends AwesomeCordovaNativePlugin {
  @Cordova()
  getReferrer(): Promise<any> {
    return;
  }
}
