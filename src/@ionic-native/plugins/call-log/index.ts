import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface CallLogObject {
  name: string;
  value: string | string[];
  operator: '==' | '!=' | '>' | '>=' | '<' | '<=' | 'like';
}

/**
 * @name Call Log
 * @description
 * This plugin access the call history on a device and that can be filtered
 *
 * @usage
 * ```typescript
 * import { CallLog } from '@ionic-native/call-log/ngx';
 *
 *
 * constructor(private callLog: CallLog) { }
 *
 * ````
 * @interfaces
 * CallLogObject
 *
 */
@Plugin({
  pluginName: 'CallLog',
  plugin: 'cordova-plugin-calllog',
  pluginRef: 'plugins.callLog',
  repo: 'https://github.com/creacore-team/cordova-plugin-calllog',
  platforms: ['Android'],
})
@Injectable()
export class CallLog extends IonicNativePlugin {
  /**
   * This function return the call logs
   * @param {CallLogObject[]} filters array of object to filter the query
   * @return {Promise<any>}
   */
  @Cordova()
  getCallLog(filters: CallLogObject[]): Promise<any> {
    return;
  }

  /**
   * Check permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  hasReadPermission(): Promise<any> {
    return;
  }

  /**
   * Request permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  requestReadPermission(): Promise<any> {
    return;
  }
}
