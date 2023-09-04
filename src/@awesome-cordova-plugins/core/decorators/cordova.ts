import { wrap } from './common';
import { CordovaOptions } from './interfaces';

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
export function cordova(pluginObj: any, methodName: string, config: CordovaOptions, args: IArguments | any[]) {
  return wrap(pluginObj, methodName, config).apply(this, args);
}
