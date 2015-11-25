declare var window;

declare var Promise;

export function get(obj, path) {
  for (var i=0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]];
  }
  return obj;
};

export const promisify = (pluginRef, methodName, successIndex, errorIndex) => {
  return (...args) => {
    return new Promise((resolve, reject) => {

      args[successIndex] = resolve;
      args[errorIndex] = reject;

      get(window, pluginRef)[methodName].apply(this, args);
    })
  }
}
