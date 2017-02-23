import {Plugin, Cordova} from './plugin';

/**
 * @param: startDate: {type: Date}, start date from which to get data
 * @param: endDate: {type: Date}, end data to which to get the data
 * @param: dataType: {type: String}, the data type to be queried (see below for supported data types)
 */
export interface QueryOptions {
  startDate: Date;
  endDate: Date;
  dataType: string;
  limit?: number;
  ascending?: boolean;
  filtered?: boolean;
}

/**
 * @param: startDate: {type: Date}, start date from which to get data
 * @param: endDate: {type: Date}, end data to which to get the data
 * @param: dataType: {type: String}, the data type to be queried (see below for supported data types)
 * @param: bucket: {type: String}, if specified, aggregation is grouped an array of "buckets" (windows of time),
 * supported values are: 'hour', 'day', 'week', 'month', 'year'
 */
export interface QueryOptionsAggregated {
  startDate: Date;
  endDate: Date;
  dataType: string;
  bucket: string;
}

/**
 * @param: startDate: {type: Date}, start date from which to get data
 * @param: endDate: {type: Date}, end data to which to get the data
 * @param: dataType: {type: a String}, the data type
 * @param: value: {type: a number or an Object}, depending on the actual data type
 * @param: sourceName: {type: String}, the source that produced this data. In iOS this is ignored and
 * set automatically to the name of your app.
 * @param: sourceBundleId: {type: String}, the complete package of the source that produced this data.
 * In Android, if not specified, it's assigned to the package of the App. In iOS this is ignored and
 * set automatically to the bunde id of the app.
 */
export interface StoreOptions {
  startDate: Date;
  endDate: Date;
  dataType: string;
  value: string;
  sourceName: string;
  sourceBundleId: string;
}


export interface HealthData {
  startDate: Date;
  endDate: Date;
  value: string;
  unit: string;
  sourceName: string;
  sourceBundleId: string;
}

/**
 * @name Health
 * @description
 * A plugin that abstracts fitness and health repositories like Apple HealthKit or Google Fit.
 *
 * @usage
 * ```
 * import { Health } from 'ionic-native';
 *
 * ```
 */
@Plugin({
  pluginName: 'Health',
  plugin: 'cordova-plugin-health',
  pluginRef: 'navigator.health',
  repo: 'https://github.com/dariosalvi78/cordova-plugin-health',
  install: ''
})
export class Health {

  /**
   * Tells if either Google Fit or HealthKit are available.
   *
   * @return {Promise<any>} Returns a promise, if available a true is passed, false otherwise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static isAvailable(): Promise<boolean> {
    return;
  };

  /**
   * Checks if recent Google Play Services and Google Fit are installed. If the play services are not installed,
   * or are obsolete, it will show a pop-up suggesting to download them. If Google Fit is not installed,
   * it will open the Play Store at the location of the Google Fit app.
   * The plugin does not wait until the missing packages are installed, it will return immediately.
   * If both Play Services and Google Fit are available, this function just returns without any visible effect.
   *
   * This function is only available on Android.
   *
   * @return successCallback: {type: function()}, called if the function was called
   * errorCallback: {type: function(err)}, called if something went wrong
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static promptInstallFit(): Promise<any> {
    return;
  };

  /**
   * Requests read and write access to a set of data types. It is recommendable to always explain why the app
   * needs access to the data before asking the user to authorize it.
   * This function must be called before using the query and store functions, even if the authorization has already
   * been given at some point in the past.
   *
   * Quirks of requestAuthorization()

   * In Android, it will try to get authorization from the Google Fit APIs.
   * It is necessary that the app's package name and the signing key are registered in the Google API console.
   * In Android, be aware that if the activity is destroyed (e.g. after a rotation) or is put in background,
   * the connection to Google Fit may be lost without any callback. Going through the authorization will ensure that
   * the app is connected again.
   * In Android 6 and over, this function will also ask for some dynamic permissions if needed
   * (e.g. in the case of "distance", it will need access to ACCESS_FINE_LOCATION).
   *
   * @param {Array<String>} datatypes a list of data types you want to be granted access to
   *
   * @return successCallback: {type: function}, called if all OK
   * errorCallback: {type: function(err)}, called if something went wrong,
   * err contains a textual description of the problem

   */
  @Cordova()
  static requestAuthorization(datatypes: Array<string>): Promise<any> {
    return;
  };

