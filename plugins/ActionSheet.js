function ActionSheet() {
}

ActionSheet.prototype.show = function (options, successCallback, errorCallback) {
  };

ActionSheet.prototype.hide = function (options, successCallback, errorCallback) {
  };

ActionSheet.prototype.ANDROID_THEMES = {
  THEME_TRADITIONAL          : 1, // default
  THEME_HOLO_DARK            : 2,
  THEME_HOLO_LIGHT           : 3,
  THEME_DEVICE_DEFAULT_DARK  : 4,
  THEME_DEVICE_DEFAULT_LIGHT : 5
};

ActionSheet.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.actionsheet = new ActionSheet();

  return window.plugins.actionsheet;
};


module.exports = new ActionSheet();