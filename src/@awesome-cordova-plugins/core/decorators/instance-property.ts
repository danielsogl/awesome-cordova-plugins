/**
 * @param pluginObj
 * @param key
 */
export function instancePropertyGet(pluginObj: any, key: string) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }
  return null;
}

/**
 * @param pluginObj
 * @param key
 * @param value
 */
export function instancePropertySet(pluginObj: any, key: string, value: any) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}
