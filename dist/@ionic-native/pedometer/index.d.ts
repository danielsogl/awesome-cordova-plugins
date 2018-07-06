import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * Interface of a pedometer data object which is returned by watching for new data or by recieving historical data
 */
export interface IPedometerData {
    startDate?: number;
    endDate?: number;
    numberOfSteps: number;
    distance: number;
    floorsAscended: number;
    floorsDescended: number;
}
/**
 * @name Pedometer
 * @description
 * Fetch pedestrian-related pedometer data,
 * such as step counts and other information about the distance travelled.
 *
 * @usage
 * ```typescript
 * import { Pedometer } from '@ionic-native/pedometer';
 *
 * Pedometer.isDistanceAvailable()
 *   .then((available: boolean) => console.log(available))
 *   .catch((error: any) => console.log(error));
 *
 * Pedometer.startPedometerUpdates()
 *    .subscribe((data: IPedometerData) => {
 *      console.log(data);
 *    });
 * ```
 */
export declare class Pedometer extends IonicNativePlugin {
    /**
     * Checks if step counting is available. Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    isStepCountingAvailable(): Promise<boolean>;
    /**
     * Distance estimation indicates the ability to use step information to supply the approximate distance travelled by the user.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    isDistanceAvailable(): Promise<boolean>;
    /**
     * Floor counting indicates the ability to count the number of floors the user walks up or down using stairs.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    isFloorCountingAvailable(): Promise<boolean>;
    /**
    * Starts the delivery of recent pedestrian-related data to your Cordova app.
    *
    * When the app is suspended, the delivery of updates stops temporarily.
    * Upon returning to foreground or background execution, the pedometer object begins updates again.
    * @return {Observable<IPedometerData>} Returns a Observable that recieves repeatly data from pedometer in background.
    */
    startPedometerUpdates(): Observable<IPedometerData>;
    /**
     * Stops the delivery of recent pedestrian data updates to your Cordova app.
     * @return {Promise<boolean>} Returns a promise that resolves when pedometer watching was stopped
     */
    stopPedometerUpdates(): Promise<any>;
    /**
     * Retrieves the data between the specified start and end dates.
     * The startDate and endDate options are required and can be constructed in any valid JavaScript way
     * (e.g. new Date(2015, 4, 1, 15, 20, 00) is also valid, as is milliseconds).
     * Only works on iOS.
     * @param {any} options  start date and en date where you want to get pedometer data
     * @return {Promise<IPedometerData>} Returns a promise that resolves when pedometer data found
     */
    queryData(options: {
        startDate: Date;
        endDate: Date;
    }): Promise<IPedometerData>;
}
