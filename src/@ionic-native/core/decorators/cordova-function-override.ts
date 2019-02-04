import { Observable, Observer } from 'rxjs';

import { checkAvailability, getPlugin } from './common';

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

export function cordovaFunctionOverride(
  pluginObj: any,
  methodName: string,
  args: IArguments | any[] = []
) {
  return overrideFunction(pluginObj, methodName);
}
