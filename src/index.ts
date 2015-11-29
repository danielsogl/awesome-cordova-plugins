const DEVICE_READY_TIMEOUT = 2000;

export * from './plugins/actionsheet';
export * from './plugins/camera';
export * from './plugins/device';
export * from './plugins/statusbar';
export * from './plugins/toast';


// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
declare var window;

let didFireReady = false;
window.addEventListener('deviceready', function() {
  didFireReady = true;
})

setTimeout(function() {
  if(!didFireReady && window.cordova) {
    console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
  }
}, DEVICE_READY_TIMEOUT);
