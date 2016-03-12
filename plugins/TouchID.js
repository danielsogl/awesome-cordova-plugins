function TouchID() {
}

TouchID.prototype.isAvailable = function (successCallback, errorCallback) {
  };

TouchID.prototype.verifyFingerprint = function (message, successCallback, errorCallback) {
  };

TouchID.prototype.verifyFingerprintWithCustomPasswordFallback = function (message, successCallback, errorCallback) {
  };

TouchID.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel, successCallback, errorCallback) {
  };

TouchID.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.touchid = new TouchID();
  return window.plugins.touchid;
};


module.exports = new TouchID();