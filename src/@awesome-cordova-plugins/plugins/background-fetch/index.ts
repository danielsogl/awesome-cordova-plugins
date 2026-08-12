import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

/**
 * Authorization status of the Background Fetch API. Returned by `BackgroundFetch#configure` and `BackgroundFetch#status`.
 *
 * @since 7.0.0
 */
export enum BackgroundFetchStatus {
  /**
   * Background fetch updates are unavailable and the user cannot enable them again.
   * For example, this status can occur when parental controls are in effect for the current user.
   */
  STATUS_RESTRICTED = 0,
  /**
   * The user explicitly disabled background behavior for this app or for the whole system.
   */
  STATUS_DENIED = 1,
  /**
   * Background fetch is available and enabled.
   */
  STATUS_AVAILABLE = 2,
}

/**
 * [Android only] Network type constraint for scheduled tasks. Used with `BackgroundFetchConfig#requiredNetworkType`
 * and `BackgroundFetchTaskConfig#requiredNetworkType`.
 *
 * @since 7.0.0
 */
export enum BackgroundFetchNetworkType {
  /**
   * No network constraint. The task will run regardless of network state.
   */
  NONE = 0,
  /**
   * The task requires any active network connection.
   */
  ANY = 1,
  /**
   * The task requires an unmetered (e.g. Wi-Fi) network connection.
   */
  UNMETERED = 2,
  /**
   * The task requires a non-roaming network connection.
   */
  NOT_ROAMING = 3,
  /**
   * The task requires a cellular (mobile data) network connection.
   */
  CELLULAR = 4,
}

/**
 * Configuration properties shared by both `BackgroundFetchConfig` and `BackgroundFetchTaskConfig`.
 *
 * Aside from `stopOnTerminate`, all properties are Android-only. iOS manages background execution
 * through its own system-controlled Background Fetch mechanism and does not support these constraints.
 */
export interface BackgroundFetchAbstractConfig {
  /**
   * Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
   */
  stopOnTerminate?: boolean;

  /**
   * [Android only] Set `true` to initiate background-fetch events when the device is rebooted. Defaults to `false`.
   * NOTE: `startOnBoot` requires `stopOnTerminate: false`.
   *
   * @since 7.0.0
   */
  startOnBoot?: boolean;

  /**
   * [Android only] Set `true` to enable the Headless mechanism for handling fetch events after app termination.
   * Defaults to `false`. NOTE: Requires `stopOnTerminate: false`.
   *
   * @since 7.0.0
   */
  enableHeadless?: boolean;

  /**
   * [Android only] By default, the plugin uses Android's `JobScheduler` when possible and falls back to
   * `AlarmManager` for older devices. Set `true` to always use `AlarmManager` regardless of API level.
   * Defaults to `false`.
   *
   * @since 7.0.0
   */
  forceAlarmManager?: boolean;

  /**
   * [Android only] Specify the kind of network connectivity required to run this task. Defaults to
   * `BackgroundFetchNetworkType.NONE`.
   *
   * @since 7.0.0
   */
  requiredNetworkType?: BackgroundFetchNetworkType;

  /**
   * [Android only] Set `true` to require the device's battery level to be above the "low battery" threshold
   * before running this task. Defaults to `false`.
   *
   * @since 7.0.0
   */
  requiresBatteryNotLow?: boolean;

  /**
   * [Android only] Set `true` to require the device's available storage to be above the "low storage"
   * threshold before running this task. Defaults to `false`.
   *
   * @since 7.0.0
   */
  requiresStorageNotLow?: boolean;

  /**
   * [Android only] Set `true` to require the device to be charging (or connected to permanent power, such
   * as an Android TV device) before running this task. Defaults to `false`.
   *
   * @since 7.0.0
   */
  requiresCharging?: boolean;

  /**
   * [Android only] Set `true` to require the device to be idle (not actively used) before running this task.
   * Defaults to `false`.
   *
   * @since 7.0.0
   */
  requiresDeviceIdle?: boolean;
}

export interface BackgroundFetchConfig extends BackgroundFetchAbstractConfig {
  /**
   * The minimum interval in **minutes** between background-fetch events. Defaults to `15` minutes. The
   * minimum allowed value is `15` minutes.
   *
   * NOTE: The OS does not guarantee fetch events will fire at exactly this interval. iOS adjusts the
   * interval based on usage patterns and system conditions. This value is a *minimum*, not a schedule.
   *
   * @since 7.0.0
   */
  minimumFetchInterval?: number;
}

/**
 * Configuration for a custom scheduled task, provided to `BackgroundFetch#scheduleTask`.
 *
 * @since 7.0.0
 */
export interface BackgroundFetchTaskConfig extends BackgroundFetchAbstractConfig {
  /**
   * A unique identifier for this task. Use the same `taskId` with `BackgroundFetch#finish` to signal
   * completion and with `BackgroundFetch#stopTask` to cancel it. Use reverse-domain notation to avoid
   * collisions (e.g. `'com.foo.sync'`).
   */
  taskId: string;

