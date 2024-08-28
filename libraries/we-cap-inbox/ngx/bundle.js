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

var WECapInbox = /** @class */ (function (_super) {
  tslib.__extends(WECapInbox, _super);
  function WECapInbox() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WECapInbox.prototype.resetNotificationCount = function () {
    return core.cordova(this, 'resetNotificationCount', {}, arguments);
  };
  WECapInbox.prototype.getNotificationCount = function (successCallback, errorCallback) {
    return core.cordova(this, 'getNotificationCount', {}, arguments);
  };
  WECapInbox.prototype.getNotificationList = function (offset, successCallback, errorCallback) {
    return core.cordova(this, 'getNotificationList', {}, arguments);
  };
  WECapInbox.prototype.markRead = function (notificationObject) {
    return core.cordova(this, 'markRead', {}, arguments);
  };
  WECapInbox.prototype.markUnread = function (notificationObject) {
    return core.cordova(this, 'markUnread', {}, arguments);
  };
  WECapInbox.prototype.trackClick = function (notificationObject) {
    return core.cordova(this, 'trackClick', {}, arguments);
  };
  WECapInbox.prototype.trackView = function (notificationObject) {
    return core.cordova(this, 'trackView', {}, arguments);
  };
  WECapInbox.prototype.markDelete = function (notificationObject) {
    return core.cordova(this, 'markDelete', {}, arguments);
  };
  WECapInbox.prototype.readAll = function (notificationList) {
    return core.cordova(this, 'readAll', {}, arguments);
  };
  WECapInbox.prototype.unReadAll = function (notificationList) {
    return core.cordova(this, 'unReadAll', {}, arguments);
  };
  WECapInbox.prototype.deleteAll = function (notificationList) {
    return core.cordova(this, 'deleteAll', {}, arguments);
  };
  WECapInbox.ɵfac = i0__namespace.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WECapInbox,
    deps: null,
    target: i0__namespace.ɵɵFactoryTarget.Injectable,
  });
  WECapInbox.ɵprov = i0__namespace.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0__namespace,
    type: WECapInbox,
  });
  WECapInbox.pluginName = 'WECapInbox';
  WECapInbox.plugin = 'we-notificationinbox-cordova';
  WECapInbox.pluginRef = 'WENotificationInboxPlugin';
  WECapInbox.repo = 'https://github.com/WebEngage/we-ionic-notification-inbox';
  WECapInbox.platforms = ['Android', 'iOS'];
  WECapInbox = tslib.__decorate([], WECapInbox);
  return WECapInbox;
})(core.AwesomeCordovaNativePlugin);
i0__namespace.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0__namespace,
  type: WECapInbox,
  decorators: [
    {
      type: i0.Injectable,
    },
  ],
  propDecorators: {
    resetNotificationCount: [],
    getNotificationCount: [],
    getNotificationList: [],
    markRead: [],
    markUnread: [],
    trackClick: [],
    trackView: [],
    markDelete: [],
    readAll: [],
    unReadAll: [],
    deleteAll: [],
  },
});

exports.WECapInbox = WECapInbox;
