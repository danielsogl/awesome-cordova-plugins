import { checkAvailability, getPlugin } from './common';

export function cordovaPropertyGet(pluginObj: any, key: string) {
  if (checkAvailability(pluginObj, key) === true) {
    return getPlugin(pluginObj.constructor.getPluginRef())[key];
  }
  return null;
}

export function cordovaPropertySet(pluginObj: any, key: string, value: any) {
  if (checkAvailability(pluginObj, key) === true) {
    getPlugin(pluginObj.constructor.getPluginRef())[key] = value;
  }
}