  /**
   * Check if the app has authorization to read/write a set of datatypes.
   * This function is similar to requestAuthorization() and has similar quirks.
   *
   * @param {Array<String>} datatypes a list of data types you want to be granted access to
   * @return {type: function(authorized)}, if the argument is true, the app is authorized
   */
  @Cordova()
  static isAuthorized(datatypes: Array<string>): Promise<any> {
    return;
  };

  /**
   * Gets all the data points of a certain data type within a certain time window.
   * Warning: if the time span is big, it can generate long arrays!
   *
   * Quirks of query()
   *
   * In iOS, the amount of datapoints is limited to 1000 by default.
   * You can override this by adding a limit: xxx to your query object.
   * In iOS, datapoints are ordered in an descending fashion (from newer to older).
   * You can revert this behaviour by adding ascending: true to your query object.
   * In Android, it is possible to query for "raw" steps or to select those as filtered by the Google Fit app.
   * In the latter case the query object must contain the field filtered: true.
   * In Google Fit, calories.basal is returned as an average per day, and usually is not available in all days.
   * In Google Fit, calories.active is computed by subtracting the basal calories from the total.
   * As basal energy expenditure, an average is computed from the week before endDate.
   * While Google Fit calculates basal and active calories automatically,
   * HealthKit needs an explicit input from some app.
   * When querying for activities, Google Fit is able to determine some activities automatically
   * (still, walking, running, biking, in vehicle), while HealthKit only relies on the input of
   * the user or of some external app.
   * When querying for activities, calories and distance are also provided in HealthKit (units are kcal and meters) and
   * never in Google Fit.
   * When querying for nutrition, Google Fit always returns all the nutrition elements it has,
   * while HealthKit returns only those that are stored as correlation. To be sure to get all stored the quantities
   * (regardless of they are stored as correlation or not), it's better to query single nutrients.
   * nutrition.vitamin_a is given in micrograms in HealthKit and International Unit in Google Fit.
   * Automatic conversion is not trivial and depends on the actual substance.
   *
   * @param queryOptions
   *
   */
  @Cordova()
  static query(queryOptions: QueryOptions): Promise<any> {
    return;
  };

  /**
   * Gets aggregated data in a certain time window. Usually the sum is returned for the given quantity.
   *
   * Quirks of queryAggregated()
   * In Android, to query for steps as filtered by the Google Fit app, the flag filtered:
   * true must be added into the query object.
   * When querying for activities, calories and distance are provided
   * when available in HealthKit and never in Google Fit.
   * In Android, the start and end dates returned are the date of the first and the last available samples.
   * If no samples are found, start and end may not be set.
   * When bucketing, buckets will include the whole hour / day / month / week / year where start and end times
   * fall into. For example, if your start time is 2016-10-21 10:53:34,
   * the first daily bucket will start at 2016-10-21 00:00:00.
   * Weeks start on Monday.
   * When querying for nutrition, HealthKit returns only those that are stored as correlation.
   * To be sure to get all the stored quantities, it's better to query single nutrients.
   * nutrition.vitamin_a is given in micrograms in HealthKit and International Unit in Google Fit.
   *
   * @param queryOptionsAggregated
   */
  @Cordova()
  static queryAggregated(queryOptionsAggregated: QueryOptionsAggregated): Promise<any> {
    return;
  };

  /**
   * Stores a data point.
   *
   * Quirks of store()
   *
   * Google Fit doesn't allow you to overwrite data points that overlap with others already stored of the same type (see here). At the moment there is no support for update nor delete.
   * In iOS you cannot store the total calories, you need to specify either basal or active. If you use total calories, the active ones will be stored.
   * In Android you can only store active calories, as the basal are estimated automatically. If you store total calories, these will be treated as active.
   * In iOS distance is assumed to be of type WalkingRunning, if you want to explicitly set it to Cycling you need to add the field cycling: true.
   * In iOS storing the sleep activities is not supported at the moment.
   * Storing of nutrients is not supported at the moment.
   * @param storeOptions
   */
  @Cordova()
  static store(storeOptions: StoreOptions): Promise<any> {
    return;
  };

}

