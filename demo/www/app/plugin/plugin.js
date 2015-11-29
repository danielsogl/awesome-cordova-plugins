import {Page, NavParams} from 'ionic/ionic';

import {Camera, StatusBar, Toast, ActionSheet} from 'ionic-native';

// To specify arguments for any plugin calls
var demoArgs = {};
demoArgs[ActionSheet] = {
  show: {
    'title': 'What do you want with this image?',
    'buttonLabels': ['Share via Facebook', 'Share via Twitter'],
    'androidEnableCancelButton' : true, // default false
    'winphoneEnableCancelButton' : true, // default false
    'addCancelButtonWithLabel': 'Cancel',
    'addDestructiveButtonWithLabel' : 'Delete it',
    'position': [20, 40] // for iPad pass in the [x, y] position of the popover
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
      args = pluginMethodArgEntry[method] || [];
    }

    Toast.showWithOptions({
      message: 'Doing ' + this.plugin.name + '.' + method + '()',
      duration: "short",
      position: "bottom",
      addPixelsY: -40  // added a negative value to move it up a bit (default 0)
    });
    console.log('Doing method', method, 'on Plugin', this.plugin, 'args:', args);
    // TODO: Pass args
    this.plugin[method].apply(this.plugin, args).then(() => {
      console.log('Success', arguments);
    }, (err) => {
      console.error('Error', err);
    });
  }

}
