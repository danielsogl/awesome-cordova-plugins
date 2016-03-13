import {Plugin, Cordova} from './plugin'
// TODO docs
/**
 * @name DB Meter
 * @description
 * @platforms Android, iOS
 * @usage
 */
@Plugin({
  plugin: 'cordova-plugin-dbmeter',
  pluginRef: 'DBMeter',
  repo: 'https://github.com/akofman/cordova-plugin-dbmeter'
})
export class DBMeter {


  // TODO use observable instead
  @Cordova()
  static start () : Promise<any> {return}

  @Cordova()
  static stop () : Promise<any> {return}

  @Cordova()
  static isListening() : Promise<boolean> {return}

  @Cordova()
  static delete() : Promise<any> {return}

}