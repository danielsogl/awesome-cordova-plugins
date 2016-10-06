import { Observable } from 'rxjs/Observable';
/**
 * Defines a package. All fields are non-nullable, except when retrieving the currently running package on the first run of the app,
 * in which case only the appVersion is compulsory.
 *
 * !! THIS TYPE IS READ FROM NATIVE CODE AS WELL. ANY CHANGES TO THIS INTERFACE NEEDS TO BE UPDATED IN NATIVE CODE !!
 */
export interface IPackage {
    deploymentKey: string;
    description: string;
    label: string;
    appVersion: string;
    isMandatory: boolean;
    packageHash: string;
    packageSize: number;
    failedInstall: boolean;
}
/**
 * Defines a remote package, which represents an update package available for download.
 */
export interface IRemotePackage extends IPackage {
    /**
     * The URL at which the package is available for download.
     */
    downloadUrl: string;
    /**
     * Downloads the package update from the CodePush service.
     *
     * @param downloadSuccess Called with one parameter, the downloaded package information, once the download completed successfully.
     * @param downloadError Optional callback invoked in case of an error.
     * @param downloadProgress Optional callback invoked during the download process. It is called several times with one DownloadProgress parameter.
     */
    download(downloadSuccess: SuccessCallback<ILocalPackage>, downloadError?: ErrorCallback, downloadProgress?: SuccessCallback<DownloadProgress>): void;
    /**
     * Aborts the current download session, previously started with download().
     *
     * @param abortSuccess Optional callback invoked if the abort operation succeeded.
     * @param abortError Optional callback invoked in case of an error.
     */
    abortDownload(abortSuccess?: SuccessCallback<void>, abortError?: ErrorCallback): void;
}
/**
 * Defines a local package.
 *
 * !! THIS TYPE IS READ FROM NATIVE CODE AS WELL. ANY CHANGES TO THIS INTERFACE NEEDS TO BE UPDATED IN NATIVE CODE !!
 */
export interface ILocalPackage extends IPackage {
    /**
     * The local storage path where this package is located.
     */
    localPath: string;
    /**
     * Indicates if the current application run is the first one after the package was applied.
     */
    isFirstRun: boolean;
    /**
     * Applies this package to the application. The application will be reloaded with this package and on every application launch this package will be loaded.
     * On the first run after the update, the application will wait for a codePush.notifyApplicationReady() call. Once this call is made, the install operation is considered a success.
     * Otherwise, the install operation will be marked as failed, and the application is reverted to its previous version on the next run.
     *
     * @param installSuccess Callback invoked if the install operation succeeded.
     * @param installError Optional callback inovoked in case of an error.
     * @param installOptions Optional parameter used for customizing the installation behavior.
     */
    install(installSuccess: SuccessCallback<InstallMode>, errorCallback?: ErrorCallback, installOptions?: InstallOptions): void;
}
export interface Callback<T> {
    (error: Error, parameter: T): void;
}
export interface SuccessCallback<T> {
    (result?: T): void;
}
export interface ErrorCallback {
    (error?: Error): void;
}
/**
 * Defines the possible result statuses of the window.codePush.sync operation.
 */
export declare enum SyncStatus {
    /**
     * The application is up to date.
     */
    UP_TO_DATE = 0,
    /**
     * An update is available, it has been downloaded, unzipped and copied to the deployment folder.
     * After the completion of the callback invoked with SyncStatus.UPDATE_INSTALLED, the application will be reloaded with the updated code and resources.
     */
    UPDATE_INSTALLED = 1,
    /**
     * An optional update is available, but the user declined to install it. The update was not downloaded.
     */
    UPDATE_IGNORED = 2,
    /**
     * An error happened during the sync operation. This might be an error while communicating with the server, downloading or unziping the update.
     * The console logs should contain more information about what happened. No update has been applied in this case.
     */
    ERROR = 3,
    /**
     * There is an ongoing sync in progress, so this attempt to sync has been aborted.
     */
    IN_PROGRESS = 4,
    /**
     * Intermediate status - the plugin is about to check for updates.
     */
    CHECKING_FOR_UPDATE = 5,
    /**
     * Intermediate status - a user dialog is about to be displayed. This status will be reported only if user interaction is enabled.
     */
    AWAITING_USER_ACTION = 6,
    /**
     * Intermediate status - the update package is about to be downloaded.
     */
    DOWNLOADING_PACKAGE = 7,
    /**
     * Intermediate status - the update package is about to be installed.
     */
    INSTALLING_UPDATE = 8,
}
/**
 * Defines the available install modes for updates.
 */
