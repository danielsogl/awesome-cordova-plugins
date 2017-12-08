import { checkAvailability, getPlugin } from './common';
import { Observable } from 'rxjs/Observable';

function overrideFunction(pluginObj: any, methodName: string): Observable<any> {
  return new Observable(observer => {

    const availabilityCheck = checkAvailability(pluginObj, methodName);

    if (availabilityCheck === true) {
      const pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
      pluginInstance[methodName] = observer.next.bind(observer);
      return () => pluginInstance[methodName] = () => { };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }

  });
}

export function cordovaFunctionOverride(pluginObj: any, methodName: string, args: IArguments | Array<any> = []) {
  return overrideFunction(pluginObj, methodName);
}
