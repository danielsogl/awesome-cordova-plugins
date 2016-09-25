import { Cordova, Plugin } from './plugin';

@Plugin({
  plugin: 'cordova-plugin-taptic-engine',
  pluginRef: 'TapticEngine',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine',
  platforms: ['iOS']
})
export class Taptic {
  /**
   * Use selection feedback generators to indicate a change in selection.
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  static selection(): Promise<any> { return; }

  /**
   * Use this to indicate success/failure/warning to the user.
   * options should be of the type { type: 'success' } (or 'warning'/'error')
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  static notification(options: { type: string }): Promise<any> { return; }

  /**
   * Use this to indicate success/failure/warning to the user.
   * options should be of the type { style: 'light' } (or 'medium'/'heavy')
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  static impact(options: { style: string }): Promise<any> { return; }
}
