import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Android Permissions
 * @description
 * This plugin is designed to support Android new permissions checking mechanism.
 *
 * You can find all permissions here: https://developer.android.com/reference/android/Manifest.permission.html
 *
 * @usage
 * ```
 * import { AndroidPermissions } from '@ionic-native/android-permissions';
 *
 *
 * constructor(private androidPermissions: AndroidPermissions) { }
 *
 * ...
 *
 * this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
 *   success => console.log('Permission granted'),
 *   err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.CAMERA)
 * );
 *
 * this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
 *
 * ```
 */
export declare class AndroidPermissions extends IonicNativePlugin {
    PERMISSION: any;
    /**
     * Check permission
     * @param permission {string} The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    checkPermission(permission: string): Promise<any>;
    /**
     * Request permission
     * @param permission {string} The name of the permission to request
     * @return {Promise<any>}
     */
    requestPermission(permission: string): Promise<any>;
    /**
     * Request permissions
     * @param permissions {Array<string>} An array with permissions
     * @return {Promise<any>} Returns a promise
     */
    requestPermissions(permissions: string[]): Promise<any>;
    /**
     * This function still works now, will not support in the future.
     * @param permission {string} The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    hasPermission(permission: string): Promise<any>;
}
