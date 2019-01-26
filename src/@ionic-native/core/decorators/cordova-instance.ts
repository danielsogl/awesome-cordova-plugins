import { wrapInstance } from './common';
import { CordovaOptions } from './interfaces';

export function cordovaInstance(
  pluginObj: any,
  methodName: string,
  config: CordovaOptions,
  args: IArguments | any[]
) {
  args = Array.from(args);
  return wrapInstance(pluginObj, methodName, config).apply(this, args);
}
