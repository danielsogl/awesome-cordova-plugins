import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'StatusBar',
  plugin: 'cordova-plugin-statusbar',
  pluginRef: 'StatusBar'
})
export class StatusBar {
  @Cordova()
  static overlaysWebView(doOverlay:boolean){};
  @Cordova()
  static styleDefault(){};
  @Cordova()
  static styleLightContent(){};
  @Cordova()
  static styleBlackTranslucent(){};
  @Cordova()
  static styleBlackOpaque(){};
  @Cordova()
  static backgroundColorByName(colorName:string){};
  @Cordova()
  static backgroundColorByHexString(hexString:string){};
  @Cordova()
  static hide(){};
  @Cordova()
  static show(){};
}
