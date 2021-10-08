import { checkAvailability } from './decorators/common';
import { get } from './util';

export class AwesomeCordovaNativePlugin {
  static pluginName = '';
  static pluginRef = '';
  static plugin = '';
  static repo = '';
  static platforms: string[] = [];
  static install = '';

  /**
   * Returns a boolean that indicates whether the plugin is installed
   *
   * @returns {boolean}
   */
  static installed(): boolean {
    const isAvailable = checkAvailability(this.pluginRef) === true;
    return isAvailable;
  }

  /**
   * Returns the original plugin object
   */
  static getPlugin(): any {
    if (typeof window !== 'undefined') {
      return get(window, this.pluginRef);
    }
    return null;
  }

  /**
   * Returns the plugin's name
   */
  static getPluginName(): string {
    const pluginName = this.pluginName;
    return pluginName;
  }

  /**
   * Returns the plugin's reference
   */
  static getPluginRef(): string {
    const pluginRef = this.pluginRef;
    return pluginRef;
  }

  /**
   * Returns the plugin's install name
   */
  static getPluginInstallName(): string {
    const plugin = this.plugin;
    return plugin;
  }

  /**
   * Returns the plugin's supported platforms
   */
  static getSupportedPlatforms(): string[] {
    const platform = this.platforms;
    return platform;
  }
}
