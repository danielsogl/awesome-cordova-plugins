import {ElementRef} from 'angular2/angular2';

import {Page, NavParams} from 'ionic/ionic';

import {Camera, StatusBar, Toast, ActionSheet} from 'ionic-native';

function safeJSONStringify (input, maxDepth)
{

  var output,
  refs = [],
  refsPaths = [];

  maxDepth = maxDepth || 5;

  function recursion (input, path, depth)
  {
    var output = {},
    pPath,
    refIdx;

    path  = path  || "";
    depth = depth || 0;
    depth++;

    if (maxDepth && depth > maxDepth)
    {
      return "{depth over " + maxDepth + "}";
    }

    for (var p in input)
    {
      pPath = (path ? (path+".") : "") + p;
      if (typeof input[p] === "function")
      {
        //output[p] = "{function}";
      }
      else if (typeof input[p] === "object")
      {
        /*
        refIdx = refs.indexOf(input[p]);

        if (-1 !== refIdx)
        {
          output[p] = recursion(input[p])"{reference to " + refsPaths[refIdx]  + "}";
        }
        else
        {
        */
          refs.push(input[p]);
          refsPaths.push(pPath);
          output[p] = recursion(input[p], pPath, depth);
        //}
      }
      else
      {
        output[p] = input[p];
      }
    }

    return output;
  }

  if (typeof input === "object")
  {
    output = recursion(input);
  }
  else
  {
    output = input;
  }

  return JSON.stringify(output);
}

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

    this.textArea.scrollTop = this.textArea.scrollHeight;
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
