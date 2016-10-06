/**
 * @name Stepcounter
 * @description
 * Cordova plugin for using device's stepcounter on Android (API > 19)
 *
 * Use to
 * - start and stop stepcounter service
 * - read device's stepcounter data
 *
 * @usage
 * ```
 * import { Stepcounter } from 'ionic-native';
 *
 * let startingOffset = 0;
 * Stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
 *
 * Stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
 *
 * ```
 */
export declare class Stepcounter {
    /**
     * Start the step counter
     *
     * @param startingOffset {number} will be added to the total steps counted in this session
     * @return {Promise} Returns a Promise that resolves on success or rejects on failure
     */
    static start(startingOffset: number): Promise<number | any>;
    /**
     * Stop the step counter
     * @return {Promise} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    static stop(): Promise<number | any>;
    /**
     * Get the amount of steps for today (or -1 if it no data given)
     * @return {Promise} Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
     */
    static getTodayStepCount(): Promise<number | any>;
    /**
     * Get the amount of steps since the start command has been called
     * @return {Promise} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    static getStepCount(): Promise<number | any>;
    /**
     * Returns true/false if Android device is running >API level 19 && has the step counter API available
     * @return {Promise} Returns a Promise that resolves on success, or rejects on failure
     */
    static deviceCanCountSteps(): Promise<boolean | any>;
    /**
     * Get the step history (JavaScript object)
     * @return {Promise} Returns a Promise that resolves on success, or rejects on failure
     */
    static getHistory(): Promise<any>;
}
