import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export class SmartlookSetupConfigBuilder {
  private readonly _smartlookSetupConfig: SmartlookSetupConfig;

  constructor(smartlookAPIKey: string) {
    this._smartlookSetupConfig = new SmartlookSetupConfig(smartlookAPIKey);
  }

  fps(fps: number): SmartlookSetupConfigBuilder {
    this._smartlookSetupConfig.fps = fps;
    return this;
  }

  renderingMode(renderingMode: SmartlookRenderingMode): SmartlookSetupConfigBuilder {
    this._smartlookSetupConfig.renderingMode = renderingMode.getRenderingModeString();
    return this;
  }

  startNewSession(startNewSession: boolean): SmartlookSetupConfigBuilder {
    this._smartlookSetupConfig.startNewSession = startNewSession;
    return this;
  }

  startNewSessionAndUser(startNewSessionAndUser: boolean): SmartlookSetupConfigBuilder {
    this._smartlookSetupConfig.startNewSessionAndUser = startNewSessionAndUser;
    return this;
  }

  eventTrackingModes(eventTrackingModes: SmartlookEventTrackingModes): SmartlookSetupConfigBuilder {
    this._smartlookSetupConfig.eventTrackingModes = eventTrackingModes.getEventTrackingModeStringArray();
    return this;
  }

  build(): SmartlookSetupConfig {
    return this._smartlookSetupConfig;
  }
}

export class SmartlookSetupConfig {
  private smartlookAPIKey: string;
  fps: number;
  renderingMode: string;
  startNewSession: boolean;
  startNewSessionAndUser: boolean;
  eventTrackingModes: string[];

  constructor(smartlookAPIKey: string) {
    this.smartlookAPIKey = smartlookAPIKey;
  }
}

export class SmartlookResetSession {
  private resetUser: boolean;

  constructor(resetUser: boolean) {
    this.resetUser = resetUser;
  }
}

export class SmartlookUserIdentifier {
  private identifier: string;
  private sessionProperties: {};

  constructor(identifier: string, sessionProperties?: {}) {
    this.identifier = identifier;
    this.sessionProperties = sessionProperties;
  }
}

export class SmartlookEventTrackingMode {
  private eventTrackingMode: string;

  static FULL_TRACKING(): SmartlookEventTrackingMode {
    return new SmartlookEventTrackingMode('full_tracking');
  }

  static IGNORE_USER_INTERACTION(): SmartlookEventTrackingMode {
    return new SmartlookEventTrackingMode('ignore_user_interaction');
  }

  static IGNORE_NAVIGATION_INTERACTION(): SmartlookEventTrackingMode {
    return new SmartlookEventTrackingMode('ignore_navigation_interaction');
  }

  static IGNORE_RAGE_CLICKS(): SmartlookEventTrackingMode {
    return new SmartlookEventTrackingMode('ignore_rage_clicks');
  }

  static NO_TRACKING(): SmartlookEventTrackingMode {
    return new SmartlookEventTrackingMode('no_tracking');
  }

  getEventTrackingModeString(): string {
    return this.eventTrackingMode;
  }

  constructor(eventTrackingMode: string) {
    this.eventTrackingMode = eventTrackingMode;
  }
}

export class SmartlookEventTrackingModes {
  private eventTrackingModes: string[];

  constructor(eventTrackingModes: SmartlookEventTrackingMode[]) {
    this.eventTrackingModes = eventTrackingModes.map((eventTrackingMode) =>
      eventTrackingMode.getEventTrackingModeString()
    );
  }

  getEventTrackingModeStringArray(): string[] {
    return this.eventTrackingModes;
  }
}

export class SmartlookViewState {
  static START = 'start';
  static STOP = 'stop';
}

export class SmartlookNavigationEvent {
  private name: string;
  private viewState: string;

  constructor(name: string, viewState?: string) {
    this.name = name;
    this.viewState = this.viewState;
  }
}

export class SmartlookCustomEvent {
  private name: string;
  private eventProperties: {};

  constructor(name: string, eventProperties?: {}) {
    this.name = name;
    this.eventProperties = eventProperties;
  }
}

export class SmartlookTimedCustomEventStart {
  private name: string;
  private eventProperties: {};

  constructor(name: string, eventProperties?: {}) {
    this.name = name;
    this.eventProperties = eventProperties;
  }
}

export class SmartlookTimedCustomEventStop {
  private eventId: string;
  private eventProperties: {};

  constructor(eventId: string, eventProperties?: {}) {
    this.eventId = eventId;
    this.eventProperties = eventProperties;
  }
}

