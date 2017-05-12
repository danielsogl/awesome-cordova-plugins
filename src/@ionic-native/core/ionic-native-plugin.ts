import { PluginConfig } from './decorators';
import { getPlugin } from './util';

export class IonicNativePlugin {

  protected static _config: PluginConfig;

  private static _class: any;

  /**
   * Returns a boolean that indicates whether the plugin is installed
   * @return {boolean}
   */
  static installed(): boolean {
    return !!getPlugin(this._config.pluginRef);
  }

  /**
   * Returns the original plugin object
   */
  static getPlugin(): any {
    return getPlugin(this._config.pluginRef);
  }

  /**
   * Returns the plugin's name
   */
  static getPluginName(): string {
    return this._config.pluginName;
  }

  /**
   * Returns the plugin's reference
   */
  static getPluginRef(): string {
    return this._config.pluginRef;
  }

  /**
   * Returns the plugin's install name
   */
  static getPluginInstallName(): string {
    return this._config.plugin;
  }

  static useClass(_class: any): void {


    if (!_class || !_class.prototype) return;


    for (let prop in _class.prototype) {
      this.prototype[prop] = _class.prototype[prop];
    }

    this._class = _class;

  }

  useClass(_class: any): void {

    if (!_class || !_class.prototype) return;

    for (let prop in _class.prototype) {
      this[prop] = _class.prototype[prop];
    }

  }

}
