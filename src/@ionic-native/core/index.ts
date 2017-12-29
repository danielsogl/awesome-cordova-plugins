import { checkReady } from './bootstrap';

export { IonicNativePlugin } from './ionic-native-plugin';

// Decorators
export { checkAvailability, instanceAvailability, wrap, getPromise } from './decorators/common';
export * from './decorators/cordova';
export * from './decorators/cordova-function-override';
export * from './decorators/cordova-instance';
export * from './decorators/cordova-property';
export * from './decorators/instance-property';
export * from './decorators/interfaces';

checkReady();
