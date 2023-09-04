import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export type RecordingMaskType = 'COVERING' | 'ERASING';

export type RecordingMaskRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

/**
 * @description Creates an overlay that masks a specified screen part to protect it from unwanted recording.
 * @param maskType - Represents the type of a mask element.
 * @param maskRect - Defines an area of the recording mask.
 */
export interface RecordingMask {
  maskType: RecordingMaskType;
  maskRect: RecordingMaskRect;
}

export type RecordingMaskList = RecordingMask[];

export enum RenderingMode {
  NO_RENDERING = 0,
  NATIVE = 1,
  WIREFRAME = 2,
}

export enum RecordingStatus {
  Recording = 0,
  NotStarted = 1,
  Stopped = 2,
  BellowMinSdkVersion = 3,
  ProjectLimitReached = 4,
  StorageLimitReached = 5,
  InternalError = 6,
  NotRunningInSwiftUIContext = 7,
  UnsupportedPlatform = 8,
}

export type UrlCallbackShape = (url: string) => void;

/**
 * @name Smartlook
 * @description
 * Official Smartlook SDK plugin.
 * Full documentation can be found here: https://mobile.developer.smartlook.com/reference/ionic-sdk-installation
 * @usage
 * ```typescript
 * import { Smartlook } from '@awesome-cordova-plugins/smartlook/ngx';
 *
 * ...
 *
 * @Component( ... )
 * export class AppComponent {
 *     constructor(private smartlook: Smartlook) {
 *        this.platform.ready().then(() => {
 *            this.smartlook.setProjectKey({ key: "YOUR PROJECT KEY" });
 *            this.smartlook.start();
 *        }
 *     }
 * }
 * ```
 */
