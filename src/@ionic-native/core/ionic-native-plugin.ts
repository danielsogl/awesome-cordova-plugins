import { checkAvailability } from './decorators/common';
import { get } from './util';

export class IonicNativePlugin {
  static pluginName: string;

  static pluginRef: string;

  static plugin: string;

  static repo: string;

  static platforms: string[];

  static install: string;

  /**
   * Returns a boolean that indicates whether the plugin is installed
   * @return {boolean}
   */
  static installed(): boolean {
    return checkAvailability(this.pluginRef) === true;
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
    return this.pluginName;
  }

  /**
   * Returns the plugin's reference
   */
  static getPluginRef(): string {
    return this.pluginRef;
  }

  /**
   * Returns the plugin's install name
   */
  static getPluginInstallName(): string {
    return this.plugin;
  }

  /**
   * Returns the plugin's supported platforms
   */
  static getSupportedPlatforms(): string[] {
    return this.platforms || [];
  }
}
