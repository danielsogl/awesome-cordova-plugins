import {Page, NavController} from 'ionic/ionic'

import {
  ActionSheet,
  BarcodeScanner,
  BLE,
  Camera,
  Calendar,
  Contacts,
  Device,
  Facebook,
  Geolocation,
  Push,
  StatusBar,
  Toast,
  TouchID
} from 'ionic-native';

import {Plugin} from '../plugin/plugin';

@Page({
  templateUrl: 'app/home/home.html',
})
export class HomePage {
  constructor(nav: NavController) {
    this.nav = nav;

    this.plugins = [
      ActionSheet,
      BarcodeScanner,
      BLE,
      Camera,
      Calendar,
      Contacts,
      Device,
      Facebook,
      Geolocation,
      Push,
      StatusBar,
      Toast,
      TouchID
    ];
    console.log('PLUGINS', this.plugins);
  }

  choosePlugin(plugin) {
    this.nav.push(Plugin, {
      plugin: plugin
    });
  }
}
