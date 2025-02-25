import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface ConfigOptions {
  androidId?: string;
  serialNumber?: string;
  simulatorDisabled?: boolean;
  storageDisabled?: boolean;
  adEnabled?: boolean;
  macDisabled?: boolean;
  macAddress?: string;
  imeiDisabled?: boolean;
  imei?: string;
  gaid?: string;
  oaid?: string;
}

@Plugin({
  pluginName: 'OpenInstall',
  plugin: 'cordova-plugin-openinstall',
  pluginRef: 'openinstall',
  repo: 'https://github.com/openinstall/cordova-plugin-openinstall',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OpenInstall extends AwesomeCordovaNativePlugin {
  @Cordova({ sync: true, platforms: ['Android'] })
  configAndroid(options: ConfigOptions): void {}

  @Cordova({ sync: true })
  serialEnabled(enabled: boolean): void {}

  @Cordova({ sync: true })
  clipBoardEnabled(enabled: boolean): void {}

  @Cordova({ sync: true })
  init(): void {}

  @Cordova({ sync: true })
  getInstall(onSuccess: Function, onError: Function, time: number): void {}

  @Cordova({ sync: true, platforms: ['Android'] })
  getInstallCanRetry(onSuccess: Function, onError: Function, time: number): void {}

  @Cordova({ sync: true })
  registerWakeUpHandler(onSuccess: Function, onError: Function): void {}

  @Cordova({ sync: true })
  reportRegister(): void {}

  @Cordova({ sync: true })
  reportEffectPoint(pointId: string, pointValue: number, extras?: { [key: string]: string }): void {}

  @Cordova({ sync: true })
  reportShare(onSuccess: Function, onError: Function, shareCode: string, sharePlatform: string): void {}
}
