import {Page, NavParams} from 'ionic/ionic';

import {Camera, StatusBar, Toast} from 'ionic-native';

// To specify arguments for any plugin calls
var demoArgs = {};
demoArgs[Toast] = {
  showWithOptions: [
    {
      message: "hey there",
      duration: "short",
      position: "bottom",
      addPixelsY: -40  // added a negative value to move it up a bit (default 0)
    }
  ]
}

@Page({
  templateUrl: 'app/plugin/plugin.html',
})
export class Plugin {
  constructor(params: NavParams) {

    this.plugin = params.get('plugin');
    console.log('Plugin', this.plugin);

    this.methods = Object.keys(this.plugin).filter((k) => {
      if(typeof this.plugin[k] === 'function') {
        return true;
      }
      return false;
    });
  }

  doMethod(method) {

    let pluginMethodArgEntry = demoArgs[this.plugin];

    let args = [];
    if(pluginMethodArgEntry) {
      args = pluginMethodArgEntry[method] || [];
    }

    console.log('Doing method', method, 'on Plugin', this.plugin, 'args:', args);
    // TODO: Pass args
    this.plugin[method].apply(this.plugin, args);
  }

}