@Plugin({
  pluginName: 'Smartlook',
  plugin: 'https://github.com/smartlook/cordova-smartlook.git',
  pluginRef: 'cordova.plugins.SmartlookPlugin',
  repo: 'https://github.com/smartlook/cordova-smartlook.git',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Smartlook extends AwesomeCordovaNativePlugin {
  /**
   * @description Starts the recording, even when no project key is set.
   * See the docs for more infromation.
   */
  @Cordova({ sync: true })
  start(): void {
    return;
  }

  /**
   * @description Stops the recording.
   */
  @Cordova({ sync: true })
  stop(): void {
    return;
  }

  /**
   * @description Resets the SDK to a default state.
   */
  @Cordova({ sync: true })
  reset(): void {
    return;
  }

  /**
   * @description Logs a new event in the application.
   * @param options.eventName - Application event name
   * @param options.props - optional event properties object
   */
  @Cordova({ sync: true })
  trackEvent(options: { eventName: string; props?: Record<string, string> }): void {
    return;
  }

  /**
   * @description Logs a new selector event in the application.
   * @param options.eventName - Application event name
   * @param options.props - optional event properties object
   * @kind **iOS only**
   */
  @Cordova({ sync: true })
  trackSelector(options: { selectorName: string; props?: Record<string, string> }): void {
    return;
  }

  /**
   * Logs a new navigation sreen-entering event in the application.
   * @param options.eventName - Application event name
   * @param options.props - optional event properties object
   */
  @Cordova({ sync: true })
  trackNavigationEnter(options: { eventName: string; props?: Record<string, string> }): void {
    return;
  }

  /**
   * Logs a new navigation sreen-exiting event in the application.
   * @param options.eventName - Application event name
   * @param options.props - optional event properties object
   */
  @Cordova({ sync: true })
  trackNavigationExit(options: { eventName: string; props?: Record<string, string> }): void {
    return;
  }

  /**
   * Sets a new SDK referrer.
   * @param options.referrer - Application referrer name
   * @param options.source - Referrer source name
   *
   * @kind **Android only**
   */
  @Cordova({ sync: true })
  setReferrer(options: { referrer: string; source: string }): void {
    return;
  }

  /**
   * @description Sets a user-passed global event property.
   * @param options.eventName - Global event name
   * @param options.props - optional event properties object
   */
  @Cordova({ sync: true })
  putGlobalEventProperty(options: { propertyName: string; value: string }): void {
    return;
  }

  /**
   * @description Retrieves a user-passed event property.
   * @param options.eventName - Global event name to retrieve
   */
  @Cordova()
  getGlobalEventProperty(options: { propertyName: string }): Promise<string> {
    return;
  }

  /**
   * @description Removes a user-passed event property.
   * @param options.eventName - Global event name to remove
   */
  @Cordova({ sync: true })
  removeGlobalEventProperty(options: { propertyName: string }): void {
    return;
  }

  /**
   * @description Clears all user-passed event properties.
   */
  @Cordova({ sync: true })
  clearGlobalEventProperties(): void {
    return;
  }

  /**
   * @description Sets new identification for the recorded user.
   * @param options.identifier - User identifier
   */
  @Cordova({ sync: true })
  setUserIdentifier(options: { identifier: string }): void {
    return;
  }

  /**
   * @description Sets user’s full name.
   * @param options.name - User's full name
   */
  @Cordova({ sync: true })
  setUserName(options: { name: string }): void {
    return;
  }

  /**
   * @description Sets user’s email address.
   * @param options.email - User's email address
   */
  @Cordova({ sync: true })
  setUserEmail(options: { email: string }): void {
    return;
  }

  /**
   * @description Sets or adds a new value to the user properties.
   * @param options.propertyName - User property name
   * @param options.value - User property value
   */
  @Cordova({ sync: true })
  setUserProperty(options: { propertyName: string; value: string }): void {
    return;
  }

  /**
   * @description Retrieves a user property value with a given property name (a key).
   * @param options.propertyName - User property name
   * @param options.successCallback - Callback to be invoked with the user property value
   */
  @Cordova()
  getUserProperty(options: { propertyName: string }): Promise<string> {
    return;
  }

  /**
   * @description Removes a user property given a property name (a key).
   */
  @Cordova({ sync: true })
  removeUserProperty(options: { propertyName: string }): void {
    return;
  }

  /**
   * @description Initializes a new user for recording.
   */
  @Cordova({ sync: true })
  openNewUser(): void {
    return;
  }

  /**
   * @description Opens a new recording session.
   */
  @Cordova({ sync: true })
  openNewSession(): void {
    return;
  }

  /**
   * @description Retrieves the unique URL of the currently recorded user.
   * @param options.successCallback - Callback to be invoked with the user URL
   */
  @Cordova()
  getUserUrl(): Promise<string> {
    return;
  }

  /**
   * @description Retrieves the unique URL of this recording session.
   * @param options.successCallback - Callback to be invoked with the session URL
   */
  @Cordova()
  getSessionUrl(): Promise<string> {
    return;
  }

  /**
   * @description Retrieves the unique session URL with the exact location on the timeline.
   * @param options.successCallback - Callback to be invoked with the session URL
   */
  @Cordova()
  getSessionUrlWithTimestamp(): Promise<string> {
    return;
  }

  /**
   * @description Sets a proxy host name for data transfer.
   * @param options.relayProxyHost - Proxy host name
   *
   * @kind **Android only**
   */
  @Cordova({ sync: true })
  setRelayProxyHost(options: { relaxyProxyHost: string }): void {
    return;
  }

  /**
   * @description Sets video capturing framerate.
   * @param options.frameRate - Framerate to be set. Must be between `2` and `10` frames per second.
   */
  @Cordova({ sync: true })
  setFrameRate(options: { frameRate: number }): void {
    return;
  }

  /**
   * Retrieves the video capturing framerate.
   * @param options.successCallback - Callback to be invoked with the current framerate
   */
  @Cordova()
  getFrameRate(): Promise<number> {
    return;
  }

  /**
   * @description Sets whether or not Android's `Jobs` are used for uploading.
   *
   * @kind **Android only**
   */
  @Cordova({ sync: true })
  setJobUploadEnabled(options: { isEnabled: boolean }): void {
    return;
  }

  /**
   * @description Sets whether or not the SDK should use the adaptive framerate feature to capture video.
   * @kind **iOS only**
   */
  @Cordova({ sync: true })
  setAdaptiveFrameRateEnabled(options: { isEnabled: boolean }): void {
    return;
  }

  /**
   * @description A boolean that determines whether the SDK uses the adaptive framerate functionality for video capture.
   * @kind **iOS only**
   */
  @Cordova()
  getAdaptiveFrameRateEnabled(): Promise<boolean> {
    return;
  }

  /**
   * @description Enables the tracking of all events.
   */
  @Cordova({ sync: true })
  eventTrackingEnableAll(): void {
    return;
  }

  /**
   * @description Disabled the tracking of all events.
   */
  @Cordova({ sync: true })
  eventTrackingDisableAll(): void {
    return;
  }

  /**
   * @description Sets a unique project key.
   * @param options.key - Project key
   */
  @Cordova({ sync: true })
  setProjectKey(options: { key: string }): void {
    return;
  }

  /**
   * @description Determines whether or not the SDK is recording.
   * @param options.successCallback - Callback to be invoked with the current value
   */
  @Cordova()
  isRecording(): Promise<boolean> {
    return;
  }

  /**
   * @description Retrieves a string containing the current project key.
   * @param options.successCallback - Callback to be invoked with the current project key
   */
  @Cordova()
  getProjectKey(): Promise<string> {
    return;
  }

  /**
   * @description Enables the tracking of all user's interaction events.
   *
   * @kind **Android only**
   * @param options.isEnabled - A boolean that determines whether or not the tracking of all user's interaction events is enabled.
   */
  @Cordova({ sync: true })
  setEventTrackingInteractionUserStatus(options: { isEnabled: boolean }): void {
    return;
  }

  /**
   * @description Sets whether or not "rage" clicks are automatically tracked.
   * @param options.isEnabled - A boolean that determines whether or not "rage" clicks are automatically tracked.
   */
  @Cordova({ sync: true })
  setEventTrackingInteractionRageClickStatus(options: { isEnabled: boolean }): void {
    return;
  }

  /**
   * @description Sets tracking properties to default values.
   */
  @Cordova({ sync: true })
  restoreDefault(): void {
    return;
  }

  /**
   * @description Sets whether or not a WebView class should be considered sensitive.
   * @default True by default in the SDK.
   * @param options.isSensitive - A boolean that determines whether or not the WebView class should be considered sensitive.
   */
  @Cordova({ sync: true })
  setWebViewSensitivity(options: { isSensitive: boolean }): void {
    return;
  }

  /**
   * @description Retrieves the current SDK's rendering mode.
   * @param options.successCallback - Callback to be invoked with the current rendering mode
   */
  @Cordova()
  getRenderingMode(): Promise<RenderingMode> {
    return;
  }

  /**
   * @description Retrieves the current recording status. The default SDK value is `NotStarted`.
   * @param options.successCallback - Callback to be invoked with the current recording status
   */
  @Cordova()
  getRecordingStatus(): Promise<RecordingStatus> {
    return;
  }

  /**
   * @description Retrieves a number representing the current framerate.
   * @param options.successCallback - Callback to be invoked with the current framerate
   */
  @Cordova()
  getStateFrameRate(): Promise<number> {
    return;
  }

  /**
   * @description Sets SDK's video rendering mode for captured data.
   * @param options.renderingMode - Rendering mode to be set. @see RenderingMode
   */
  @Cordova({ sync: true })
  setRenderingMode(options: { renderingMode: RenderingMode }): void {
    return;
  }

  /**
   * @description Registers a listener that gets triggered when the User URL changes.
   *
   * @param options.userUrlChangedCallback - Callback to be invoked when the User URL changes
   */
  @Cordova({ sync: true })
  registerUserUrlChangedListener(options: { userUrlChangedCallback: UrlCallbackShape }): void {
    return;
  }

  /**
   * @description Registers a listener that gets triggered when the Session URL changes.
   *
   * @param options.sessionUrlChangedCallback - Callback to be invoked when the Session URL changes
   */
  @Cordova({ sync: true })
  registerSessionUrlChangedListener(options: { sessionUrlChangedCallback: UrlCallbackShape }): void {
    return;
  }

  /**
   * @description Registers a listener that gets triggered when the native SDK's Rendering mode changes.
   *
   * @param options.renderingModeChangedCallback - Callback to be invoked when the native SDK's Rendering mode changes
   * @kind **iOS only**
   */
  @Cordova({ sync: true })
  registerRenderingModeChangedListener(options: {
    renderingModeChangedCallback: (renderingMode: RenderingMode) => void;
  }): void {
    return;
  }

  /**
   * @description Registers a listener that gets triggered when the native SDK's Recording status changes.
   *
   * @param options.recordingStatusChangedCallback - Callback to be invoked when the native SDK's Recording status changes
   * @kind **iOS only**
   */
  @Cordova({ sync: true })
  registerRecordingStatusChangedListener(options: {
    recordingStatusChangedCallback: (recordingStatus: RecordingStatus) => void;
  }): void {
    return;
  }

  /**
   * @description Removes the user URL change listener.
   */
  @Cordova({ sync: true })
  removeUserUrlChangedListener(): void {
    return;
  }

  /**
   * @description Removes the session URL change listener.
   */
  @Cordova({ sync: true })
  removeSessionUrlChangedListener(): void {
    return;
  }

  /**
   * @description Removes the rendering mode change listener.
   */
  @Cordova({ sync: true })
  removeRenderingModeChangedListener(): void {
    return;
  }

  /**
   * @description Removes the recording status change listener.
   */
  @Cordova({ sync: true })
  removeRecordingStatusChangedListener(): void {
    return;
  }

  /**
   * @description Creates a new @see RecordingMask .
   *
   * @param options.recordingMaskList - an array of recording mask elements containing their bounding rectangles and mask types.
   * @see RecordingMaskRect , @see RecordingMaskType
   */
  @Cordova({ sync: true })
  setRecordingMask(options: { recordingMaskList: RecordingMaskList }): void {
    return;
  }

  /**
   * @description Enables advanced SDK logging capabilities.
   *
   * @kind **Android only**
   */
  @Cordova({ sync: true })
  enableLogs(): void {
    return;
  }
}
