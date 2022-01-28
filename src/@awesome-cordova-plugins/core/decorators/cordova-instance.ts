import { wrapInstance } from './common';
import { CordovaOptions } from './interfaces';

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
export function cordovaInstance(pluginObj: any, methodName: string, config: CordovaOptions, args: IArguments | any[]) {
  args = Array.from(args);
  return wrapInstance(pluginObj, methodName, config).apply(this, args);
}
