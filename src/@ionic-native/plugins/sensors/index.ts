import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export const enum TYPE_SENSOR {
  PROXIMITY = 'PROXIMITY',
  ACCELEROMETER = 'ACCELEROMETER',
  GRAVITY = 'GRAVITY',
  GYROSCOPE = 'GYROSCOPE',
  GYROSCOPE_UNCALIBRATED = 'GYROSCOPE_UNCALIBRATED',
  LINEAR_ACCELERATION = 'LINEAR_ACCELERATION',
  ROTATION_VECTOR = 'ROTATION_VECTOR',
  STEP_COUNTER = 'STEP_COUNTER',
  GAME_ROTATION_VECTOR = 'GAME_ROTATION_VECTOR',
  GEOMAGNETIC_ROTATION_VECTOR = 'GEOMAGNETIC_ROTATION_VECTOR',
  MAGNETIC_FIELD = 'MAGNETIC_FIELD',
  MAGNETIC_FIELD_UNCALIBRATED = 'MAGNETIC_FIELD_UNCALIBRATED',
  ORIENTATION = 'ORIENTATION',
  AMBIENT_TEMPERATURE = 'AMBIENT_TEMPERATURE',
  LIGHT = 'LIGHT',
  PRESSURE = 'PRESSURE',
  RELATIVE_HUMIDITY = 'RELATIVE_HUMIDITY',
  TEMPERATURE = 'TEMPERATURE',
}

/**
 * @name Sensors
 * @description
 * This plugin enables sensors on Android devices
 *
 * @usage
 * ```typescript
 * import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
 *
 *
 * constructor(private sensors: Sensors) { }
 *
 * ...
 *
 *
 * this.sensors.enableSensor(TYPE_SENSOR.LIGHT);
 *
 * ```
 */
@Plugin({
  pluginName: 'Sensors',
  plugin: 'https://github.com/fabiorogeriosj/cordova-plugin-sensors.git',
  pluginRef: 'sensors',
  repo: 'https://github.com/fabiorogeriosj/cordova-plugin-sensors.git',
  platforms: ['Android'],
})
@Injectable()
export class Sensors extends IonicNativePlugin {
  /**
   * This function enables the sensor
   * @param {string} TYPE_SENSOR Specify the sensor to enable
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  enableSensor(TYPE_SENSOR: string): Promise<any> {
    return;
  }

  /**
   * This function disables the sensor
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  disableSensor(): Promise<any> {
    return;
  }

  /**
   * This function calls the success callback
   * @return {Promise<any>} Returns sensor state
   */
  @Cordova()
  getState(): Promise<any> {
    return;
  }
}
