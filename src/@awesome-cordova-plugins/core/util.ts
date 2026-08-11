/**
 * @param element
 * @param path
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
 * @param callback
 * @private
 */
export function getPromise(callback: Function = () => {}): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    callback(resolve, reject);
  });
}
