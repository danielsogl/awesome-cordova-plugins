const DEVICE_READY_TIMEOUT = 2000;

export * from './plugins/actionsheet';
export * from './plugins/camera';
export * from './plugins/statusbar';
export * from './plugins/toast';

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
