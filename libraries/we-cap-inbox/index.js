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
var WECapInboxOriginal = /** @class */ (function (_super) {
  __extends(WECapInboxOriginal, _super);
  function WECapInboxOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WECapInboxOriginal.prototype.resetNotificationCount = function () {
    return cordova(this, 'resetNotificationCount', {}, arguments);
  };
  WECapInboxOriginal.prototype.getNotificationCount = function (successCallback, errorCallback) {
    return cordova(this, 'getNotificationCount', {}, arguments);
  };
  WECapInboxOriginal.prototype.getNotificationList = function (offset, successCallback, errorCallback) {
    return cordova(this, 'getNotificationList', {}, arguments);
  };
  WECapInboxOriginal.prototype.markRead = function (notificationObject) {
    return cordova(this, 'markRead', {}, arguments);
  };
  WECapInboxOriginal.prototype.markUnread = function (notificationObject) {
    return cordova(this, 'markUnread', {}, arguments);
  };
  WECapInboxOriginal.prototype.trackClick = function (notificationObject) {
    return cordova(this, 'trackClick', {}, arguments);
  };
  WECapInboxOriginal.prototype.trackView = function (notificationObject) {
    return cordova(this, 'trackView', {}, arguments);
  };
  WECapInboxOriginal.prototype.markDelete = function (notificationObject) {
    return cordova(this, 'markDelete', {}, arguments);
  };
  WECapInboxOriginal.prototype.readAll = function (notificationList) {
    return cordova(this, 'readAll', {}, arguments);
  };
  WECapInboxOriginal.prototype.unReadAll = function (notificationList) {
    return cordova(this, 'unReadAll', {}, arguments);
  };
  WECapInboxOriginal.prototype.deleteAll = function (notificationList) {
    return cordova(this, 'deleteAll', {}, arguments);
  };
  WECapInboxOriginal.pluginName = 'WECapInbox';
  WECapInboxOriginal.plugin = 'we-notificationinbox-cordova';
  WECapInboxOriginal.pluginRef = 'WENotificationInboxPlugin';
  WECapInboxOriginal.repo = 'https://github.com/WebEngage/we-ionic-notification-inbox';
  WECapInboxOriginal.platforms = ['Android', 'iOS'];
  return WECapInboxOriginal;
})(AwesomeCordovaNativePlugin);
var WECapInbox = new WECapInboxOriginal();
export { WECapInbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2UtY2FwLWluYm94L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNkI1RCw4QkFBMEI7Ozs7SUFNeEQsMkNBQXNCO0lBV3RCLHlDQUFvQixhQUNsQixlQUF3QyxFQUN4QyxhQUFzQztJQWF4Qyx3Q0FBbUIsYUFDakIsTUFBeUIsRUFDekIsZUFBOEQsRUFDOUQsYUFBc0M7SUFXeEMsNkJBQVEsYUFBQyxrQkFBOEI7SUFVdkMsK0JBQVUsYUFBQyxrQkFBOEI7SUFVekMsK0JBQVUsYUFBQyxrQkFBOEI7SUFVekMsOEJBQVMsYUFBQyxrQkFBOEI7SUFVeEMsK0JBQVUsYUFBQyxrQkFBOEI7SUFVekMsNEJBQU8sYUFBQyxnQkFBMkI7SUFVbkMsOEJBQVMsYUFBQyxnQkFBMkI7SUFVckMsOEJBQVMsYUFBQyxnQkFBMkI7Ozs7OztxQkFsSnZDO0VBOEJnQywwQkFBMEI7U0FBN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgV0UgQ2FwIEluYm94XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGZ1bmN0aW9uYWxpdGllcyB0byBtYW5hZ2Ugbm90aWZpY2F0aW9ucyBpbiB5b3VyIGFwcC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdFQ2FwSW5ib3ggfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2UtY2FwLWluYm94JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdFQ2FwSW5ib3g6IFdFQ2FwSW5ib3gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMud0VDYXBJbmJveC5nZXROb3RpZmljYXRpb25Db3VudCgpXG4gKiAgIC50aGVuKChjb3VudDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZyhjb3VudCkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXRUNhcEluYm94JyxcbiAgcGx1Z2luOiAnd2Utbm90aWZpY2F0aW9uaW5ib3gtY29yZG92YScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdXRU5vdGlmaWNhdGlvbkluYm94UGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vV2ViRW5nYWdlL3dlLWlvbmljLW5vdGlmaWNhdGlvbi1pbmJveCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV0VDYXBJbmJveCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgbm90aWZpY2F0aW9uIGNvdW50LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXROb3RpZmljYXRpb25Db3VudCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjb3VudCBvZiBub3RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzQ2FsbGJhY2tcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3JDYWxsYmFja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSAtIFRoZSBjb3VudCBvZiBub3RpZmljYXRpb25zLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXROb3RpZmljYXRpb25Db3VudChcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IChjb3VudDogU3RyaW5nKSA9PiB2b2lkLFxuICAgIGVycm9yQ2FsbGJhY2s6IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqLVxuICAgKiBTZXRzIFdlYkVuZ2FnZSBTREsgY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge0pzb25PYmplY3QgfCBudWxsfSBvZmZzZXQgLSBPcHRpb25hbCBvZmZzZXQgZm9yIG5vdGlmaWNhdGlvbnNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2Vzc0NhbGxiYWNrXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Tm90aWZpY2F0aW9uTGlzdChcbiAgICBvZmZzZXQ6IEpzb25PYmplY3QgfCBudWxsLFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogKG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvblJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGVycm9yQ2FsbGJhY2s6IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIGEgc3BlY2lmaWMgbm90aWZpY2F0aW9uIGFzIHJlYWQuXG4gICAqIEBwYXJhbSB7SnNvbk9iamVjdH0gbm90aWZpY2F0aW9uT2JqZWN0IC0gVGhlIG5vdGlmaWNhdGlvbiB0byBtYXJrIGFzIHJlYWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtYXJrUmVhZChub3RpZmljYXRpb25PYmplY3Q6IEpzb25PYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgYSBzcGVjaWZpYyBub3RpZmljYXRpb24gYXMgdW5yZWFkLlxuICAgKiBAcGFyYW0ge0pzb25PYmplY3R9IG5vdGlmaWNhdGlvbk9iamVjdCAtIFRoZSBub3RpZmljYXRpb24gdG8gbWFyayBhcyB1bnJlYWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtYXJrVW5yZWFkKG5vdGlmaWNhdGlvbk9iamVjdDogSnNvbk9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3MgYSBjbGljayBldmVudCBvbiBhIG5vdGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIHtKc29uT2JqZWN0fSBub3RpZmljYXRpb25PYmplY3QgLSBUaGUgbm90aWZpY2F0aW9uIHRoYXQgd2FzIGNsaWNrZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0NsaWNrKG5vdGlmaWNhdGlvbk9iamVjdDogSnNvbk9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3MgdGhlIHZpZXcgZXZlbnQgb2YgYSBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSB7SnNvbk9iamVjdH0gbm90aWZpY2F0aW9uT2JqZWN0IC0gVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHdhcyB2aWV3ZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja1ZpZXcobm90aWZpY2F0aW9uT2JqZWN0OiBKc29uT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIGEgc3BlY2lmaWMgbm90aWZpY2F0aW9uIGFzIGRlbGV0ZWQuXG4gICAqIEBwYXJhbSB7SnNvbk9iamVjdH0gbm90aWZpY2F0aW9uT2JqZWN0IC0gVGhlIG5vdGlmaWNhdGlvbiB0byBkZWxldGUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtYXJrRGVsZXRlKG5vdGlmaWNhdGlvbk9iamVjdDogSnNvbk9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkLlxuICAgKiBAcGFyYW0ge0pzb25BcnJheX0gbm90aWZpY2F0aW9uTGlzdCAtIEFuIGFycmF5IG9mIG5vdGlmaWNhdGlvbiBpZGVudGlmaWVycyB0byBtYXJrIGFzIHJlYWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkQWxsKG5vdGlmaWNhdGlvbkxpc3Q6IEpzb25BcnJheSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyBhbGwgbm90aWZpY2F0aW9ucyBhcyB1bnJlYWQuXG4gICAqIEBwYXJhbSB7SnNvbkFycmF5fSBub3RpZmljYXRpb25MaXN0IC0gQW4gYXJyYXkgb2Ygbm90aWZpY2F0aW9uIGlkZW50aWZpZXJzIHRvIG1hcmsgYXMgdW5yZWFkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5SZWFkQWxsKG5vdGlmaWNhdGlvbkxpc3Q6IEpzb25BcnJheSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBub3RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0ge0pzb25BcnJheX0gbm90aWZpY2F0aW9uTGlzdCAtIEFuIGFycmF5IG9mIG5vdGlmaWNhdGlvbiBpZGVudGlmaWVycyB0byBkZWxldGUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVBbGwobm90aWZpY2F0aW9uTGlzdDogSnNvbkFycmF5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEpzb25WYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBudWxsIHwgSnNvbk9iamVjdCB8IEpzb25BcnJheTtcblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uUmVzcG9uc2UgPSB7XG4gIGhhc05leHQ6IGJvb2xlYW47XG4gIG1lc3NhZ2VMaXN0OiBKc29uQXJyYXk7XG59O1xuXG5leHBvcnQgdHlwZSBKc29uT2JqZWN0ID0ge1xuICBba2V5OiBzdHJpbmddOiBKc29uVmFsdWU7XG59O1xuXG5leHBvcnQgdHlwZSBKc29uQXJyYXkgPSBKc29uVmFsdWVbXTtcbiJdfQ==
