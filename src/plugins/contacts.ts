import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Contacts',
  plugin: 'cordova-plugin-contacts',
  pluginRef: 'navigator.contacts',
  repo: 'https://github.com/apache/cordova-plugin-contacts'
})
export class Contacts {
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  // This method is create(fields, success, error, options) :/
  static create(fields:string[], options:any){};

  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static find(fields:string[], options:any){};

  @Cordova()
  static pickContact(){};
}
