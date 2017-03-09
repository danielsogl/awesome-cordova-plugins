import { Observable } from 'rxjs/Observable';
/**
* @name Background Mode
* @description
* Cordova plugin to prevent the app from going to sleep while in background.
*  Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode#android-customization
*@usage
* ```typescript
* import { BackgroundMode } from 'ionic-native';
*
* BackgroundMode.enable();
* ```
*
* @advanced
*
* Configuration options
*
* | Property | Type      | Description                                                                  |
* |----------|-----------|------------------------------------------------------------------------------|
* | title    | `string`  | Title of the background task. Optional                                       |
* | ticker   | `string`  | The text that scrolls itself on the statusbar. Optional                      |
* | text     | `string`  | Description of the background task. Optional                                 |
* | silent   | `boolean` | If the plugin will display a notification or not. Default is false. Optional |
* | resume   | `boolean` | Bring the app into the foreground if the notification is tapped. Optional    |
*
*/
export declare class BackgroundMode {
    /**
    * Enable the background mode.
    * Once called, prevents the app from being paused while in background.
    */
    static enable(): void;
    /**
    * Disable the background mode.
    * Once the background mode has been disabled, the app will be paused when in background.
    */
    static disable(): void;
    /**
    * Checks if background mode is enabled or not.
    * @returns {boolean} returns a true of false if the background mode is enabled.
    */
    static isEnabled(): Promise<boolean>;
    /**
    * Can be used to get the information if the background mode is active.
    * @returns {boolean} returns tru or flase if the background mode is active.
    */
    static isActive(): Promise<boolean>;
    /**
    * Override the default title, ticker and text.
    * Available only for Android platform.
    * @param {Configure} options List of option to configure. See table below
    */
    static setDefaults(options?: Configure): void;
    /**
    * Modify the displayed information.
    * Available only for Android platform.
    * @param {Configure} options Any options you want to update. See table below.
    */
    static configure(options?: Configure): void;
    /**
    * Called when background mode is activated.
    */
    static onactivate(): Observable<any>;
    /**
    * Called when background mode is deactivated.
    */
    static ondeactivate(): Observable<any>;
    /**
    * Called when background mode fails
    */
    static onfailure(): Observable<any>;
}
/**
* Configurations items that can be updated.
*/
export interface Configure {
    /**
    *Title of the background task
    */
    title?: String;
    /**
    *The text that scrolls itself on statusbar
    */
    ticker?: String;
    /**
    *Description of background task
    */
    text?: String;
    /**
    *Boolean, if true plugin will not display a notification. Default is false.
    */
    silent?: boolean;
    /**
    *Boolean. By default the app will come to foreground when taping on the notification. If false, plugin wont come to foreground when tapped.
    */
    resume?: boolean;
}
