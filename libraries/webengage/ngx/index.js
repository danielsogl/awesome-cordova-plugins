import { __decorate, __extends } from 'tslib';
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from '@angular/core';
var Webengage = /** @class */ (function (_super) {
  __extends(Webengage, _super);
  function Webengage() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Webengage.prototype.engage = function (config) {
    return cordova(this, 'engage', {}, arguments);
  };
  Webengage.prototype.startGAIDTracking = function () {
    return cordova(this, 'startGAIDTracking', {}, arguments);
  };
  Webengage.prototype.options = function (key, value) {
    return cordova(this, 'options', {}, arguments);
  };
  Webengage.prototype.track = function (eventName, attributes) {
    return cordova(this, 'track', {}, arguments);
  };
  Webengage.prototype.screen = function (screenName, screenData) {
    return cordova(this, 'screen', {}, arguments);
  };
  Webengage.ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: Webengage,
    deps: null,
    target: i0.ɵɵFactoryTarget.Injectable,
  });
  Webengage.ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: Webengage,
  });
  Webengage.pluginName = 'Webengage';
  Webengage.plugin = 'cordova-plugin-webengage';
  Webengage.pluginRef = 'webengage';
  Webengage.repo = 'https://github.com/WebEngage/cordova-plugin';
  Webengage.platforms = ['Android', 'iOS'];
  Webengage = __decorate([], Webengage);
  return Webengage;
})(AwesomeCordovaNativePlugin);
export { Webengage };
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0,
  type: Webengage,
  decorators: [
    {
      type: Injectable,
    },
  ],
  propDecorators: { engage: [], startGAIDTracking: [], options: [], track: [], screen: [] },
});
var WebengageUser = /** @class */ (function (_super) {
  __extends(WebengageUser, _super);
  function WebengageUser() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageUser.prototype.login = function (userId, jwtToken) {
    return cordova(this, 'login', {}, arguments);
  };
  WebengageUser.prototype.setSecureToken = function (userId, jwtToken) {
    return cordova(this, 'setSecureToken', {}, arguments);
  };
  WebengageUser.prototype.logout = function () {
    return cordova(this, 'logout', {}, arguments);
  };
  WebengageUser.prototype.setAttribute = function (key, value) {
    return cordova(this, 'setAttribute', {}, arguments);
  };
  WebengageUser.prototype.setDevicePushOptIn = function (optIn) {
    return cordova(this, 'setDevicePushOptIn', {}, arguments);
  };
  WebengageUser.prototype.setUserOptIn = function (channel, optIn) {
    return cordova(this, 'setUserOptIn', {}, arguments);
  };
  WebengageUser.prototype.setLocation = function (latitude, longitude) {
    return cordova(this, 'setLocation', {}, arguments);
  };
  WebengageUser.ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengageUser,
    deps: null,
    target: i0.ɵɵFactoryTarget.Injectable,
  });
  WebengageUser.ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengageUser,
  });
  WebengageUser.pluginName = 'Webengage';
  WebengageUser.plugin = 'cordova-plugin-webengage';
  WebengageUser.pluginRef = 'webengage.user';
  WebengageUser = __decorate([], WebengageUser);
  return WebengageUser;
})(AwesomeCordovaNativePlugin);
export { WebengageUser };
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0,
  type: WebengageUser,
  decorators: [
    {
      type: Injectable,
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
  __extends(WebengageJwtManager, _super);
  function WebengageJwtManager() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageJwtManager.prototype.tokenInvalidatedCallback = function (callback) {
    return cordova(this, 'tokenInvalidatedCallback', {}, arguments);
  };
  WebengageJwtManager.ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengageJwtManager,
    deps: null,
    target: i0.ɵɵFactoryTarget.Injectable,
  });
  WebengageJwtManager.ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengageJwtManager,
  });
  WebengageJwtManager.pluginName = 'Webengage';
  WebengageJwtManager.plugin = 'cordova-plugin-webengage';
  WebengageJwtManager.pluginRef = 'webengage.jwtManager';
  WebengageJwtManager = __decorate([], WebengageJwtManager);
  return WebengageJwtManager;
})(AwesomeCordovaNativePlugin);
export { WebengageJwtManager };
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0,
  type: WebengageJwtManager,
  decorators: [
    {
      type: Injectable,
    },
  ],
  propDecorators: { tokenInvalidatedCallback: [] },
});
var WebengagePush = /** @class */ (function (_super) {
  __extends(WebengagePush, _super);
  function WebengagePush() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengagePush.prototype.onClick = function (callback) {
    return cordova(this, 'onClick', {}, arguments);
  };
  WebengagePush.prototype.options = function (key, value) {
    return cordova(this, 'options', {}, arguments);
  };
  WebengagePush.ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengagePush,
    deps: null,
    target: i0.ɵɵFactoryTarget.Injectable,
  });
  WebengagePush.ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengagePush,
  });
  WebengagePush.pluginName = 'Webengage';
  WebengagePush.plugin = 'cordova-plugin-webengage';
  WebengagePush.pluginRef = 'webengage.push';
  WebengagePush = __decorate([], WebengagePush);
  return WebengagePush;
})(AwesomeCordovaNativePlugin);
export { WebengagePush };
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0,
  type: WebengagePush,
  decorators: [
    {
      type: Injectable,
    },
  ],
  propDecorators: { onClick: [], options: [] },
});
var WebengageNotification = /** @class */ (function (_super) {
  __extends(WebengageNotification, _super);
  function WebengageNotification() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageNotification.prototype.onShown = function (callback) {
    return cordova(this, 'onShown', {}, arguments);
  };
  WebengageNotification.prototype.onPrepared = function (callback) {
    return cordova(this, 'onPrepared', {}, arguments);
  };
  WebengageNotification.prototype.onClick = function (callback) {
    return cordova(this, 'onClick', {}, arguments);
  };
  WebengageNotification.prototype.onDismiss = function (callback) {
    return cordova(this, 'onDismiss', {}, arguments);
  };
  WebengageNotification.prototype.options = function (key, value) {
    return cordova(this, 'options', {}, arguments);
  };
  WebengageNotification.ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengageNotification,
    deps: null,
    target: i0.ɵɵFactoryTarget.Injectable,
  });
  WebengageNotification.ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WebengageNotification,
  });
  WebengageNotification.pluginName = 'Webengage';
  WebengageNotification.plugin = 'cordova-plugin-webengage';
  WebengageNotification.pluginRef = 'webengage.notification';
  WebengageNotification = __decorate([], WebengageNotification);
  return WebengageNotification;
})(AwesomeCordovaNativePlugin);
export { WebengageNotification };
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0,
  type: WebengageNotification,
  decorators: [
    {
      type: Injectable,
    },
  ],
  propDecorators: { onShown: [], onPrepared: [], onClick: [], onDismiss: [], options: [] },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViZW5nYWdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUEwQjdELDZCQUEwQjs7OztJQU92RCwwQkFBTSxhQUFDLE1BQVk7SUFTbkIscUNBQWlCO0lBV2pCLDJCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7SUFXL0IseUJBQUssYUFBQyxTQUFpQixFQUFFLFVBQWdCO0lBWXpDLDBCQUFNLGFBQUMsVUFBa0IsRUFBRSxVQUFnQjsyR0FsRGhDLFNBQVM7K0dBQVQsU0FBUzs7Ozs7O0lBQVQsU0FBUyxrQkFBVCxTQUFTO29CQTNCdEI7RUEyQitCLDBCQUEwQjtTQUE1QyxTQUFTOzRGQUFULFNBQVM7a0JBRHJCLFVBQVU7OEJBUVQsTUFBTSxNQVNOLGlCQUFpQixNQVdqQixPQUFPLE1BV1AsS0FBSyxNQVlMLE1BQU07O0lBYzJCLGlDQUEwQjs7OztJQU8zRCw2QkFBSyxhQUFDLE1BQWMsRUFBRSxRQUFpQjtJQVV2QyxzQ0FBYyxhQUFDLE1BQWMsRUFBRSxRQUFnQjtJQVMvQyw4QkFBTTtJQVdOLG9DQUFZLGFBQUMsR0FBVyxFQUFFLEtBQVU7SUFVcEMsMENBQWtCLGFBQUMsS0FBYztJQVdqQyxvQ0FBWSxhQUFDLE9BQWUsRUFBRSxLQUFVO0lBV3hDLG1DQUFXLGFBQUMsUUFBZ0IsRUFBRSxTQUFpQjsrR0FyRXBDLGFBQWE7bUhBQWIsYUFBYTs7OztJQUFiLGFBQWEsa0JBQWIsYUFBYTt3QkEzRjFCO0VBMkZtQywwQkFBMEI7U0FBaEQsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzhCQVFULEtBQUssTUFVTCxjQUFjLE1BU2QsTUFBTSxNQVdOLFlBQVksTUFVWixrQkFBa0IsTUFXbEIsWUFBWSxNQVdaLFdBQVc7O0lBYzRCLHVDQUEwQjs7OztJQU9qRSxzREFBd0IsYUFBQyxRQUFhO3FIQVAzQixtQkFBbUI7eUhBQW5CLG1CQUFtQjs7OztJQUFuQixtQkFBbUIsa0JBQW5CLG1CQUFtQjs4QkE5S2hDO0VBOEt5QywwQkFBMEI7U0FBdEQsbUJBQW1COzRGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVU7OEJBUVQsd0JBQXdCOztJQWNTLGlDQUEwQjs7OztJQU8zRCwrQkFBTyxhQUFDLFFBQWE7SUFXckIsK0JBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTsrR0FsQnBCLGFBQWE7bUhBQWIsYUFBYTs7OztJQUFiLGFBQWEsa0JBQWIsYUFBYTt3QkFuTTFCO0VBbU1tQywwQkFBMEI7U0FBaEQsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzhCQVFULE9BQU8sTUFXUCxPQUFPOztJQWNrQyx5Q0FBMEI7Ozs7SUFPbkUsdUNBQU8sYUFBQyxRQUFhO0lBVXJCLDBDQUFVLGFBQUMsUUFBYTtJQVV4Qix1Q0FBTyxhQUFDLFFBQWE7SUFVckIseUNBQVMsYUFBQyxRQUFhO0lBV3ZCLHVDQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7dUhBaERwQixxQkFBcUI7MkhBQXJCLHFCQUFxQjs7OztJQUFyQixxQkFBcUIsa0JBQXJCLHFCQUFxQjtnQ0FuT2xDO0VBbU8yQywwQkFBMEI7U0FBeEQscUJBQXFCOzRGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVU7OEJBUVQsT0FBTyxNQVVQLFVBQVUsTUFVVixPQUFPLE1BVVAsU0FBUyxNQVdULE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFdlYmVuZ2FnZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBd2Vzb21lIENvcmRvdmEgUGx1Z2lucyB3cmFwcGVyIHRoYXQgd3JhcHMgV2ViZW5nYWdlIENvcmRvdmEgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1NcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViZW5nYWdlLCBXZWJlbmdhZ2VVc2VyLCBXZWJlbmdhZ2VQdXNoLCBXZWJlbmdhZ2VOb3RpZmljYXRpb24sIFdlYmVuZ2FnZUp3dE1hbmFnZXIgIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3dlYmVuZ2FnZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYmVuZ2FnZTogV2ViZW5nYWdlLCBwcml2YXRlIHdlYmVuZ2FnZVVzZXI6IFdlYmVuZ2FnZVVzZXIsIHByaXZhdGUgd2ViZW5nYWdlUHVzaDogV2ViZW5nYWdlUHVzaCwgcHJpdmF0ZSB3ZWJlbmdhZ2VOb3RpZmljYXRpb246IFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMud2ViZW5nYWdlLmVuZ2FnZSgpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9XZWJFbmdhZ2UvY29yZG92YS1wbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgV2ViRW5nYWdlIFNES1xuICAgKiBAcGFyYW0ge2FueX0gW2NvbmZpZ11cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5nYWdlKGNvbmZpZz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBUcmFja2luZyBHb29nbGUgQWR2ZXJ0aXNpbmcgSURcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRHQUlEVHJhY2tpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBXZWJFbmdhZ2UgU0RLIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbYXR0cmlidXRlc11cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2soZXZlbnROYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3Mgc2NyZWVuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHNjcmVlbk5hbWVcbiAgICogQHBhcmFtIHthbnl9IFtzY3JlZW5EYXRhXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY3JlZW4oc2NyZWVuTmFtZTogc3RyaW5nLCBzY3JlZW5EYXRhPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnVzZXInLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VVc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTG9ncyB1c2VyIGluXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4odXNlcklkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9ncyB1c2VyIGluXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2VjdXJlVG9rZW4odXNlcklkOiBzdHJpbmcsIGp3dFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgb3V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYXR0cmlidXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRGV2aWNlIG9wdEluXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0SW5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RGV2aWNlUHVzaE9wdEluKG9wdEluOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1c2VyIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICAgKiBAcGFyYW0ge2FueX0gb3B0SW5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VXNlck9wdEluKGNoYW5uZWw6IHN0cmluZywgb3B0SW46IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBsb2NhdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0aXR1ZGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvbmdpdHVkZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRMb2NhdGlvbihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZS5qd3RNYW5hZ2VyJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlSnd0TWFuYWdlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIEp3dCB0b2tlbiBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0b2tlbkludmFsaWRhdGVkQ2FsbGJhY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZS5wdXNoJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlUHVzaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIHB1c2ggbm90aWZpY2F0aW9uIGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQ2xpY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcHVzaCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLm5vdGlmaWNhdGlvbicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgc2hvd25cbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uU2hvd24oY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgYmVmb3JlIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBzaG93blxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25QcmVwYXJlZChjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkNsaWNrKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIGRpc21pc3NlZFxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25EaXNtaXNzKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGluLWFwcCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
