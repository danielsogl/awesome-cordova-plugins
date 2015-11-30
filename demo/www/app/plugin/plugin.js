import {Page, NavParams} from 'ionic/ionic';

import {Camera, StatusBar, Toast, ActionSheet} from 'ionic-native';

// To specify arguments for any plugin calls
var demoArgs = {};
demoArgs[ActionSheet] = {
  show: {
    'buttonLabels': ['Log out'],
    'androidEnableCancelButton' : true, // default false
    'winphoneEnableCancelButton' : true, // default false
    'addCancelButtonWithLabel': 'Cancel'
  }
}

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
      args = [pluginMethodArgEntry[method]] || [];

      console.log('Found some default args', args);
    }

    Toast.showWithOptions({
      message: 'Doing ' + this.plugin.name + '.' + method + '()',
      duration: "short",
      position: "bottom",
      addPixelsY: -40  // added a negative value to move it up a bit (default 0)
    });
    console.log('Doing method', method, 'on Plugin', this.plugin, 'args:', args);

    let v = this.plugin[method].apply(this.plugin, args);

    if(v && v.then) {
      v.then(() => {
        console.log('Success', arguments);
      }, (err) => {
        console.error('Error', err);
      });
    } else {
      console.log('Response: ', v);

      if(v.subscribe) {
        console.log('Observable response, subscribing...');
        v.subscribe((val) => {
          console.log('Observable val', val);
        }, (err) => {
          console.log('ERROR: Observable', err);
        });
      }
    }
  }

}
