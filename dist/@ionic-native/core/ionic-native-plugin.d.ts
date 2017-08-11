export declare class IonicNativePlugin {
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
    static installed(): boolean;
    /**
     * Returns the original plugin object
     */
    static getPlugin(): any;
    /**
     * Returns the plugin's name
     */
    static getPluginName(): string;
    /**
     * Returns the plugin's reference
     */
    static getPluginRef(): string;
    /**
     * Returns the plugin's install name
     */
    static getPluginInstallName(): string;
    /**
     * Returns the plugin's supported platforms
     */
    static getSupportedPlatforms(): string[];
}
