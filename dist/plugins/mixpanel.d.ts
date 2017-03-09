/**
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 *
 * @usage
 * ```
 * import {Mixpanel} from 'ionic-native';
 *
 * Mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
export declare class Mixpanel {
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    static alias(aliasId: string, originalId: string): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    static distinctId(): Promise<any>;
    /**
     *
     */
    static flush(): Promise<any>;
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    static identify(distinctId: any): Promise<any>;
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    static init(token: string): Promise<any>;
    /**
     *
     * @param superProperties
     * @returns {Promise<any>}
     */
    static registerSuperProperties(superProperties: any): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    static reset(): Promise<any>;
    /**
     *
     * @param eventName
     * @param eventProperties
     */
    static track(eventName: string, eventProperties?: any): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    static showSurvey(): Promise<any>;
    /**
     *
     * @returns {MixpanelPeople}
     */
    static readonly people: MixpanelPeople;
}
/**
 * @private
 */
export declare class MixpanelPeople {
    static identify(distinctId: string, onSuccess?: Function, onFail?: Function): void;
    static increment(peopleProperties: any, onSuccess?: Function, onFail?: Function): void;
    static setPushId(pushId: string, onSuccess?: Function, onFail?: Function): void;
    static set(peopleProperties: any, onSuccess?: Function, onFail?: Function): void;
    static setOnce(peopleProperties: any, onSuccess?: Function, onFail?: Function): void;
}
