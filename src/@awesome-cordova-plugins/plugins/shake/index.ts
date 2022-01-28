import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @name Shake
 * @description Handles shake gesture
 * @usage
 * ```typescript
 * import { Shake } from '@awesome-cordova-plugins/shake/ngx';
 *
 * constructor(private shake: Shake) { }
 *
 * ...
 *
 * const watch = this.shake.startWatch(60).subscribe(() => {
 *   // do something
 *   });
 *
 * watch.unsubscribe();
 * ```
 */
@Plugin({
  pluginName: 'Shake',
  plugin: 'cordova-plugin-shake',
  pluginRef: 'shake',
  repo: 'https://github.com/leecrossley/cordova-plugin-shake',
  platforms: ['iOS'],
})
@Injectable()
export class Shake extends AwesomeCordovaNativePlugin {
  /**
   * Watch for shake gesture
   *
   * @param sensitivity {number} Optional sensitivity parameter. Defaults to 40
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopWatch',
    successIndex: 0,
    errorIndex: 2,
  })
  startWatch(sensitivity?: number): Observable<any> {
    return;
  }
}
