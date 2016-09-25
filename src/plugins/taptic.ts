import { Cordova, Plugin } from './plugin';

@Plugin({
  plugin: 'cordova-plugin-taptic-engine',
  pluginRef: 'TapticEngine',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine',
  platforms: ['iOS']
})
export class Taptic {
  /**
   *
   */
  @Cordova()
  static selection(): void { return; }

  /**
   * Use this to indicate success/failure/warning to the user.
   * options should be of the type { type: 'success' } (or 'warning'/'error')
   */
  @Cordova()
  static notification(options: { type: string }): void { return; }

  /**
   * Use this to indicate success/failure/warning to the user.
   * options should be of the type { style: 'light' } (or 'medium'/'heavy')
   */
  @Cordova()
  static impact(options: { style: string }): void { return; }
}
