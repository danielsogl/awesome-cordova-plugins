import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name AutoUpdate
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { AutoUpdate } from '@awesome-cordova-plugins/auto-update';
 *
 *
 * constructor(private autoUpdate: AutoUpdate) { }
 *
 * ...
 *
 * this.autoUpdate.checkUpdate()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AutoUpdate',
  plugin: 'cordova-plugin-versasaude-auto-update', // npm package name, example: cordova-plugin-camera
  pluginRef: 'AutoUpdate', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class AutoUpdate extends AwesomeCordovaNativePlugin {
  @Cordova()
  checkUpdate(): Promise<void> {
    return;
  }
}
