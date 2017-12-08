import { CordovaOptions } from './interfaces';
import { wrapInstance } from './common';

export function cordovaInstance(pluginObj: any, methodName: string, config: CordovaOptions, args: IArguments | Array<any>) {
  args = Array.from(args);
  return wrapInstance(pluginObj, methodName, config).apply(this, args);
}
