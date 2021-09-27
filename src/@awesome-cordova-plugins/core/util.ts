declare const window: any;

/**
 * @private
 */
export function get(element: Element | Window, path: string) {
  const paths: string[] = path.split('.');
  let obj: any = element;
  for (let i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}

/**
 * @private
 */
export function getPromise(callback: Function = () => {}): Promise<any> {
  const tryNativePromise = () => {
    if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
      return new Promise<any>((resolve, reject) => {
        callback(resolve, reject);
      });
    } else {
      console.error(
        'No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.'
      );
    }
  };

  return tryNativePromise();
}
