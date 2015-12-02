import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'TouchID',
  plugin: 'cordova-plugin-touch-id',
  pluginRef: 'plugins.touchid',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-touch-id'
})
export class TouchID {
  @Cordova()
  isAvailable() {};

  @Cordova()
  static verifyFingerprint(message:string) {}

  @Cordova()
  static verifyFingerprintWithCustomPasswordFallback(message:string) {}

  @Cordova()
  static verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(message:string, enterPasswordLabel:string) {}
}