  /**
   * The minimum delay in **milliseconds** before this task runs.
   *
   * NOTE: On iOS, the system may delay the task beyond this value depending on device conditions. On
   * Android, `JobScheduler` treats this as a minimum delay.
   */
  delay: number;

  /**
   * Set `true` to schedule a repeating task. Defaults to `false` (one-shot).
   */
  periodic?: boolean;

  /**
   * [iOS only] Set `true` to require a network connection before running this task. On Android, use
   * `requiredNetworkType` instead.
   */
  requiresNetworkConnectivity?: boolean;
}

/**
 * @name Background Fetch
 * @description
 * Cross-platform Background Fetch implementation. This plugin will execute your provided callbackFn
 * whenever a background-fetch event occurs.
 *
 * ### iOS
 * There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the
 * most frequent possible value -- iOS determines the rate automatically based upon device usage and
 * time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is
 * presumed to be sleeping).
 *
 * ### Android
 * Uses `JobScheduler` (API 21+) or `AlarmManager` to schedule periodic callbacks. Additional constraints
 * (network, charging, idle) can be set via `BackgroundFetchConfig`.
 *
 * For more detail, please see https://github.com/transistorsoft/cordova-plugin-background-fetch
 * @usage
 *
 * ```typescript
 * import { BackgroundFetch, BackgroundFetchConfig } from '@awesome-cordova-plugins/background-fetch/ngx';
 *
 *
 * constructor(private backgroundFetch: BackgroundFetch) {
 *
 *   const config: BackgroundFetchConfig = {
 *     minimumFetchInterval: 15,
 *     stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
 *   }
 *
 *   backgroundFetch.configure(config, (taskId: string) => {
 *
 *          console.log('Background Fetch event received', taskId);
 *
 *          this.backgroundFetch.finish(taskId);
 *
 *   }, (taskId: string) => {
 *          // OS has signalled that remaining background time is about to expire.
 *          console.log('Background Fetch TIMEOUT', taskId);
 *          this.backgroundFetch.finish(taskId);
 *   }).then((status) => {
 *          console.log('Background Fetch initialized', status);
 *   }).catch(e => console.log('Error initializing background fetch', e));
 *
 *   // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
 *   backgroundFetch.start();
 *
 *   // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
 *   backgroundFetch.stop();
 *
 *
 * }
 *
 * ```
 * @interfaces
 * BackgroundFetchConfig
 * BackgroundFetchTaskConfig
 */
@Plugin({
  pluginName: 'BackgroundFetch',
  plugin: 'cordova-plugin-background-fetch',
  pluginRef: 'BackgroundFetch',
  repo: 'https://github.com/transistorsoft/cordova-plugin-background-fetch',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class BackgroundFetch extends AwesomeCordovaNativePlugin {
  /**
   * Configures the plugin's fetch callbackFn.
   *
   * Calling `configure` automatically starts background-fetch (equivalent to calling `#start` immediately
   * after configuration).
   *
   * @param {BackgroundFetchConfig} config Configuration for plugin
   * @param {Function} [onEvent] Callback fired when a background-fetch event is received. The `taskId`
   * string identifies which task fired -- pass it to `#finish` when done. Required as of plugin `7.0.0`.
   * @param {Function} [onTimeout] Callback fired when the OS signals that remaining background time is
   * about to expire. Call `#finish` immediately. Added in plugin `7.0.0`.
   * @returns {Promise<any>}
   */
  @Cordova({
    otherPromise: true,
  })
  configure(
    config: BackgroundFetchConfig,
    onEvent?: (taskId: string) => void,
    onTimeout?: (taskId: string) => void
  ): Promise<any> {
    return;
  }

  /**
   * Start the background-fetch API.
   * Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  start(): Promise<any> {
    return;
  }

  /**
   * Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  stop(): Promise<any> {
    return;
  }

  /**
   * You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.
   *
   * @param taskId
   */
  @Cordova({
    sync: true,
  })
  finish(taskId: string): void {}

  /**
   * Return the status of the background-fetch
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  status(): Promise<any> {
    return;
  }

  /**
   * Schedule a custom one-shot or periodic background task in addition to the default fetch callback
   * registered with `#configure`.
   *
   * Custom tasks fire the same callback registered via `#configure`'s `onEvent` argument, with their
   * unique `taskId`. Use `#finish` with that `taskId` to signal completion.
   *
   * @param {BackgroundFetchTaskConfig} config Task configuration, including a unique `taskId` and a
   * minimum `delay` in milliseconds.
   * @returns {Promise<any>}
   * @since 7.0.0
   */
  @Cordova()
  scheduleTask(config: BackgroundFetchTaskConfig): Promise<any> {
    return;
  }

  /**
   * Cancel a specific task previously scheduled via `#scheduleTask`, identified by its `taskId`.
   *
   * @param taskId The identifier of the scheduled task to stop.
   * @returns {Promise<any>}
   * @since 7.0.0
   */
  @Cordova()
  stopTask(taskId: string): Promise<any> {
    return;
  }
}
