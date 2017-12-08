import { CordovaOptions } from './interfaces';
import { wrap } from './common';

export function cordova(pluginObj: any, methodName: string, config: CordovaOptions, args: IArguments | Array<any>) {
  return wrap(pluginObj, methodName, config).apply(this, args);
}
