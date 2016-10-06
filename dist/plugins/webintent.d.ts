/**
 * @name WebIntent
 * @description
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import {WebIntent} from 'ionic-native';
 *
 * WebIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 */
export declare class WebIntent {
    static readonly ACTION_VIEW: any;
    static readonly EXTRA_TEXT: any;
    static startActivity(options: {
        action: any;
        url: string;
        type?: string;
    }): Promise<any>;
    static hasExtra(extra: any): Promise<any>;
    static getExtra(extra: any): Promise<any>;
    static getUri(): Promise<string>;
    static onNewIntent(): Promise<string>;
    static sendBroadcast(options: {
        action: string;
        extras?: {
            option: boolean;
        };
    }): Promise<any>;
}
