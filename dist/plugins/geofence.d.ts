import { Observable } from 'rxjs/Observable';
export declare class Geofence {
    static TransitionType: {
        ENTER: number;
        EXIT: number;
        BOTH: number;
    };
    static onTrasitionReceived: Function;
    /**
     * Initializes the plugin. User will be prompted to allow the app to use location and notifications.
     *
     * @return {Promise<any>}
     */
    static initialize(): Promise<void>;
    /**
     * Adds a new geofence or array of geofences. For geofence object, see above.
     *
     * @return {Promise<any>}
     */
    static addOrUpdate(geofences: Object | Array<Object>): Promise<void>;
    /**
     * Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
     * geofence was created.
     *
     * @return {Promise<any>}
     */
    static remove(geofenceId: string | Array<string>): Promise<void>;
    /**
     * Removes all geofences.
     *
     * @return {Promise<any>}
     */
    static removeAll(): Promise<void>;
    /**
     * Returns an array of geofences currently being monitored.
     *
     * @return {Promise<Array<string>>}
     */
    static getWatched(): Promise<string>;
    /**
     * Called when a geofence is crossed in the direction specified by `TransitType`.
     *
     * @return {Promise<any>}
     */
    static onTransitionReceived(): Observable<any>;
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @return {Promise<Object>}
     */
    static onNotificationClicked(): Observable<any>;
}
