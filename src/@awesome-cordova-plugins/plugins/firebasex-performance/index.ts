import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name FirebasexPerformance
 * @description
 * Cordova plugin for Firebase Performance Monitoring - part of the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexPerformance } from '@awesome-cordova-plugins/firebasex-performance/ngx';
 *
 * constructor(private firebasexPerformance: FirebasexPerformance) { }
 *
 * ...
 *
 * this.firebasexPerformance.startTrace('my_trace');
 * ```
 */
@Plugin({
  pluginName: 'FirebasexPerformance',
  plugin: 'cordova-plugin-firebasex-performance',
  pluginRef: 'FirebasexPerformance',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-performance',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexPerformance extends AwesomeCordovaNativePlugin {
  /**
   * Starts a custom performance trace. If a trace with the given name already exists, this is a no-op.
   * Call `stopTrace` with the same name to finish the trace and submit it.
   *
   * @param {string} name - unique name for the trace
   * @returns {Promise<any>}
   */
  @Cordova()
  startTrace(name: string): Promise<any> {
    return;
  }

  /**
   * Increments a named counter (metric) on an active trace by 1. The trace must have been
   * previously started with `startTrace`.
   *
   * @param {string} name - the name of the trace
   * @param {string} counterNamed - the name of the counter/metric to increment
   * @returns {Promise<any>}
   */
  @Cordova()
  incrementCounter(name: string, counterNamed: string): Promise<any> {
    return;
  }

  /**
   * Stops an active performance trace and submits it. The trace must have been previously
   * started with `startTrace`.
   *
   * @param {string} name - the name of the trace to stop
   * @returns {Promise<any>}
   */
  @Cordova()
  stopTrace(name: string): Promise<any> {
    return;
  }

  /**
   * Enables or disables Firebase Performance Monitoring data collection. The setting is
   * persisted across app restarts.
   *
   * @param {boolean} enabled
   * @returns {Promise<any>}
   */
  @Cordova()
  setPerformanceCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Returns the current performance data collection enabled state.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isPerformanceCollectionEnabled(): Promise<boolean> {
    return;
  }
}
