import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Facebook',
  plugin: 'cordova-plugin-facebook4',
  pluginRef: 'facebookConnectPlugin'
})
export class Facebook {
  @Cordova()
  static login(permissions:string[]){}

  @Cordova()
  static logout(){}

  @Cordova()
  static getLoginStatus(){}

  @Cordova()
  static getAccessToken(){}

  @Cordova()
  static showDialog(options:any){}

  @Cordova()
  static api(requestPath:string, permissions:string[]){}

  @Cordova()
  static logEvent(name:string, params:any, valueToSum:number){}

  @Cordova()
  static logPurchase(value:number, currency:string){}

  @Cordova()
  static appInvite(options:any){}
}
