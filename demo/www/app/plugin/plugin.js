import {ElementRef} from 'angular2/angular2';

import {Page, NavParams} from 'ionic/ionic';

import {Camera, Calendar, StatusBar, Toast, ActionSheet, Facebook, Push} from 'ionic-native';

import {safeJSONStringify} from '../util';

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

demoArgs[Facebook] = {
  login: [
    ["public_profile"]
  ]
};

demoArgs[Push] = {
  init: [{
    android: {
        senderID: "12345679"
    },
    ios: {
        alert: "true",
        badge: true,
        sound: 'false'
    },
    windows: {}
  }]
}

var demoCode = {};

demoCode[Calendar] = {
  createEventInteractively: function() {
    Calendar.createEventInteractively("Grab Coffee", "Johnson Public House", new Date(), new Date()).then((event) => {
      console.log("Created event", event);
      this.output('Created event', event);
    })
  }
};
demoCode[Facebook] = {
  login: function() {
    Facebook.login(["public_profile"]).then((userData) => {
      console.log("Facebook UserInfo: ", userData);
      this.output('Facebook UserInfo: ', userData);
      Facebook.getAccessToken().then((token) => {
        this.output('Facebook Token: ', token);
        console.log("Token: " + token);
      });
    }, (err) => {
      console.error(err);
    });
  }
}


@Page({
  templateUrl: 'app/plugin/plugin.html',
})
export class Plugin {
  constructor(params: NavParams, elementRef: ElementRef) {

    let el = elementRef.nativeElement;

    this.textArea = el.querySelector('textarea');

    this.content = {
      items: [],
      value: ''
    };

    this.plugin = params.get('plugin');
    console.log('Plugin', this.plugin);

    this.methods = Object.keys(this.plugin).filter((k) => {
      if(typeof this.plugin[k] === 'function') {
        return true;
      }
      return false;
    });
  }

  output(...args) {
    var s = args.map((v) => {
      if(typeof v === 'object') {
        console.log('Stringifying', v);
        return safeJSONStringify(v, 4);//JSON.stringify(v);
      }
      return v;
    });

    this.content.items.push(s.join(' '));

    this.content.value = this.content.items.join();

    setTimeout(() => {
      this.textArea.scrollTop = this.textArea.scrollHeight;
    })
  }

  doMethod(method) {
    let pluginMethodArgEntry = demoArgs[this.plugin];
    let pluginCodeEntry = demoCode[this.plugin] && demoCode[this.plugin][method];

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

    // Run the custom code
    if(pluginCodeEntry) {
      pluginCodeEntry.apply(this);
      return;
    }

    let v = this.plugin[method].apply(this.plugin, args);

    if(v && v.then) {
      v.then(() => {
        console.log('Success', arguments, this);
        this.output(arguments);
      }, (err) => {
        console.error('Error', err);
        this.output(err);
      });
    } else {
      console.log('Response: ', v);
      this.output(v);

      if(v.subscribe) {
        console.log('Observable response, subscribing...');
        v.subscribe((val) => {
          console.log('Observable val', val);
          this.output(val);
        }, (err) => {
          this.output(err);
          console.log('ERROR: Observable', err);
        });
      }
    }
  }

}
