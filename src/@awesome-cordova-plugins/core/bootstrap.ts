export function checkReady() {
  if (typeof process === 'undefined') {
    const win: any = typeof window !== 'undefined' ? window : {};
    const DEVICE_READY_TIMEOUT = 5000;

    // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.
    const before = Date.now();

    let didFireReady = false;
    win.document.addEventListener('deviceready', () => {
      console.log(`Ionic Native: deviceready event fired after ${Date.now() - before} ms`);
      didFireReady = true;
    });

    setTimeout(() => {
      if (!didFireReady && win.cordova) {
        console.warn(
          `Ionic Native: deviceready did not fire within ${DEVICE_READY_TIMEOUT}ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.`
        );
      }
    }, DEVICE_READY_TIMEOUT);
  }
}
