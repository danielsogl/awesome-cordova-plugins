/**
 * @name FileOpener
 * @description
 * This plugin will open a file on your device file system with its default application.
 *
 * @usage
 * ```
 * import {FileOpener} from 'ionic-native';
 *
 *
 *
 * ```
 */
export declare class FileOpener {
    /**
     * Open an file
     * @param filePath {string} File Path
     * @param fileMIMEType {string} File MIME Type
     */
    static open(filePath: string, fileMIMEType: string): Promise<any>;
    /**
     * Uninstalls a package
     * @param packageId {string}  Package ID
     */
    static uninstall(packageId: string): Promise<any>;
    /**
     * Check if an app is already installed
     * @param packageId {string} Package ID
     */
    static appIsInstalled(packageId: string): Promise<any>;
}
