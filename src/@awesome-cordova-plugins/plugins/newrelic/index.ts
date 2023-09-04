import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name newrelic mobile
 * @description
 * This NewRelic plugin collect crashes, network traffic, and other information for hybrid apps using native components.
 *
 * @usage
 * ```typescript
 * import { NewRelic } from "@awesome-cordova-plugins/newrelic/ngx";
 *
 *
 * constructor(private newrelic: newrelic) { }
 *
 * ...
 *
 *
 * NewRelic.startInteraction('Getting Data From Server')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'NewRelic',
  plugin: 'newrelic-cordova-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'NewRelic', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/newrelic/newrelic-cordova-plugin', // the github repository URL for the plugin
  install:
    'ionic cordova plugin add https://github.com/newrelic/newrelic-cordova-plugin.git --variable IOS_APP_TOKEN="{ios-app-token}" --variable ANDROID_APP_TOKEN="{android-app-token}"', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['IOS_APP_TOKEN', 'ANDROID_APP_TOKEN'], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class NewRelic extends AwesomeCordovaNativePlugin {
  /**
   * Sets a custom user identifier value to associate mobile user
   * @param {string} userId The user identifier string.
   */
  @Cordova({
    sync: true,
  })
  setUserId(userId: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Creates a custom attribute with a specified name and value.
   * When called, it overwrites its previous value and type.
   * The created attribute is shared by multiple Mobile event types.
   * @param {string} attributeName Name of the attribute.
   * @param {number} value Value of the attribute.
   */
  @Cordova({
    sync: true,
  })
  setAttribute(name: string, value: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Remove a custom attribute with a specified name and value.
   * When called, it removes the attribute specified by the name string.
   * The removed attribute is shared by multiple Mobile event types.
   * @param {string} name Name of the attribute.
   */
  @Cordova({
    sync: true,
  })
  removeAttribute(name: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Creates and records a MobileBreadcrumb event.
   * @param {string} eventName The name you want to give to a breadcrumb event.
   * @param {Map<string, any>} attributes A map that includes a list of attributes.
   */
  @Cordova({
    sync: true,
  })
  recordBreadcrumb(name: string, eventAttributes: Map<string, any>): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Creates and records a custom event, for use in New Relic Insights.
   * The event includes a list of attributes, specified as a map.
   * @param {string} eventType The type of event.
   * @param {string} eventName The name of the event.
   * @param {Map<string, any>} attributes A map that includes a list of attributes.
   */
  @Cordova({
    sync: true,
  })
  recordCustomEvent(eventType: string, eventName: string, eventAttributes: Map<string, any>): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Track a method as an interaction.
   * @param {string} actionName The name of the action.
   * @param {function} cb A success callback function.
   * @returns {Promise} A promise containing the interactionId.
   */
  @Cordova({
    sync: true,
  })
  startInteraction(name: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * End an interaction
   * @param {string} interactionId The string ID for the interaction you want to end. This string is returned when you use startInteraction().
   */

  @Cordova({
    sync: true,
  })
  endInteraction(name: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Throws a demo run-time exception to test New Relic crash reporting.
   * @param {string} message An optional argument attached to the exception.
   */
  @Cordova({
    sync: true,
  })
  crashNow(message: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Returns the current session ID as a parameter to the successful callback function.
   * This method is useful for consolidating monitoring of app data (not just New Relic data) based on a single session definition and identifier.
   * @param {function} cb A success callback function.
   * @returns {Promise} A promise containing the current session ID.
   */
  @Cordova({
    sync: true,
  })
  currentSessionId(name: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Increments the count of an attribute with a specified name.
   * When called, it overwrites its previous value and type each time.
   * If attribute does not exist, it creates an attribute with a value of 1.
   * The incremented attribute is shared by multiple Mobile event types.
   * @param {string} name The name of the attribute.
   * @param {number} value Optional argument that increments the attribute by this value.
   */
  @Cordova({
    sync: true,
  })
  incrementAttribute(name: string, value: any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   *
   * @param {string} name The name for the custom metric.
   * @param {string} category The metric category name.
   * @param {number} value Optional. The value of the metric. Value should be a non-zero positive number.
   * @param {string} countUnit Optional (but requires value and valueUnit to be set). Unit of measurement for the metric count. Supported values are 'PERCENT', 'BYTES', 'SECONDS', 'BYTES_PER_SECOND', or 'OPERATIONS'.
   * @param {string} valueUnit Optional (but requires value and countUnit to be set). Unit of measurement for the metric value. Supported values are 'PERCENT', 'BYTES', 'SECONDS', 'BYTES_PER_SECOND', or 'OPERATIONS'.
   */
  @Cordova({
    sync: true,
  })
  recordMetric(name: string, category: any, value: Number, countUnit: string, valueUnit: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Removes all attributes from the session..
   */
  @Cordova({
    sync: true,
  })
  removeAllAttributes(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Sets the maximum size of the event pool stored in memory until the next harvest cycle.
   * When the pool size limit is reached, the agent will start sampling events, discarding some new and old, until the pool of events is sent in the next harvest cycle.
   * Default is a maximum of 1000 events per event harvest cycle.
   * @param {number} maxPoolSize The maximum number of events per harvest cycle.
   */
  @Cordova({
    sync: true,
  })
  setMaxEventPoolSize(maxPoolSize: Number): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Sets the event harvest cycle length.
   * Default is 600 seconds (10 minutes).
   * Minimum value cannot be less than 60 seconds.
   * Maximum value should not be greater than 600 seconds.
   * @param {number} maxBufferTimeInSeconds The maximum time (in seconds) that the agent should store events in memory.
   */
  @Cordova({
    sync: true,
  })
  setMaxEventBufferTime(maxBufferTimeInSeconds: Number): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * FOR ANDROID ONLY.
   * Enable or disable collection of event data.
   * @param {boolean} enabled Boolean value for enabling analytics events.
   */
  @Cordova({
    sync: true,
  })
  analyticsEventEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Enable or disable reporting sucessful HTTP request to the MobileRequest event type.
   * @param {boolean} enabled Boolean value for enable successful HTTP requests.
   */
  @Cordova({
    sync: true,
  })
  networkRequestEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
   * @param {boolean} enabled Boolean value for enabling network request errors.
   */
  @Cordova({
    sync: true,
  })
  networkErrorRequestEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Enable or disable capture of HTTP response bodies for HTTP error traces, and MobileRequestError events.
   * @param {boolean} enabled Boolean value for enabling HTTP response bodies.
   */
  @Cordova({
    sync: true,
  })
  httpRequestBodyCaptureEnabled(enabled: Boolean): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   *
   * @param {string} url The URL of the request.
   * @param {string} method The HTTP method used, such as GET or POST.
   * @param {number} status The statusCode of the HTTP response, such as 200 for OK.
   * @param {number} startTime The start time of the request in milliseconds since the epoch.
   * @param {number} endTime The end time of the request in milliseconds since the epoch.
   * @param {number} bytesSent The number of bytes sent in the request.
   * @param {number} bytesReceived The number of bytes received in the response.
   * @param {string} body Optional. The response body of the HTTP response. The response body will be truncated and included in an HTTP Error metric if the HTTP transaction is an error.
   */
  @Cordova({
    sync: true,
  })
  noticeHttpTransaction(
    url: string,
    method: string,
    status: Number,
    startTime: Number,
    endTime: Number,
    bytesSent: Number,
    bytesReceived: Number,
    body: string
  ): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Records network failures.
   * If a network request fails, use this method to record details about the failure.
   * In most cases, place this call inside exception handlers.
   * @param {string} url The URL of the request.
   * @param {string} httpMethod The HTTP method used, such as GET or POST.
   * @param {number} startTime The start time of the request in milliseconds since the epoch.
   * @param {number} endTime The end time of the request in milliseconds since the epoch.
   * @param {string} failure The name of the network failure. Possible values are 'Unknown', 'BadURL', 'TimedOut', 'CannotConnectToHost', 'DNSLookupFailed', 'BadServerResponse', 'SecureConnectionFailed'.
   */
  @Cordova({
    sync: true,
  })
  noticeNetworkFailure(url: string, method: string, startTime: Number, endTime: Number, failure: string): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Records JavaScript errors for ionic.
   * @param {Error} err The error to report.
   */
  @Cordova({
    sync: true,
  })
  recordError(err: Error): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Shut down the agent within the current application lifecycle during runtime.
   */
  @Cordova({
    sync: true,
  })
  shutdown(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
