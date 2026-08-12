import { Observable, Observer } from 'rxjs';

import { checkAvailability, getPlugin } from './common';

/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj: any, methodName: string): Observable<any> {
  return new Observable((observer: Observer<any>) => {
    const availabilityCheck = checkAvailability(pluginObj, methodName);

    if (availabilityCheck === true) {
      const pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
      pluginInstance[methodName] = observer.next.bind(observer);
      return () => (pluginInstance[methodName] = () => {});
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}

/**
 * The generated call site passes the same four arguments as `cordova()` — `(this, methodName,
 * config, arguments)` — but this helper only ever needed the first two. The extra arguments are
 * harmless at the call site and were never read.
 *
 * @param pluginObj
 * @param methodName
 */
export function cordovaFunctionOverride(pluginObj: any, methodName: string) {
  return overrideFunction(pluginObj, methodName);
}
