import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin, checkAvailability  } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
  requestWritePermission?: boolean;
  samples?: any;
  sampleType?: string;
  startDate?: any;
  unit?: string; // m|cm|mm|in|ft
  requestReadPermission?: boolean;

}

/**
 * @name Health Kit
 * @description
 * The HealthKit plugin allows you to read data from and write data to the iOS 8+ HealthKit framework.
 * Any data saved shows up in the iOS Health app and is available for other iOS apps.
 *
 * @usage
 * ```
 * import { HealthKit } from '@ionic-native/health-kit';
 *
 *
 * constructor(private healthKit: HealthKit) { }
 *
 * ...
 * ```
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

  @Cordova()
  available(): void { }

  @Cordova()
  checkAuthStatus(): void { }

  @Cordova()
  requestAuthorization(): void { }

  @Cordova()
  readDateOfBirth(): void { }

  @Cordova()
  readGender(): void { }

  @Cordova()
  readBloodType(): void { }

  @Cordova()
  readFitzpatrickSkinType(): void { }

  @Cordova()
  readWeight(): void { }

  @Cordova()
  saveWeight(): void { }

  @Cordova()
  readHeight(): void { }

  @Cordova()
  saveHeight(): void { }

  @Cordova()
  saveWorkout(): void { }

  @Cordova()
  findWorkouts(): void { }

  @Cordova()
  querySampleType(): void { }

  @Cordova()
  querySampleTypeAggregated(): void { }

  @Cordova()
  sumQuantityType(): void { }

  @Cordova()
  monitorSampleType(): void { }

  @Cordova()
  saveQuantitySample(): void { }

  @Cordova()
  saveCorrelation(): void { }

  @Cordova()
  queryCorrelationType(): void { }

  @Cordova()
  deleteSamples(): void { }


}
