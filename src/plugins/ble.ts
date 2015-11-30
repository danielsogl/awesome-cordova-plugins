import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'BluetoothLowEnergy',
  plugin: 'cordova-plugin-ble-central',
  pluginRef: 'ble',
  pluginRepo: 'https://github.com/don/cordova-plugin-ble-central'
})
export class BLE {
  @Cordova()
  static scan(services:any[], seconds:number) {}

  @Cordova()
  static startScan(services:any[]){};

  @Cordova()
  static stopScan(){};

  @Cordova()
  static connect(deviceId:string){};

  @Cordova()
  static disconnect(deviceId:string){};

  @Cordova()
  static read(deviceId:string, serviceUUID:string, characteristicUUID:string){};

  @Cordova()
  static write(deviceId:string, serviceUUID:string, characteristicUUID:string, value:ArrayBuffer){};

  @Cordova()
  static writeWithoutResponse(deviceId:string, serviceUUID:string, characteristicUUID:string, value:ArrayBuffer){};
}
