'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k];
                },
              }
        );
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/ _interopNamespaceDefault(i0);

var Webengage = /** @class */ (function (_super) {
  tslib.__extends(Webengage, _super);
  function Webengage() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Webengage.prototype.engage = function (config) {
    return core.cordova(this, 'engage', {}, arguments);
  };
  Webengage.prototype.startGAIDTracking = function () {
    return core.cordova(this, 'startGAIDTracking', {}, arguments);
  };
  Webengage.prototype.options = function (key, value) {
    return core.cordova(this, 'options', {}, arguments);
  };
  Webengage.prototype.track = function (eventName, attributes) {
    return core.cordova(this, 'track', {}, arguments);
  };
  Webengage.prototype.screen = function (screenName, screenData) {
    return core.cordova(this, 'screen', {}, arguments);
  };
  Webengage.ɵfac = i0__namespace.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: Webengage,
    deps: null,
    target: i0__namespace.ɵɵFactoryTarget.Injectable,
  });
  Webengage.ɵprov = i0__namespace.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: Webengage,
  });
  Webengage.pluginName = 'Webengage';
  Webengage.plugin = 'cordova-plugin-webengage';
  Webengage.pluginRef = 'webengage';
  Webengage.repo = 'https://github.com/WebEngage/cordova-plugin';
  Webengage.platforms = ['Android', 'iOS'];
  Webengage = tslib.__decorate([], Webengage);
  return Webengage;
})(core.AwesomeCordovaNativePlugin);
i0__namespace.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0__namespace,
  type: Webengage,
  decorators: [
    {
      type: i0.Injectable,
    },
  ],
  propDecorators: { engage: [], startGAIDTracking: [], options: [], track: [], screen: [] },
});
var WebengageUser = /** @class */ (function (_super) {
  tslib.__extends(WebengageUser, _super);
  function WebengageUser() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageUser.prototype.login = function (userId, jwtToken) {
    return core.cordova(this, 'login', {}, arguments);
  };
  WebengageUser.prototype.setSecureToken = function (userId, jwtToken) {
    return core.cordova(this, 'setSecureToken', {}, arguments);
  };
  WebengageUser.prototype.logout = function () {
    return core.cordova(this, 'logout', {}, arguments);
  };
  WebengageUser.prototype.setAttribute = function (key, value) {
    return core.cordova(this, 'setAttribute', {}, arguments);
  };
  WebengageUser.prototype.setDevicePushOptIn = function (optIn) {
    return core.cordova(this, 'setDevicePushOptIn', {}, arguments);
  };
  WebengageUser.prototype.setUserOptIn = function (channel, optIn) {
    return core.cordova(this, 'setUserOptIn', {}, arguments);
  };
  WebengageUser.prototype.setLocation = function (latitude, longitude) {
    return core.cordova(this, 'setLocation', {}, arguments);
  };
  WebengageUser.ɵfac = i0__namespace.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengageUser,
    deps: null,
    target: i0__namespace.ɵɵFactoryTarget.Injectable,
  });
  WebengageUser.ɵprov = i0__namespace.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengageUser,
  });
  WebengageUser.pluginName = 'Webengage';
  WebengageUser.plugin = 'cordova-plugin-webengage';
  WebengageUser.pluginRef = 'webengage.user';
  WebengageUser = tslib.__decorate([], WebengageUser);
  return WebengageUser;
})(core.AwesomeCordovaNativePlugin);
i0__namespace.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0__namespace,
  type: WebengageUser,
  decorators: [
    {
      type: i0.Injectable,
    },
  ],
  propDecorators: {
    login: [],
    setSecureToken: [],
    logout: [],
    setAttribute: [],
    setDevicePushOptIn: [],
    setUserOptIn: [],
    setLocation: [],
  },
});
var WebengageJwtManager = /** @class */ (function (_super) {
  tslib.__extends(WebengageJwtManager, _super);
  function WebengageJwtManager() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageJwtManager.prototype.tokenInvalidatedCallback = function (callback) {
    return core.cordova(this, 'tokenInvalidatedCallback', {}, arguments);
  };
  WebengageJwtManager.ɵfac = i0__namespace.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengageJwtManager,
    deps: null,
    target: i0__namespace.ɵɵFactoryTarget.Injectable,
  });
  WebengageJwtManager.ɵprov = i0__namespace.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengageJwtManager,
  });
  WebengageJwtManager.pluginName = 'Webengage';
  WebengageJwtManager.plugin = 'cordova-plugin-webengage';
  WebengageJwtManager.pluginRef = 'webengage.jwtManager';
  WebengageJwtManager = tslib.__decorate([], WebengageJwtManager);
  return WebengageJwtManager;
})(core.AwesomeCordovaNativePlugin);
i0__namespace.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0__namespace,
  type: WebengageJwtManager,
  decorators: [
    {
      type: i0.Injectable,
    },
  ],
  propDecorators: { tokenInvalidatedCallback: [] },
});
var WebengagePush = /** @class */ (function (_super) {
  tslib.__extends(WebengagePush, _super);
  function WebengagePush() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengagePush.prototype.onClick = function (callback) {
    return core.cordova(this, 'onClick', {}, arguments);
  };
  WebengagePush.prototype.options = function (key, value) {
    return core.cordova(this, 'options', {}, arguments);
  };
  WebengagePush.ɵfac = i0__namespace.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengagePush,
    deps: null,
    target: i0__namespace.ɵɵFactoryTarget.Injectable,
  });
  WebengagePush.ɵprov = i0__namespace.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengagePush,
  });
  WebengagePush.pluginName = 'Webengage';
  WebengagePush.plugin = 'cordova-plugin-webengage';
  WebengagePush.pluginRef = 'webengage.push';
  WebengagePush = tslib.__decorate([], WebengagePush);
  return WebengagePush;
})(core.AwesomeCordovaNativePlugin);
i0__namespace.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0__namespace,
  type: WebengagePush,
  decorators: [
    {
      type: i0.Injectable,
    },
  ],
  propDecorators: { onClick: [], options: [] },
});
var WebengageNotification = /** @class */ (function (_super) {
  tslib.__extends(WebengageNotification, _super);
  function WebengageNotification() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageNotification.prototype.onShown = function (callback) {
    return core.cordova(this, 'onShown', {}, arguments);
  };
  WebengageNotification.prototype.onPrepared = function (callback) {
    return core.cordova(this, 'onPrepared', {}, arguments);
  };
  WebengageNotification.prototype.onClick = function (callback) {
    return core.cordova(this, 'onClick', {}, arguments);
  };
  WebengageNotification.prototype.onDismiss = function (callback) {
    return core.cordova(this, 'onDismiss', {}, arguments);
  };
  WebengageNotification.prototype.options = function (key, value) {
    return core.cordova(this, 'options', {}, arguments);
  };
  WebengageNotification.ɵfac = i0__namespace.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengageNotification,
    deps: null,
    target: i0__namespace.ɵɵFactoryTarget.Injectable,
  });
  WebengageNotification.ɵprov = i0__namespace.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WebengageNotification,
  });
  WebengageNotification.pluginName = 'Webengage';
  WebengageNotification.plugin = 'cordova-plugin-webengage';
  WebengageNotification.pluginRef = 'webengage.notification';
  WebengageNotification = tslib.__decorate([], WebengageNotification);
  return WebengageNotification;
})(core.AwesomeCordovaNativePlugin);
i0__namespace.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0__namespace,
  type: WebengageNotification,
  decorators: [
    {
      type: i0.Injectable,
    },
  ],
  propDecorators: { onShown: [], onPrepared: [], onClick: [], onDismiss: [], options: [] },
});

exports.Webengage = Webengage;
exports.WebengageJwtManager = WebengageJwtManager;
exports.WebengageNotification = WebengageNotification;
exports.WebengagePush = WebengagePush;
exports.WebengageUser = WebengageUser;
