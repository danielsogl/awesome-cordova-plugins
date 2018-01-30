import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Call Log
 * @description
 * This plugin access the call history on a device and that can be filtered
 *
 * @usage
 * ```typescript
 * import { CallLog } from '@ionic-native/call-log';
 *
 *
 * constructor(private callLog: CallLog) { }
 *
 * ...
 *
 */
@Plugin({
  pluginName: 'CallLog',
  plugin: 'cordova-plugin-calllog',
  pluginRef: 'plugins.callLog',
  repo: 'https://github.com/creacore-team/cordova-plugin-calllog',
  platforms: ['Android']
})
@Injectable()
export class CallLog extends IonicNativePlugin {

  /**
   * This function return the call logs
   * @param filters {object[]} array of object to filter the query
   * Object must respect this structure {'name':'...', 'value': '...', 'operator': '=='}
   * (see https://github.com/creacore-team/cordova-plugin-calllog for more details)
   * @return {Promise<any>}
   */
  @Cordova()
  getCallLog(filters: object[]): Promise<any> { return; }

  /**
   * Check permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  hasReadPermission(): Promise<any> { return; }

  /**
   * Request permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  requestReadPermission(): Promise<any> { return; }
}
