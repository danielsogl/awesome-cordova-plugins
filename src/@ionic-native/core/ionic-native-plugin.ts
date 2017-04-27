import { PluginConfig } from './decorators';

export class IonicNativePlugin implements PluginConfig {

  pluginName: string;

  pluginRef: string;

  plugin: string;

  repo: string;

  platforms: string[];

  install: string;

  /**
   * Returns a boolean that indicates whether the plugin is installed
   * @return {boolean}
   */
  static installed(): boolean { return false; }

  /**
   * Returns the original plugin object
   */
  static getPlugin(): any {}

  /**
   * Returns the plugin's name
   */
  static getPluginName(): string { return; }

  /**
   * Returns the plugin's reference
   */
  static getPluginRef(): string { return; }

  /**
   * Returns the plugin's install name
   */
  static getPluginInstallName(): string { return; }

}