export class SmartlookTimedCustomEventCancel {
  private eventId: string;
  private reason: string;
  private eventProperties: {};

  constructor(eventId: string, reason: string, eventProperties?: {}) {
    this.eventId = eventId;
    this.reason = reason;
    this.eventProperties = eventProperties;
  }
}

export class SmartlookGlobalEventProperties {
  private globalEventProperties: {};
  private immutable: boolean;

  constructor(globalEventProperties: {}, immutable: boolean) {
    this.globalEventProperties = globalEventProperties;
    this.immutable = immutable;
  }
}

export class SmartlookGlobalEventProperty {
  private key: string;
  private value: string;
  private immutable: boolean;

  constructor(key: string, value: string, immutable: boolean) {
    this.key = key;
    this.value = value;
    this.immutable = immutable;
  }
}

export class SmartlookGlobalEventPropertyKey {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }
}

export class SmartlookReferrer {
  private referrer: string;
  private source: string;

  constructor(referrer: string, source: string) {
    this.referrer = referrer;
    this.source = source;
  }
}

export class SmartlookDashboardSessionUrl {
  private withCurrentTimestamp: boolean;

  constructor(withCurrentTimestamp: boolean) {
    this.withCurrentTimestamp = withCurrentTimestamp;
  }
}

export interface SmartlookIntegrationListener {
  onSessionReady: (dashboardSessionUrl: string) => any;
  onVisitorReady: (dashboardVisitorUrl: string) => any;
}

export class SmartlookRenderingMode {
  private renderingMode: string;

  static NO_RENDERING(): SmartlookRenderingMode {
    return new SmartlookRenderingMode('no_rendering');
  }

  static NATIVE(): SmartlookRenderingMode {
    return new SmartlookRenderingMode('native');
  }

  getRenderingModeString(): string {
    return this.renderingMode;
  }

  constructor(renderingMode: string) {
    this.renderingMode = renderingMode;
  }
}