export declare enum InstallMode {
    /**
     * The update will be applied to the running application immediately. The application will be reloaded with the new content immediately.
     */
    IMMEDIATE = 0,
    /**
     * The update is downloaded but not installed immediately. The new content will be available the next time the application is started.
     */
    ON_NEXT_RESTART = 1,
    /**
     * The udpate is downloaded but not installed immediately. The new content will be available the next time the application is resumed or restarted, whichever event happends first.
     */
    ON_NEXT_RESUME = 2,
}
/**
 * Defines the install operation options.
 */
export interface InstallOptions {
    /**
     * Used to specify the InstallMode used for the install operation. This is optional and defaults to InstallMode.ON_NEXT_RESTART.
     */
    installMode?: InstallMode;
    /**
     * If installMode === ON_NEXT_RESUME, the minimum amount of time (in seconds) which needs to pass with the app in the background before an update install occurs when the app is resumed.
     */
    minimumBackgroundDuration?: number;
    /**
     * Used to specify the InstallMode used for the install operation if the update is mandatory. This is optional and defaults to InstallMode.IMMEDIATE.
     */
    mandatoryInstallMode?: InstallMode;
}
/**
 * Defines the sync operation options.
 */
export interface SyncOptions extends InstallOptions {
    /**
     * Optional boolean flag. If set, previous updates which were rolled back will be ignored. Defaults to true.
     */
    ignoreFailedUpdates?: boolean;
    /**
     * Used to enable, disable or customize the user interaction during sync.
     * If set to false, user interaction will be disabled. If set to true, the user will be alerted or asked to confirm new updates, based on whether the update is mandatory.
     * To customize the user dialog, this option can be set to a custom UpdateDialogOptions instance.
     */
    updateDialog?: boolean | UpdateDialogOptions;
    /**
     * Overrides the config.xml deployment key when checking for updates.
     */
    deploymentKey?: string;
}
/**
 * Defines the configuration options for the alert or confirmation dialog
 */
export interface UpdateDialogOptions {
    /**
     * If a mandatory update is available and this option is set, the message will be displayed to the user in an alert dialog before downloading and installing the update.
     * The user will not be able to cancel the operation, since the update is mandatory.
     */
    mandatoryUpdateMessage?: string;
    /**
     * If an optional update is available and this option is set, the message will be displayed to the user in a confirmation dialog.
     * If the user confirms the update, it will be downloaded and installed. Otherwise, the update update is not downloaded.
     */
    optionalUpdateMessage?: string;
    /**
     * The title of the dialog box used for interacting with the user in case of a mandatory or optional update.
     * This title will only be used if at least one of mandatoryUpdateMessage or optionalUpdateMessage options are set.
     */
    updateTitle?: string;
    /**
     * The label of the confirmation button in case of an optional update.
     */
    optionalInstallButtonLabel?: string;
    /**
     * The label of the cancel button in case of an optional update.
     */
    optionalIgnoreButtonLabel?: string;
    /**
     * The label of the continue button in case of a mandatory update.
     */
    mandatoryContinueButtonLabel?: string;
    /**
     * Flag indicating if the update description provided by the CodePush server should be displayed in the dialog box appended to the update message.
     */
    appendReleaseDescription?: boolean;
    /**
     * Optional prefix to add to the release description.
     */
    descriptionPrefix?: string;
}
/**
 * Defines the format of the DownloadProgress object, used to send periodical update notifications on the progress of the update download.
 */
