import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface Response {
  type?: string;
  message?: string;
  reason?: string;
}
export interface InitResponse extends Response {
  merchantName?: string;
}
export interface SaleResponse extends Response {
  paymentId?: string;
  transactionType?: string;
  entryType?: string;
  cardFirst6?: string;
  cardLast4?: string;
}

/**
 * @name Clover Go
 * @description
 * This plugin connect to Clover Go payment device and process payments.
 *
 * @usage
 * ```typescript
 * import { CloverGo } from '@ionic-native/clover-go/ngx';
 *
 *
 * constructor(private cloverGo: CloverGo) { }
 *
 * ...
 *
 *
 * this.cloverGo.init(configuration)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.cloverGo.connect()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.cloverGo.disconnect()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.cloverGo.sale(saleInfo)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'CloverGo',
  plugin: 'cordova-plugin-clovergo',
  pluginRef: 'clovergo',
  repo: 'https://github.com/hotwax/cordova-plugin-clovergo',
  install: 'ionic plugin add cordova-plugin-clovergo',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class CloverGo extends IonicNativePlugin {
  /**
   * This function initialises Clover Go SDK
   * @param configuration {object}
   * @return {Promise<InitResponse>}
   */
  @Cordova()
  init(configuration: object): Promise<InitResponse> {
    return;
  }

  /**
   * This function connects to available clover go device
   *
   * @return {Promise<Response>}
   */
  @Cordova()
  connect(): Promise<Response> {
    return;
  }

  /**
   * This function disconnects to available clover go device
   *
   * @return {Promise<Response>}
   */
  @Cordova()
  disconnect(): Promise<Response> {
    return;
  }

  /**
   * This function initiate sale for Clover Go device
   * @param saleInfo {object}
   * @return {Promise<SaleResponse>}
   */
  @Cordova()
  sale(saleInfo: object): Promise<SaleResponse> {
    return;
  }
}