/**
 * @name Smartlook
 * @description
 * Official Smartlook SDK plugin.
 * Full documentation can be found here: https://smartlook.github.io/docs/sdk/ionic/
 * @usage
 * ```typescript
 * import { Smartlook, SmartlookSetupConfig } from '@awesome-cordova-plugins/smartlook/ngx';
 *
 * ...
 *
 * @Component( ... )
 * export class AppComponent {
 *     constructor(private smartlook: Smartlook) {
 *        this.platform.ready().then(() => {
 *            this.smartlook.setupAndStartRecording(new SmartlookSetupConfig("YOUR API KEY"));
 *        }
 *     }
 * }
 * ```
 * @classes
 * SmartlookSetupConfigBuilder
 * SmartlookSetupConfig
 * SmartlookResetSession
 * SmartlookUserIdentifier
 * SmartlookEventTrackingMode
 * SmartlookNavigationEvent
 * SmartlookViewState
 * SmartlookCustomEvent
 * SmartlookTimedCustomEventStart
 * SmartlookTimedCustomEventStop
 * SmartlookTimedCustomEventCancel
 * SmartlookGlobalEventProperties
 * SmartlookGlobalEventProperty
 * SmartlookGlobalEventPropertyKey
 * SmartlookReferrer
 * SmartlookDashboardSessionUrl
 * SmartlookRenderingMode
 * SmartlookEventTrackingMode
 * SmartlookEventTrackingModes
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
   * Setup and start Smartlook SDK recording.
   *
   * @param config SmartlookSetupConfig object.
   * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
   * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
   * @param options.renderingMode (optional) Mode defining the video output of recording.
   * @param options.startNewSession (optional) If true new session is going to be created
   * @param options.startNewSessionAndUser (optional) If true new session and visitor is going to be created
   */
  @Cordova({ sync: true })
  setupAndStartRecording(config: SmartlookSetupConfig): void {
    return;
  }

  /**
   * Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see start())
   *
   * @param config SmartlookSetupConfig object.
   * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
   * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
   * @param options.renderingMode (optional) Mode defining the video output of recording.
   * @param options.startNewSession (optional) If true new session is going to be created
   * @param options.startNewSessionAndUser (optional) If true new session and visitor is going to be created
   */
  @Cordova({ sync: true })
  setup(config: SmartlookSetupConfig): void {
    return;
  }

  /**
   * Start SDK recording.
   */
  @Cordova({ sync: true })
  startRecording(): void {
    return;
  }

  /**
   * Stop SDK recording. Recording will start again when you call start().
   */
  @Cordova({ sync: true })
  stopRecording(): void {
    return;
  }

  /**
   * Check if SDK is currently recording.
   *
   * @returns {Promise<boolean>} Returns a promise with isRecording boolean.
   */
  @Cordova()
  isRecording(): Promise<boolean> {
    return;
  }

  /**
   * Resets current session and new session in dashboard is created.
   *
   * @param resetSession SmartlookResetSession object.
   * @param resetSession.resetUser If set to TRUE new visitor is created in the dashboard.
   */
  @Cordova({ sync: true })
  resetSession(resetSession: SmartlookResetSession): void {
    return;
  }

  /**
   * When you start sensitive mode SDK records blank videos (single color) but SDK still sends analytic events.
   */
  @Cordova({ sync: true })
  startFullscreenSensitiveMode(): void {
    return;
  }

  /**
   * Stop sensitive mode -> SDK records video.
   */
  @Cordova({ sync: true })
  stopFullscreenSensitiveMode(): void {
    return;
  }

  /**
   * Check if fullscreen sensitive mode is active.
   *
   * @returns {Promise<boolean>} Returns a promise with isFullscreenSensitiveModeActive boolean.
   */
  @Cordova()
  isFullscreenSensitiveModeActive(): Promise<boolean> {
    return;
  }

  /**
   * Identify user.
   *
   * @param identifier SmartlookUserIdentifier object.
   * @param identifier.idenfier (required) id that can be used to identify user and his records.
   *                            You will see this Id in Smartlook dashboard so you can pair records with concrete user.
   * @param identifier.sessionProperties (optional) custom session properties object.
   */
  @Cordova({ sync: true })
  setUserIdentifier(identifier: SmartlookUserIdentifier): void {
    return;
  }

  /**
   * You can configure which events are being tracked by setting eventTrackingMode.
   *
   * @param eventTrackingMode Can be on of:
   *                          - EventTrackingMode.FULL_TRACKING ... track everything
   *                          - EventTrackingMode.IGNORE_USER_INTERACTION ... will not track touches
   *                            focus, keyboard, selector events
   *                          - EventTrackingMode.IGNORE_NAVIGATION_INTERACTION ... will not track screen names
   *                          - EventTrackingMode.IGNORE_RAGE_CLICKS ... will not track rage clicks
   *                          - EventTrackingMode.NO_TRACKING ... not gonna track any events
   */
  @Cordova({ sync: true })
  setEventTrackingMode(eventTrackingMode: SmartlookEventTrackingMode): void {
    return;
  }

  /**
   * You can configure which events are being tracked by setting eventTrackingMode.
   *
   * @param eventTrackingModes Array of EventTrackingModes.
   */
  @Cordova({ sync: true })
  setEventTrackingModes(eventTrackingModes: SmartlookEventTrackingModes): void {
    return;
  }

  /**
   * Track custom navigation event.
   *
   * @param navigationEvent SmartlookNavigationEvent object.
   * @param navigationEvent.name Controler/Activity/Page name.
   * @param navigationEvent.viewState One of SmartlookViewState.START or SmartlookViewState.STOP.
   */
  @Cordova({ sync: true })
  trackNavigationEvent(navigationEvent: SmartlookNavigationEvent) {
    return;
  }

  /**
   * Track custom event.
   *
   * @param timedEvent SmartlookTimedCustomEventStart object.
   * @param timedEvent.name (required) string used to identify event in dashboard.
   * @param timedEvent.eventProperties (optional) timed event properties object. These properties
   *                                    are going to be merged with properties passed in stop/cancel.
   * @returns {Promise<string>} Returns a promise with eventId string (@see stopTimedCustomEvent(), @see cancelTimedCustomEvent()).
   */
  @Cordova()
  startTimedCustomEvent(timedEvent: SmartlookTimedCustomEventStart): Promise<string> {
    return;
  }

  /**
   * Stops timed event. Duration from according start is calculated and send with the event.
   *
   * @param timedEvent SmartlookTimedCustomEventStop object.
   * @param timedEvent.eventId (required) Unique event id that is used to identify this event.
   * @param timedEvent.eventProperties (optional) timed event properties object. These properties
   *                                    are going to be merged with properties passed in start.
   */
  @Cordova({ sync: true })
  stopTimedCustomEvent(timedEvent: SmartlookTimedCustomEventStop): void {
    return;
  }

  /**
   * Cancels timed event. It calculates event duration and notes that this event has failed.
   *
   * @param timedEvent SmartlookTimedCustomEventCancel object.
   * @param timedEvent.eventId (required) Unique event id that is used to identify this event.
   * @param timedEvent.reason (required) Short string description explaining why the event was canceled.
   * @param timedEvent.eventProperties (optional) timed event properties object. These properties
   *                                    are going to be merged with properties passed in start.
   */
  @Cordova({ sync: true })
  cancelTimedCustomEvent(timedEvent: SmartlookTimedCustomEventCancel): void {
    return;
  }

  /**
   * Track custom event.
   *
   * @param event SmartlookCustomEvent object.
   * @param event.name (required) string used to identify event.
   * @param event.eventProperties (optional) event properties object.
   */
  @Cordova({ sync: true })
  trackCustomEvent(event: SmartlookCustomEvent): void {
    return;
  }

  /**
   * Set global event properties that will be added to every tracked event.
   *
   * @param properties SmartlookGlobalEventProperties object.
   * @param properties.globalEventProperties (required) global event properties object.
   * @param properties.immutable (required) If set to TRUE these properties have higher priority
   *                              than mutable ones and also they cannot be changed (only removed).
   */
  @Cordova({ sync: true })
  setGlobalEventProperties(properties: SmartlookGlobalEventProperties): void {
    return;
  }

  /**
   * Check if SDK is currently recording.
   *
   * @param property SmartlookGlobalEventProperty object.
   * @param property.key (required) global property key.
   * @param property.value (required) global property value.
   * @param property.immutable (required) If set to TRUE these properties have higher priority
   *                           than mutable ones and also they cannot be changed (only removed).
   */
  @Cordova({ sync: true })
  setGlobalEventProperty(property: SmartlookGlobalEventProperty): void {
    return;
  }

  /**
   * Remove property from global event properties.
   *
   * @param property SmartlookGlobalEventPropertyKey object.
   * @param property.key (required) Global property key.
   */
  @Cordova({ sync: true })
  removeGlobalEventProperty(property: SmartlookGlobalEventPropertyKey): void {
    return;
  }

  /**
   * Remove all properties from global event properties.
   */
  @Cordova({ sync: true })
  removeAllGlobalEventProperties(): void {
    return;
  }

  /**
   * Possibility to manually set referrer and source of the installation visible in dashboard
   * and accessible via filters.
   *
   * @param referrer SmartlookReferrer object.
   * @param referrer.referrer (required) Desired referrer value.
   * @param referrer.source (required) Desired source, i.e. com.android.vending or com.amazon.venezia.
   */
  @Cordova({ sync: true })
  setReferrer(referrer: SmartlookReferrer): void {
    return;
  }

  /**
   * Obtain session URL leading to our dashboard.
   *
   * @param smartlookDashboardSessionUrl SmartlookDashboardSessionUrl object.
   * @param smartlookDashboardSessionUrl.withCurrentTimestamp If set to TRUE record will start at current timestamp.
   * @returns {Promise<string>} Returns a promise with dashboard session URL string.
   */
  @Cordova()
  getDashboardSessionUrl(smartlookDashboardSessionUrl: SmartlookDashboardSessionUrl): Promise<string> {
    return;
  }

  /**
   * Obtain visitor URL leading to our dashboard.
   *
   * @returns {Promise<string>} Returns a promise with dashboard visitor URL string.
   */
  @Cordova()
  getDashboardVisitorUrl(): Promise<string> {
    return;
  }

  /**
   * Integration listener can be used to obtain dashboard URL for current session and visitor.
   * These URLs can be propagated to various analytic tools/SDKs.
   *
   * @param integrationListener SmartlookIntegrationListener object.
   * @param integrationListener.onSessionReady Called when dashboard session URL is ready. Note that this URL can be accesed only by user
   * that has access to Smartlook dashboard (it is not public share link).
   * @param integrationListener.onVisitorReady Called when dashboard visitor URL is ready. Note that this URL can be accesed only by user
   * that has access to Smartlook dashboard (it is not public share link).
   */
  @Cordova({ sync: true })
  registerIntegrationListener(integrationListener: SmartlookIntegrationListener): void {
    return;
  }

  /**
   * By changing rendering mode you can adjust the way we render the application for recordings.
   *
   * @param options.renderingMode Mode defining the video output of recording. Curently only
   *                              SmartlookRenderingMode.NO_RENDERING() and SmartlookRenderingMode.NATIVE() available.
   * @param renderingMode
   */
  @Cordova({ sync: true })
  setRenderingMode(renderingMode: SmartlookRenderingMode): void {
    return;
  }

  /**
   * Unregister Integration listener (@see registerIntegrationListener())
   */
  @Cordova({ sync: true })
  unregisterIntegrationListener(): void {
    return;
  }
}
