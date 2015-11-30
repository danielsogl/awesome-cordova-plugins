import {Page, NavController} from 'ionic/ionic'

import {
  ActionSheet,
  Camera,
  Device,
  StatusBar,
  Toast
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
      Camera,
      Device,
      StatusBar,
      Toast
    ].filter((p) => {
      return !!p;
    });
    console.log('PLUGINS', this.plugins);
  }

  choosePlugin(plugin) {
    this.nav.push(Plugin, {
      plugin: plugin
    });
  }
}