export interface DownloadProgress {
    totalBytes: number;
    receivedBytes: number;
}
/**
 * @name CodePush
 * @description
 * CodePush plugin for Cordova by Microsoft that supports iOS and Android.
 *
 * For more info, please see https://github.com/ksachdeva/ionic2-code-push-example
 *
 * @usage
 * ```typescript
 * import { CodePush } from 'ionic-native';
 *
 * // note - mostly error & completed methods of observable will not fire
 * // as syncStatus will contain the current state of the update
 * CodePush.sync().subscribe((syncStatus) => console.log(syncStatus));
 *
 * const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
 * CodePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));
 *
 * ```
 */
export declare class CodePush {
    /**
     * Get the current package information.
     *
     * @param packageSuccess Callback invoked with the currently deployed package information.
     * @param packageError Optional callback invoked in case of an error.
     */
    static getCurrentPackage(): Promise<ILocalPackage>;
    /**
     * Gets the pending package information, if any. A pending package is one that has been installed but the application still runs the old code.
     * This happends only after a package has been installed using ON_NEXT_RESTART or ON_NEXT_RESUME mode, but the application was not restarted/resumed yet.
     */
    static getPendingPackage(): Promise<ILocalPackage>;
    /**
     * Checks with the CodePush server if an update package is available for download.
     *
     * @param querySuccess Callback invoked in case of a successful response from the server.
     *                     The callback takes one RemotePackage parameter. A non-null package is a valid update.
     *                     A null package means the application is up to date for the current native application version.
     * @param queryError Optional callback invoked in case of an error.
     * @param deploymentKey Optional deployment key that overrides the config.xml setting.
     */
    static checkForUpdate(deploymentKey?: string): Promise<IRemotePackage>;
    /**
     * Notifies the plugin that the update operation succeeded and that the application is ready.
     * Calling this function is required on the first run after an update. On every subsequent application run, calling this function is a noop.
     * If using sync API, calling this function is not required since sync calls it internally.
     *
     * @param notifySucceeded Optional callback invoked if the plugin was successfully notified.
     * @param notifyFailed Optional callback invoked in case of an error during notifying the plugin.
     */
    static notifyApplicationReady(): Promise<void>;
    /**
     * Reloads the application. If there is a pending update package installed using ON_NEXT_RESTART or ON_NEXT_RESUME modes, the update
     * will be immediately visible to the user. Otherwise, calling this function will simply reload the current version of the application.
     */
    static restartApplication(): Promise<void>;
    /**
     * Convenience method for installing updates in one method call.
     * This method is provided for simplicity, and its behavior can be replicated by using window.codePush.checkForUpdate(), RemotePackage's download() and LocalPackage's install() methods.
     *
     * The algorithm of this method is the following:
     * - Checks for an update on the CodePush server.
     * - If an update is available
     *         - If the update is mandatory and the alertMessage is set in options, the user will be informed that the application will be updated to the latest version.
     *           The update package will then be downloaded and applied.
     *         - If the update is not mandatory and the confirmMessage is set in options, the user will be asked if they want to update to the latest version.
     *           If they decline, the syncCallback will be invoked with SyncStatus.UPDATE_IGNORED.
     *         - Otherwise, the update package will be downloaded and applied with no user interaction.
     * - If no update is available on the server, or if a previously rolled back update is available and the ignoreFailedUpdates is set to true, the syncCallback will be invoked with the SyncStatus.UP_TO_DATE.
     * - If an error occurs during checking for update, downloading or installing it, the syncCallback will be invoked with the SyncStatus.ERROR.
     *
     * @param syncCallback Optional callback to be called with the status of the sync operation.
     * @param syncOptions Optional SyncOptions parameter configuring the behavior of the sync operation.
     * @param downloadProgress Optional callback invoked during the download process. It is called several times with one DownloadProgress parameter.
     *
     */
    static sync(syncOptions?: SyncOptions, downloadProgress?: SuccessCallback<DownloadProgress>): Observable<SyncStatus>;
}
