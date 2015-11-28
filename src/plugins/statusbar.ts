import {wrap} from '../util';

let PLUGIN_REF = 'StatusBar';

export var StatusBar = {
  // Metadata
  name: 'StatusBar',
  plugin: 'cordova-plugin-statusbar',

  // Methods
  overlaysWebView: wrap(PLUGIN_REF, 'overlaysWebView'),
  styleDefault: wrap(PLUGIN_REF, 'styleDefault'),
  styleLightContent: wrap(PLUGIN_REF, 'styleLightContent'),
  styleBlackTranslucent: wrap(PLUGIN_REF, 'styleBlackTranslucent'),
  styleBlackOpaque: wrap(PLUGIN_REF, 'styleBlackOpaque'),
  backgroundColorByName: wrap(PLUGIN_REF, 'backgroundColorByName'),
  backgroundColorByHexString: wrap(PLUGIN_REF, 'backgroundColorByHexString'),
  hide: wrap(PLUGIN_REF, 'hide'),
  show: wrap(PLUGIN_REF, 'show')
}
