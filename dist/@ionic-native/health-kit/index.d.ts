import { IonicNativePlugin } from '@ionic-native/core';
export interface HealthKitOptions {
    /**
    * HKWorkoutActivityType constant
    * Read more here: https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType
    */
    activityType?: string;
    /**
    * 'hour', 'week', 'year' or 'day', default 'day'
    */
    aggregation?: string;
    /**
    *
    */
    amount?: number;
    /**
    *
    */
    correlationType?: string;
    /**
    *
    */
    date?: any;
    /**
    *
    */
    distance?: number;
    /**
    * probably useful with the former param
    */
    distanceUnit?: string;
    /**
    * in seconds, optional, use either this or endDate
    */
    duration?: number;
    /**
    *
    */
    endDate?: any;
    /**
    *
    */
    energy?: number;
    /**
    * J|cal|kcal
    */
    energyUnit?: string;
    /**
    *
    */
    extraData?: any;
    /**
    *
    */
    metadata?: any;
    /**
    *
    */
    quantityType?: string;
    /**
    *
    */
    readTypes?: any;
    /**
    *
    */
    requestWritePermission?: boolean;
    /**
    *
    */
    samples?: any;
    /**
    *
    */
    sampleType?: string;
    /**
    *
    */
    startDate?: any;
    /**
    * m|cm|mm|in|ft
    */
    unit?: string;
    /**
    *
    */
    requestReadPermission?: boolean;
    /**
    *
    */
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
export declare class HealthKit extends IonicNativePlugin {
    /**
   * Check if HealthKit is supported (iOS8+, not on iPad)
   * @returns {Promise<any>}
   */
    available(): Promise<any>;
    /**
   * Pass in a type and get back on of undetermined | denied | authorized
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    checkAuthStatus(options: HealthKitOptions): Promise<any>;
    /**
   * Ask some or all permissions up front
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    requestAuthorization(options: HealthKitOptions): Promise<any>;
    /**
   * Formatted as yyyy-MM-dd
   * @returns {Promise<any>}
   */
    readDateOfBirth(): Promise<any>;
    /**
   * Output = male|female|other|unknown
   * @returns {Promise<any>}
   */
    readGender(): Promise<any>;
    /**
   * Output = A+|A-|B+|B-|AB+|AB-|O+|O-|unknown
   * @returns {Promise<any>}
   */
    readBloodType(): Promise<any>;
    /**
   * Output = I|II|III|IV|V|VI|unknown
   * @returns {Promise<any>}
   */
    readFitzpatrickSkinType(): Promise<any>;
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveWeight(options: HealthKitOptions): Promise<any>;
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    readWeight(options: HealthKitOptions): Promise<any>;
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveHeight(options: HealthKitOptions): Promise<any>;
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    readHeight(options: HealthKitOptions): Promise<any>;
    /**
   * no params yet, so this will return all workouts ever of any type
   * @returns {Promise<any>}
   */
    findWorkouts(): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveWorkout(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    querySampleType(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    querySampleTypeAggregated(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    deleteSamples(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    monitorSampleType(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    sumQuantityType(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveQuantitySample(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    saveCorrelation(options: HealthKitOptions): Promise<any>;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    queryCorrelationType(options: HealthKitOptions): Promise<any>;
}
