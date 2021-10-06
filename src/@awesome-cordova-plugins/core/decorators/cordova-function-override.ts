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
 * @param pluginObj
 * @param methodName
 * @param args
 */
export function cordovaFunctionOverride(pluginObj: any, methodName: string, args: IArguments | any[] = []) {
  return overrideFunction(pluginObj, methodName);
}
