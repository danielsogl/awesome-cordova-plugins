import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

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
  plugin: 'cordova-plugin-autoupdate',
  pluginName: 'AutoUpdate',
  pluginRef: 'AutoUpdate',
  repo: 'https://github.com/fermaiasoares/AppUpdate.git',
  platforms: ['Android'],
})
@Injectable()
export class AutoUpdate extends AwesomeCordovaNativePlugin {
  @Cordova()
  checkUpdate(): Promise<any> {
    return;
  }
}
