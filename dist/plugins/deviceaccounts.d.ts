export declare class DeviceAccounts {
    /**
     *  Gets all accounts registered on the Android Device
     */
    static get(): Promise<any>;
    /**
     *  Get all accounts registered on Android device for requested type
     */
    static getByType(type: string): Promise<any>;
    /**
     *  Get all emails registered on Android device (accounts with 'com.google' type)
     */
    static getEmails(): Promise<any>;
    /**
     *  Get the first email registered on Android device
     */
    static getEmail(): Promise<any>;
}
