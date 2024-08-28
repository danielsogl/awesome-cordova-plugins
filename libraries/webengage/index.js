var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var WebengageOriginal = /** @class */ (function (_super) {
  __extends(WebengageOriginal, _super);
  function WebengageOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageOriginal.prototype.engage = function (config) {
    return cordova(this, 'engage', {}, arguments);
  };
  WebengageOriginal.prototype.startGAIDTracking = function () {
    return cordova(this, 'startGAIDTracking', {}, arguments);
  };
  WebengageOriginal.prototype.options = function (key, value) {
    return cordova(this, 'options', {}, arguments);
  };
  WebengageOriginal.prototype.track = function (eventName, attributes) {
    return cordova(this, 'track', {}, arguments);
  };
  WebengageOriginal.prototype.screen = function (screenName, screenData) {
    return cordova(this, 'screen', {}, arguments);
  };
  WebengageOriginal.pluginName = 'Webengage';
  WebengageOriginal.plugin = 'cordova-plugin-webengage';
  WebengageOriginal.pluginRef = 'webengage';
  WebengageOriginal.repo = 'https://github.com/WebEngage/cordova-plugin';
  WebengageOriginal.platforms = ['Android', 'iOS'];
  return WebengageOriginal;
})(AwesomeCordovaNativePlugin);
var Webengage = new WebengageOriginal();
export { Webengage };
var WebengageUserOriginal = /** @class */ (function (_super) {
  __extends(WebengageUserOriginal, _super);
  function WebengageUserOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageUserOriginal.prototype.login = function (userId, jwtToken) {
    return cordova(this, 'login', {}, arguments);
  };
  WebengageUserOriginal.prototype.setSecureToken = function (userId, jwtToken) {
    return cordova(this, 'setSecureToken', {}, arguments);
  };
  WebengageUserOriginal.prototype.logout = function () {
    return cordova(this, 'logout', {}, arguments);
  };
  WebengageUserOriginal.prototype.setAttribute = function (key, value) {
    return cordova(this, 'setAttribute', {}, arguments);
  };
  WebengageUserOriginal.prototype.setDevicePushOptIn = function (optIn) {
    return cordova(this, 'setDevicePushOptIn', {}, arguments);
  };
  WebengageUserOriginal.prototype.setUserOptIn = function (channel, optIn) {
    return cordova(this, 'setUserOptIn', {}, arguments);
  };
  WebengageUserOriginal.prototype.setLocation = function (latitude, longitude) {
    return cordova(this, 'setLocation', {}, arguments);
  };
  WebengageUserOriginal.pluginName = 'Webengage';
  WebengageUserOriginal.plugin = 'cordova-plugin-webengage';
  WebengageUserOriginal.pluginRef = 'webengage.user';
  return WebengageUserOriginal;
})(AwesomeCordovaNativePlugin);
var WebengageUser = new WebengageUserOriginal();
export { WebengageUser };
var WebengageJwtManagerOriginal = /** @class */ (function (_super) {
  __extends(WebengageJwtManagerOriginal, _super);
  function WebengageJwtManagerOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageJwtManagerOriginal.prototype.tokenInvalidatedCallback = function (callback) {
    return cordova(this, 'tokenInvalidatedCallback', {}, arguments);
  };
  WebengageJwtManagerOriginal.pluginName = 'Webengage';
  WebengageJwtManagerOriginal.plugin = 'cordova-plugin-webengage';
  WebengageJwtManagerOriginal.pluginRef = 'webengage.jwtManager';
  return WebengageJwtManagerOriginal;
})(AwesomeCordovaNativePlugin);
var WebengageJwtManager = new WebengageJwtManagerOriginal();
export { WebengageJwtManager };
var WebengagePushOriginal = /** @class */ (function (_super) {
  __extends(WebengagePushOriginal, _super);
  function WebengagePushOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengagePushOriginal.prototype.onClick = function (callback) {
    return cordova(this, 'onClick', {}, arguments);
  };
  WebengagePushOriginal.prototype.options = function (key, value) {
    return cordova(this, 'options', {}, arguments);
  };
  WebengagePushOriginal.pluginName = 'Webengage';
  WebengagePushOriginal.plugin = 'cordova-plugin-webengage';
  WebengagePushOriginal.pluginRef = 'webengage.push';
  return WebengagePushOriginal;
})(AwesomeCordovaNativePlugin);
var WebengagePush = new WebengagePushOriginal();
export { WebengagePush };
var WebengageNotificationOriginal = /** @class */ (function (_super) {
  __extends(WebengageNotificationOriginal, _super);
  function WebengageNotificationOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WebengageNotificationOriginal.prototype.onShown = function (callback) {
    return cordova(this, 'onShown', {}, arguments);
  };
  WebengageNotificationOriginal.prototype.onPrepared = function (callback) {
    return cordova(this, 'onPrepared', {}, arguments);
  };
  WebengageNotificationOriginal.prototype.onClick = function (callback) {
    return cordova(this, 'onClick', {}, arguments);
  };
  WebengageNotificationOriginal.prototype.onDismiss = function (callback) {
    return cordova(this, 'onDismiss', {}, arguments);
  };
  WebengageNotificationOriginal.prototype.options = function (key, value) {
    return cordova(this, 'options', {}, arguments);
  };
  WebengageNotificationOriginal.pluginName = 'Webengage';
  WebengageNotificationOriginal.plugin = 'cordova-plugin-webengage';
  WebengageNotificationOriginal.pluginRef = 'webengage.notification';
  return WebengageNotificationOriginal;
})(AwesomeCordovaNativePlugin);
var WebengageNotification = new WebengageNotificationOriginal();
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViZW5nYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBMEI3RCw2QkFBMEI7Ozs7SUFPdkQsMEJBQU0sYUFBQyxNQUFZO0lBU25CLHFDQUFpQjtJQVdqQiwyQkFBTyxhQUFDLEdBQVcsRUFBRSxLQUFVO0lBVy9CLHlCQUFLLGFBQUMsU0FBaUIsRUFBRSxVQUFnQjtJQVl6QywwQkFBTSxhQUFDLFVBQWtCLEVBQUUsVUFBZ0I7Ozs7OztvQkE3RTdDO0VBMkIrQiwwQkFBMEI7U0FBNUMsU0FBUzs7SUFnRWEsaUNBQTBCOzs7O0lBTzNELDZCQUFLLGFBQUMsTUFBYyxFQUFFLFFBQWlCO0lBVXZDLHNDQUFjLGFBQUMsTUFBYyxFQUFFLFFBQWdCO0lBUy9DLDhCQUFNO0lBV04sb0NBQVksYUFBQyxHQUFXLEVBQUUsS0FBVTtJQVVwQywwQ0FBa0IsYUFBQyxLQUFjO0lBV2pDLG9DQUFZLGFBQUMsT0FBZSxFQUFFLEtBQVU7SUFXeEMsbUNBQVcsYUFBQyxRQUFnQixFQUFFLFNBQWlCOzs7O3dCQWhLakQ7RUEyRm1DLDBCQUEwQjtTQUFoRCxhQUFhOztJQW1GZSx1Q0FBMEI7Ozs7SUFPakUsc0RBQXdCLGFBQUMsUUFBYTs7Ozs4QkFyTHhDO0VBOEt5QywwQkFBMEI7U0FBdEQsbUJBQW1COztJQXFCRyxpQ0FBMEI7Ozs7SUFPM0QsK0JBQU8sYUFBQyxRQUFhO0lBV3JCLCtCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7d0JBck5qQztFQW1NbUMsMEJBQTBCO1NBQWhELGFBQWE7O0lBZ0NpQix5Q0FBMEI7Ozs7SUFPbkUsdUNBQU8sYUFBQyxRQUFhO0lBVXJCLDBDQUFVLGFBQUMsUUFBYTtJQVV4Qix1Q0FBTyxhQUFDLFFBQWE7SUFVckIseUNBQVMsYUFBQyxRQUFhO0lBV3ZCLHVDQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7Z0NBblJqQztFQW1PMkMsMEJBQTBCO1NBQXhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgV2ViZW5nYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEF3ZXNvbWUgQ29yZG92YSBQbHVnaW5zIHdyYXBwZXIgdGhhdCB3cmFwcyBXZWJlbmdhZ2UgQ29yZG92YSBwbHVnaW4gZm9yIEFuZHJvaWQgYW5kIGlPU1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJlbmdhZ2UsIFdlYmVuZ2FnZVVzZXIsIFdlYmVuZ2FnZVB1c2gsIFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiwgV2ViZW5nYWdlSnd0TWFuYWdlciAgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2ViZW5nYWdlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViZW5nYWdlOiBXZWJlbmdhZ2UsIHByaXZhdGUgd2ViZW5nYWdlVXNlcjogV2ViZW5nYWdlVXNlciwgcHJpdmF0ZSB3ZWJlbmdhZ2VQdXNoOiBXZWJlbmdhZ2VQdXNoLCBwcml2YXRlIHdlYmVuZ2FnZU5vdGlmaWNhdGlvbjogV2ViZW5nYWdlTm90aWZpY2F0aW9uICkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy53ZWJlbmdhZ2UuZW5nYWdlKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1dlYkVuZ2FnZS9jb3Jkb3ZhLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBXZWJFbmdhZ2UgU0RLXG4gICAqIEBwYXJhbSB7YW55fSBbY29uZmlnXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmdhZ2UoY29uZmlnPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIFRyYWNraW5nIEdvb2dsZSBBZHZlcnRpc2luZyBJRFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydEdBSURUcmFja2luZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFdlYkVuZ2FnZSBTREsgY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHthbnl9IFthdHRyaWJ1dGVzXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZywgYXR0cmlidXRlcz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBzY3JlZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0gc2NyZWVuTmFtZVxuICAgKiBAcGFyYW0ge2FueX0gW3NjcmVlbkRhdGFdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjcmVlbihzY3JlZW5OYW1lOiBzdHJpbmcsIHNjcmVlbkRhdGE/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UudXNlcicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVVzZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgaW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbih1c2VySWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgaW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTZWN1cmVUb2tlbih1c2VySWQ6IHN0cmluZywgand0VG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgdXNlciBvdXRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBhdHRyaWJ1dGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QXR0cmlidXRlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBEZXZpY2Ugb3B0SW5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRJblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXREZXZpY2VQdXNoT3B0SW4ob3B0SW46IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYXR0cmlidXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFubmVsXG4gICAqIEBwYXJhbSB7YW55fSBvcHRJblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRVc2VyT3B0SW4oY2hhbm5lbDogc3RyaW5nLCBvcHRJbjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1c2VyIGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXRpdHVkZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9uZ2l0dWRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldExvY2F0aW9uKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLmp3dE1hbmFnZXInLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VKd3RNYW5hZ2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgSnd0IHRva2VuIGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRva2VuSW52YWxpZGF0ZWRDYWxsYmFjayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnB1c2gnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgcHVzaCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25DbGljayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBwdXNoIG5vdGlmaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2Uubm90aWZpY2F0aW9uJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlTm90aWZpY2F0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBzaG93blxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25TaG93bihjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCBiZWZvcmUgYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIHNob3duXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvblByZXBhcmVkKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQ2xpY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgZGlzbWlzc2VkXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkRpc21pc3MoY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgaW4tYXBwIG5vdGlmaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
