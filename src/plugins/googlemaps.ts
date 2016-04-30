import {Cordova, Plugin} from './plugin';
import {Observable} from 'rxjs/Observable';
import {CordovaInstance} from './plugin';
/**
 * Created by Ibrahim on 3/29/2016.
 */
declare var plugin: any;
/**
 * @name Google Maps
 */
@Plugin({
    pluginRef: 'plugin.google.maps',
    plugin: 'cordova-plugin-googlemaps',
    repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps'
})
export class GoogleMaps {

    private _objectInstance: any;

    constructor (elementId: string) {
        this._objectInstance = plugin.google.maps.Map.getMap(document.getElementById(elementId));
    }

    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MAP_READY'
    })
    static onInit (): Observable<GoogleMaps> {return; }

    @CordovaInstance({
        sync: true
    })
    setDebuggable (isDebuggable: boolean): void {}

    setClickable (isClickable: boolean): void {}

}
