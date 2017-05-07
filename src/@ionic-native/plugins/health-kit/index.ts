import { Plugin, Cordova, IonicNativePlugin  } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface HealthKitOptions {
  activityType?: string; // HKWorkoutActivityType constant (https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType)
  aggregation?: string; // 'hour', 'week', 'year' or 'day', default 'day'
  amount?: number;
  correlationType?: string;
  date?: any;
  distance?: number;
  distanceUnit?: string; // probably useful with the former param
  duration?: number;  // in seconds, optional, use either this or endDate
  endDate?: any;
  energy?: number;
  energyUnit?: string; // J|cal|kcal
  extraData?: any;
  metadata?: any;
  quantityType?: string;
  readTypes?: any;
  requestWritePermission?: boolean;
  samples?: any;
  sampleType?: string;
  startDate?: any;
  unit?: string; // m|cm|mm|in|ft
  requestReadPermission?: boolean;
  writeTypes?: any;
}

/**
 * @name Health Kit
 * @description
 * The HealthKit plugin allows you to read data from and write data to the iOS 8+ HealthKit framework.
 * Any data saved shows up in the iOS Health app and is available for other iOS apps.
 *
 * @usage
 * ```typescript
 * import { HealthKit } from '@ionic-native/health-kit';
 *
 *
 * constructor(private healthKit: HealthKit) { }
 *
 * ...
 * ```
 *
 * @interfaces
 * HealthKitOptions
 */
@Plugin({
  pluginName: 'HealthKit',
  plugin: 'com.telerik.plugins.healthkit',
  pluginRef: 'window.plugins.healthkit',
  repo: 'https://github.com/Telerik-Verified-Plugins/HealthKit',
  platforms: ['iOS']
})
@Injectable()
export class HealthKit extends IonicNativePlugin {

  /**
 * Check if HealthKit is supported (iOS8+, not on iPad)
 * @returns {Promise<any>}
 */
  @Cordova()
  available(): Promise<any> { return; }

  /**
 * Pass in a type and get back on of undetermined | denied | authorized
 * @param options {HealthKitOptions}
 */
  @Cordova({ sync: true })
  checkAuthStatus(options: HealthKitOptions): void { }

  /**
 * Ask some or all permissions up front
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  requestAuthorization(options: HealthKitOptions): Promise<any> { return; }

  /**
 * Formatted as yyyy-MM-dd
 * @returns {Promise<any>}
 */
  @Cordova()
  readDateOfBirth(): Promise<any> { return; }

  /**
 * Output = male|female|other|unknown
 * @returns {Promise<any>}
 */
  @Cordova()
  readGender(): Promise<any> { return; }

  /**
 * Output = A+|A-|B+|B-|AB+|AB-|O+|O-|unknown
 * @returns {Promise<any>}
 */
  @Cordova()
  readBloodType(): Promise<any> { return; }

  /**
 * Output = I|II|III|IV|V|VI|unknown
 * @returns {Promise<any>}
 */
  @Cordova()
  readFitzpatrickSkinType(): Promise<any> { return; }

  /**
 * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone) and amount
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  saveWeight(options: HealthKitOptions): Promise<any> { return; }

  /**
 * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone)
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  readWeight(options: HealthKitOptions): Promise<any> { return; }

  /**
 * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot) and amount
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  saveHeight(options: HealthKitOptions): Promise<any> { return; }

  /**
 * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot)
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  readHeight(options: HealthKitOptions): Promise<any> { return; }

  /**
 * no params yet, so this will return all workouts ever of any type
 * @returns {Promise<any>}
 */
  @Cordova()
  findWorkouts(): Promise<any> { return; }

  /**
 *
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  saveWorkout(options: HealthKitOptions): Promise<any> { return; }

  /**
 *
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  querySampleType(options: HealthKitOptions): Promise<any> { return; }

  /**
 *
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  querySampleTypeAggregated(options: HealthKitOptions): Promise<any> { return; }

  /**
 *
 * @param options {HealthKitOptions}
 * @returns {Promise<any>}
 */
  @Cordova()
  deleteSamples(options: HealthKitOptions): Promise<any> { return; }

  /**
 *
 * @param options {HealthKitOptions}
 */
  @Cordova({ sync: true })
  monitorSampleType(options: HealthKitOptions): void { }

  /**
 *
 * @param options {HealthKitOptions}
 */
  @Cordova({ sync: true })
  sumQuantityType(options: HealthKitOptions): void { }

  /**
 *
 * @param options {HealthKitOptions}
 */
  @Cordova({ sync: true })
  saveQuantitySample(options: HealthKitOptions): void { }

  /**
 *
 * @param options {HealthKitOptions}
 */
  @Cordova({ sync: true })
  saveCorrelation(options: HealthKitOptions): void { }

  /**
 *
 * @param options {HealthKitOptions}
 */
  @Cordova({ sync: true })
  queryCorrelationType(options: HealthKitOptions): void { }


}
