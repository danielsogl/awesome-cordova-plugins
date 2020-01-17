export function instancePropertyGet(pluginObj: any, key: string) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }
  return null;
}

export function instancePropertySet(pluginObj: any, key: string, value: any) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}
