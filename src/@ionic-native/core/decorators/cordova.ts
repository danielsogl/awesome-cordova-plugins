import { wrap } from './common';
import { CordovaOptions } from './interfaces';

export function cordova(
  pluginObj: any,
  methodName: string,
  config: CordovaOptions,
  args: IArguments | any[]
) {
  return wrap(pluginObj, methodName, config).apply(this, args);
}
