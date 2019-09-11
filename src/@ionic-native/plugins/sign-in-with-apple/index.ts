import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'SignInWithApple',
  repo: 'https://github.com/twogate/cordova-plugin-sign-in-with-apple/blob/master/plugin.xml',
  plugin: 'cordova-plugin-sign-in-with-apple',
  pluginRef: 'cordova.plugins.SignInWithApple',
  platforms: ['iOS'],
})
@Injectable()
export class SignInWithApple extends IonicNativePlugin {
  @Cordova()
  signin(opts?: any): Promise<any> {
    return;
  }
}
