import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name DB Meter
 * @description This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.
 * @usage
 * ```typescript
 * import { DBMeter } from '@ionic-native/db-meter';
 *
 * constructor(private dbMeter: DBMeter) { }
 *
 * ...
 *
 *
 * // Start listening
 * let subscription = this.dbMeter.start().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Check if we are listening
 * this.dbMeter.isListening().then(
 *   (isListening: boolean) => console.log(isListening)
 * );
 *
 * // Stop listening
 * subscription.unsubscribe();
 *
 * // Delete DBMeter instance from memory
 * this.dbMeter.delete().then(
 *   () => console.log('Deleted DB Meter instance'),
 *   error => console.log('Error occurred while deleting DB Meter instance')
 * );
 * ```
 */
export declare class DBMeter extends IonicNativePlugin {
    /**
     * Starts listening
     * @returns {Observable<any>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
     */
    start(): Observable<any>;
    /**
     * Stops listening
     * @hidden
     */
    stop(): Promise<any>;
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    isListening(): Promise<boolean>;
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    delete(): Promise<any>;
}
