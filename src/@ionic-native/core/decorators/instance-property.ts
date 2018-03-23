import * as _ from 'lodash';

export function instancePropertyGet(pluginObj: any, key: string) {
  if (!_.isUndefined(pluginObj._objectInstance) && !_.isUndefined(pluginObj._objectInstance[key])) {
    return pluginObj._objectInstance[key];
  }
  return null;
}

export function instancePropertySet(pluginObj: any, key: string, value: any) {
  if (!_.isUndefined(pluginObj._objectInstance) && !_.isUndefined(pluginObj._objectInstance[key])) {
    pluginObj._objectInstance[key] = value;
  }
}
