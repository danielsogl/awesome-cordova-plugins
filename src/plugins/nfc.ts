import {Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty} from './plugin';
import {Observable} from 'rxjs/Observable';

/**
 * @name NFC
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import {NFC} from 'ionic-native';
 *
 *
 * ```
 */
@Plugin({
  plugin: 'phonegap-nfc',
  pluginRef: 'nfc',
  repo: 'https://github.com/chariotsolutions/phonegap-nfc'
})
export class NFC {

  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
    clearFunction: 'removeNdefListener',
    clearWithArgs: true
  })
  static addNdefListener(onSuccess: Function = () => {}, onFailure: Function = () => {}): Observable<any> {return; }

  @Cordova()
  static addTagDiscoveredListener(callback: Function): Promise<any> {return; }

}
