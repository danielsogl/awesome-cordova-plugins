import {wrap, promisify} from '../util';

let PLUGIN_REF = 'plugins.toast'

export var Toast = {
  // Metadata
  name: 'Toast',
  plugin: 'cordova-plugin-x-toast',

  // Methods
  showWithOptions: wrap(PLUGIN_REF, 'showWithOptions', 1, 2),
  hide: promisify(PLUGIN_REF, 'hide', 0, 1),
}
