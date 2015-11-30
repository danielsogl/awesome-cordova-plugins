import {Plugin, Cordova} from './plugin';

declare var window;

@Plugin({
  name: 'File',
  plugin: 'cordova-plugin-file',
  pluginRef: 'cordova.file'
})
export class File {
}
