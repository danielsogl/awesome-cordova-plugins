import { firstValueFrom, Observable } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  callCordovaPlugin,
  callInstance,
  checkAvailability,
  cordovaWarn,
  ERR_CORDOVA_NOT_AVAILABLE,
  ERR_PLUGIN_NOT_INSTALLED,
  get,
  getPlugin,
  getPromise,
  instanceAvailability,
  pluginWarn,
  setIndex,
  wrap,
  wrapInstance,
  wrapPromise,
} from './common';

/** Mirrors the statics the build's plugin-class transformer emits onto every wrapper. */
function makePluginClass(ref = 'mock.plugin', name = 'MockPlugin', install = 'cordova-plugin-mock') {
  return class {
    static getPluginRef = () => ref;
    static getPluginName = () => name;
    static getPluginInstallName = () => install;
  };
}

/** A plugin object as the decorators see it: an instance whose constructor carries the statics. */
function makePluginObj(overrides: Record<string, unknown> = {}) {
  const Cls = makePluginClass();
  return Object.assign(new Cls(), overrides);
}

/** Installs a fake native plugin at window.mock.plugin and marks cordova as present. */
function installNativePlugin(impl: Record<string, unknown>) {
  (window as any).cordova = {};
  (window as any).mock = { plugin: impl };
  return impl;
}

const win = window as any;

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
  vi.spyOn(console, 'log').mockImplementation(() => undefined);
});

afterEach(() => {
  delete win.mock;
  delete win.cordova;
  delete win.angular;
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('get', () => {
  it('walks a dotted path', () => {
    expect(get({ a: { b: { c: 7 } } } as any, 'a.b.c')).toBe(7);
  });

  it('returns null when the path breaks part way', () => {
    expect(get({ a: null } as any, 'a.b.c')).toBeNull();
  });

  it('returns undefined for a missing leaf', () => {
    expect(get({ a: {} } as any, 'a.b')).toBeUndefined();
  });
});

describe('getPlugin', () => {
  it('resolves a ref off window', () => {
    installNativePlugin({ ping: () => 'pong' });
    expect(getPlugin('mock.plugin')).toEqual({ ping: expect.any(Function) });
  });

  it('returns null when there is no window', () => {
    vi.stubGlobal('window', undefined);
    expect(getPlugin('mock.plugin')).toBeNull();
  });
});

describe('getPromise', () => {
  it('resolves through a native promise', async () => {
    await expect(getPromise<string>((resolve) => resolve('done'))).resolves.toBe('done');
  });

  it('rejects through a native promise', async () => {
    await expect(getPromise((_resolve, reject) => reject(new Error('nope')))).rejects.toThrow('nope');
  });

  it('defers to Angular 1 $q when it can be reached', async () => {
    const $q = vi.fn((cb: (res: Function, rej: Function) => void) => {
      let value: unknown;
      cb(
        (v: unknown) => (value = v),
        () => undefined
      );
      return Promise.resolve(value);
    });
    win.angular = { element: () => ({ injector: () => ({ get: () => $q }) }) };

    await expect(getPromise<string>((resolve) => resolve('from-$q'))).resolves.toBe('from-$q');
    expect($q).toHaveBeenCalledOnce();
  });

  it('warns and falls back to a native promise when $q cannot be retrieved', async () => {
    win.angular = { element: () => ({ injector: () => null }) };

    await expect(getPromise<string>((resolve) => resolve('fallback'))).resolves.toBe('fallback');
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("Angular 1 was detected but $q couldn't"));
  });

  it('queries [ng-app] before falling back to body', async () => {
    const element = vi.fn(() => ({ injector: () => null }));
    win.angular = { element };
    const marker = document.createElement('div');
    marker.setAttribute('ng-app', '');
    document.body.appendChild(marker);

    await getPromise((resolve) => resolve(undefined));

    expect(element).toHaveBeenCalledWith(marker);
    marker.remove();
  });
});

describe('checkAvailability', () => {
  it('accepts a plugin ref string', () => {
    installNativePlugin({ ping: () => 'pong' });
    expect(checkAvailability('mock.plugin')).toBe(true);
  });

  it('accepts a plugin object', () => {
    installNativePlugin({ ping: () => 'pong' });
    expect(checkAvailability(makePluginObj())).toBe(true);
  });

  it('checks a specific method when one is named', () => {
    installNativePlugin({ ping: () => 'pong' });
    expect(checkAvailability('mock.plugin', 'ping')).toBe(true);
    expect(checkAvailability('mock.plugin', 'absent')).toEqual(ERR_PLUGIN_NOT_INSTALLED);
  });

  it('reports the plugin as not installed when cordova is present but the ref is not', () => {
    win.cordova = {};
    expect(checkAvailability(makePluginObj(), 'ping')).toEqual(ERR_PLUGIN_NOT_INSTALLED);
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('MockPlugin plugin is not installed'));
  });

  it('reports cordova as unavailable when window.cordova is missing', () => {
    expect(checkAvailability('mock.plugin', 'ping', 'MockPlugin')).toEqual(ERR_CORDOVA_NOT_AVAILABLE);
  });

  it('reports cordova as unavailable when there is no window at all', () => {
    vi.stubGlobal('window', undefined);
    expect(checkAvailability('mock.plugin')).toEqual(ERR_CORDOVA_NOT_AVAILABLE);
  });
});

describe('instanceAvailability', () => {
  it('is false without an object instance', () => {
    expect(instanceAvailability({})).toBeFalsy();
  });

  it('is true for an instance when no method is named', () => {
    expect(instanceAvailability({ _objectInstance: {} })).toBe(true);
  });

  it('checks the named method on the instance', () => {
    expect(instanceAvailability({ _objectInstance: { ping: () => undefined } }, 'ping')).toBe(true);
    expect(instanceAvailability({ _objectInstance: {} }, 'ping')).toBe(false);
  });
});

describe('setIndex', () => {
  const resolve = () => undefined;
  const reject = () => undefined;

  it('leaves args untouched when sync', () => {
    expect(setIndex(['a'], { sync: true }, resolve, reject)).toEqual(['a']);
  });

  it('appends the callbacks by default', () => {
    expect(setIndex(['a'], {}, resolve, reject)).toEqual(['a', resolve, reject]);
  });

  it('prepends them in reverse callback order', () => {
    expect(setIndex(['a'], { callbackOrder: 'reverse' }, resolve, reject)).toEqual([resolve, reject, 'a']);
  });

  it('appends a node-style callback that resolves', () => {
    const res = vi.fn();
    const args = setIndex([], { callbackStyle: 'node' }, res, reject) as [(e: unknown, r: unknown) => void];
    args[0](null, 'value');
    expect(res).toHaveBeenCalledWith('value');
  });

  it('appends a node-style callback that rejects', () => {
    const rej = vi.fn();
    const args = setIndex([], { callbackStyle: 'node' }, resolve, rej) as [(e: unknown, r: unknown) => void];
    args[0](new Error('boom'), undefined);
    expect(rej).toHaveBeenCalledWith(new Error('boom'));
  });

  it('appends an object-style callback pair', () => {
    const args = setIndex([], { callbackStyle: 'object', successName: 'ok', errorName: 'ko' }, resolve, reject);
    expect(args[0]).toEqual({ ok: resolve, ko: reject });
  });

  it('splices the callbacks into explicit indices', () => {
    expect(setIndex(['a', 'b'], { successIndex: 1, errorIndex: 2 }, resolve, reject)).toEqual([
      'a',
      resolve,
      reject,
      'b',
    ]);
  });

  it('applies the error index first when it comes before the success index', () => {
    expect(setIndex(['a', 'b'], { successIndex: 2, errorIndex: 1 }, resolve, reject)).toEqual([
      'a',
      reject,
      resolve,
      'b',
    ]);
  });

  it('assigns the success callback past the end rather than splicing', () => {
    const args = setIndex(['a'], { successIndex: 4, errorIndex: 5 }, resolve, reject);
    expect(args[4]).toBe(resolve);
    expect(args[5]).toBe(reject);
  });

  it('assigns the error callback past the end rather than splicing', () => {
    // successIndex splices first and grows the array to 2, so errorIndex 9 is still past the end
    const args = setIndex(['a'], { successIndex: 1, errorIndex: 9 }, resolve, reject);
    expect(args[1]).toBe(resolve);
    expect(args[9]).toBe(reject);
  });
});

describe('callCordovaPlugin', () => {
  it('calls through to the native method', () => {
    const ping = vi.fn(() => 'pong');
    installNativePlugin({ ping });
    expect(callCordovaPlugin(makePluginObj(), 'ping', ['a'], { sync: true })).toBe('pong');
    expect(ping).toHaveBeenCalledWith('a');
  });

  it('returns the availability error instead of calling', () => {
    win.cordova = {};
    expect(callCordovaPlugin(makePluginObj(), 'ping', [], { sync: true })).toEqual(ERR_PLUGIN_NOT_INSTALLED);
  });
});

describe('callInstance', () => {
  it('calls the method on _objectInstance', () => {
    const ping = vi.fn(() => 'pong');
    expect(callInstance({ _objectInstance: { ping } }, 'ping', ['a'], { sync: true })).toBe('pong');
    expect(ping).toHaveBeenCalledWith('a');
  });

  it('returns undefined when the instance lacks the method', () => {
    expect(callInstance({ _objectInstance: {} }, 'ping', [], { sync: true })).toBeUndefined();
  });
});

describe('pluginWarn', () => {
  it('names the method when one is given', () => {
    pluginWarn('MockPlugin', undefined, 'ping');
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('tried calling MockPlugin.ping'));
  });

  it('falls back to naming only the plugin', () => {
    pluginWarn('MockPlugin');
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('tried accessing the MockPlugin plugin'));
  });

  it('adds an install hint when the package is known', () => {
    pluginWarn('MockPlugin', 'cordova-plugin-mock');
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("plugin add cordova-plugin-mock'"));
  });
});

describe('cordovaWarn', () => {
  it('stays silent under node, where process exists', () => {
    cordovaWarn('MockPlugin', 'ping');
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('names the method in a browser', () => {
    vi.stubGlobal('process', undefined);
    cordovaWarn('MockPlugin', 'ping');
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('tried calling MockPlugin.ping'));
  });

  it('names only the plugin when no method is given', () => {
    vi.stubGlobal('process', undefined);
    cordovaWarn('MockPlugin');
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('tried accessing the MockPlugin plugin'));
  });
});

describe('wrapPromise', () => {
  it('resolves with the native success callback', async () => {
    installNativePlugin({ ping: (arg: string, success: Function) => success(`pong:${arg}`) });
    await expect(wrapPromise(makePluginObj(), 'ping', ['a'])).resolves.toBe('pong:a');
  });

  it('rejects with the native error callback', async () => {
    installNativePlugin({ ping: (_a: string, _s: Function, error: Function) => error('bad') });
    await expect(wrapPromise(makePluginObj(), 'ping', ['a'])).rejects.toBe('bad');
  });

  it('collects every success argument when destructuring', async () => {
    installNativePlugin({ ping: (success: Function) => success(1, 2, 3) });
    await expect(wrapPromise(makePluginObj(), 'ping', [], { destruct: true })).resolves.toEqual([1, 2, 3]);
  });

  it('collects every error argument when destructuring', async () => {
    installNativePlugin({ ping: (_s: Function, error: Function) => error(1, 2) });
    await expect(wrapPromise(makePluginObj(), 'ping', [], { destruct: true })).rejects.toEqual([1, 2]);
  });

  it('rejects with the availability error when the plugin is missing', async () => {
    win.cordova = {};
    await expect(wrapPromise(makePluginObj(), 'ping', [])).rejects.toBe(ERR_PLUGIN_NOT_INSTALLED.error);
  });
});

describe('wrap', () => {
  it('returns the raw result when sync', () => {
    installNativePlugin({ ping: () => 'pong' });
    expect(wrap(makePluginObj(), 'ping', { sync: true })()).toBe('pong');
  });

  it('produces a promise by default', async () => {
    installNativePlugin({ ping: (success: Function) => success('pong') });
    await expect(wrap(makePluginObj(), 'ping')()).resolves.toBe('pong');
  });

  describe('otherPromise', () => {
    it('resolves when the native method returns a thenable', async () => {
      installNativePlugin({ ping: () => Promise.resolve('pong') });
      await expect(wrap(makePluginObj(), 'ping', { otherPromise: true })()).resolves.toBe('pong');
    });

    it('rejects when the native thenable rejects', async () => {
      installNativePlugin({ ping: () => Promise.reject(new Error('bad')) });
      await expect(wrap(makePluginObj(), 'ping', { otherPromise: true })()).rejects.toThrow('bad');
    });

    it('rejects with the availability error', async () => {
      win.cordova = {};
      await expect(wrap(makePluginObj(), 'ping', { otherPromise: true })()).rejects.toBe(
        ERR_PLUGIN_NOT_INSTALLED.error
      );
    });

    it('rejects when the native method returns nothing', async () => {
      installNativePlugin({ ping: () => undefined });
      await expect(wrap(makePluginObj(), 'ping', { otherPromise: true })()).rejects.toEqual({
        error: 'unexpected_error',
      });
    });

    it('stays pending when the result is neither an error nor a thenable', async () => {
      installNativePlugin({ ping: () => ({ some: 'value' }) });
      const settled = vi.fn();
      void (wrap(makePluginObj(), 'ping', { otherPromise: true })() as Promise<unknown>).then(settled, settled);
      await Promise.resolve();
      expect(settled).not.toHaveBeenCalled();
    });
  });

  describe('eventObservable', () => {
    it('wraps an event on a resolved element', async () => {
      const target = document.createElement('div');
      win.mock = { element: target };
      const emitted = firstValueFrom(
        wrap(makePluginObj(), 'ping', {
          eventObservable: true,
          event: 'tick',
          element: 'mock.element',
        })() as Observable<Event>
      );
      target.dispatchEvent(new Event('tick'));
      expect((await emitted).type).toBe('tick');
    });

    it('falls back to window when no element is named', async () => {
      const emitted = firstValueFrom(
        wrap(makePluginObj(), 'ping', { eventObservable: true, event: 'tick' })() as Observable<Event>
      );
      window.dispatchEvent(new Event('tick'));
      expect((await emitted).type).toBe('tick');
    });

    it('uses a given target object directly when there is no window to resolve against', async () => {
      const target = document.createElement('div');
      vi.stubGlobal('window', undefined);
      const emitted = firstValueFrom(
        wrap(makePluginObj(), 'ping', {
          eventObservable: true,
          event: 'tick',
          element: target,
        })() as Observable<Event>
      );
      target.dispatchEvent(new Event('tick'));
      expect((await emitted).type).toBe('tick');
    });

    it('degrades to an empty target with neither a window nor an element', () => {
      vi.stubGlobal('window', undefined);
      // the {} fallback is not an EventTarget, so rxjs rejects it as it builds the observable
      expect(() => wrap(makePluginObj(), 'ping', { eventObservable: true, event: 'tick' })()).toThrow(
        /Invalid event target/
      );
    });
  });

  describe('observable', () => {
    it('emits each native success callback', async () => {
      installNativePlugin({ watch: (success: Function) => success('tick') });
      const value = await firstValueFrom(wrap(makePluginObj(), 'watch', { observable: true })() as Observable<string>);
      expect(value).toBe('tick');
    });

    it('collects every argument when destructuring', async () => {
      installNativePlugin({ watch: (success: Function) => success(1, 2) });
      const value = await firstValueFrom(
        wrap(makePluginObj(), 'watch', { observable: true, destruct: true })() as Observable<number[]>
      );
      expect(value).toEqual([1, 2]);
    });

    it('errors when the native error callback fires while destructuring', async () => {
      installNativePlugin({ watch: (_s: Function, error: Function) => error('bad') });
      const observable = wrap(makePluginObj(), 'watch', { observable: true, destruct: true })() as Observable<unknown>;
      await expect(firstValueFrom(observable)).rejects.toEqual(['bad']);
    });

    it('errors and completes when the plugin is unavailable', async () => {
      win.cordova = {};
      const observable = wrap(makePluginObj(), 'watch', { observable: true })() as Observable<unknown>;
      await expect(firstValueFrom(observable)).rejects.toBe(ERR_PLUGIN_NOT_INSTALLED.error);
    });

    it('calls the clear function on unsubscribe', () => {
      const clear = vi.fn();
      installNativePlugin({ watch: () => undefined, clear });
      const sub = (
        wrap(makePluginObj(), 'watch', { observable: true, clearFunction: 'clear' })() as Observable<unknown>
      ).subscribe();
      sub.unsubscribe();
      // the clear path re-enters setIndex with no resolve/reject, so both land as undefined
      expect(clear).toHaveBeenCalledWith(undefined, undefined);
    });

    it('passes the original args to the clear function when asked', () => {
      const clear = vi.fn();
      installNativePlugin({ watch: () => undefined, clear });
      const sub = (
        wrap(makePluginObj(), 'watch', {
          observable: true,
          clearFunction: 'clear',
          clearWithArgs: true,
        })('a') as Observable<unknown>
      ).subscribe();
      sub.unsubscribe();
      expect(clear.mock.calls[0][0]).toBe('a');
    });

    it('does nothing on unsubscribe without a clear function', () => {
      installNativePlugin({ watch: () => undefined });
      const sub = (wrap(makePluginObj(), 'watch', { observable: true })() as Observable<unknown>).subscribe();
      expect(() => sub.unsubscribe()).not.toThrow();
    });

    it('warns instead of throwing when clearing fails', () => {
      installNativePlugin({
        watch: () => undefined,
        clear: () => {
          throw new Error('clear failed');
        },
      });
      const sub = (
        wrap(makePluginObj(), 'watch', { observable: true, clearFunction: 'clear' })() as Observable<unknown>
      ).subscribe();
      sub.unsubscribe();
      expect(console.warn).toHaveBeenCalledWith(
        'Unable to clear the previous observable watch for',
        'MockPlugin',
        'watch'
      );
    });
  });
});

describe('wrapInstance', () => {
  const instanceObj = (impl: Record<string, unknown>) => ({
    _objectInstance: impl,
    constructor: makePluginClass(),
  });

  it('returns the raw result when sync', () => {
    expect(wrapInstance(instanceObj({ ping: () => 'pong' }), 'ping', { sync: true })()).toBe('pong');
  });

  it('resolves a promise by default', async () => {
    const obj = instanceObj({ ping: (success: Function) => success('pong') });
    await expect(wrapInstance(obj, 'ping', {})()).resolves.toBe('pong');
  });

  it('collects every argument when destructuring', async () => {
    const obj = instanceObj({ ping: (success: Function) => success(1, 2) });
    await expect(wrapInstance(obj, 'ping', { destruct: true })()).resolves.toEqual([1, 2]);
  });

  it('rejects with destructured error arguments', async () => {
    const obj = instanceObj({ ping: (_s: Function, error: Function) => error('bad') });
    await expect(wrapInstance(obj, 'ping', { destruct: true })()).rejects.toEqual(['bad']);
  });

  it('rejects when the instance method reports an error object', async () => {
    const obj = instanceObj({ ping: () => ({ error: 'boom' }) });
    await expect(wrapInstance(obj, 'ping', {})()).rejects.toBe('boom');
  });

  describe('otherPromise', () => {
    it('resolves through a returned thenable', async () => {
      const obj = instanceObj({ ping: () => Promise.resolve('pong') });
      await expect(wrapInstance(obj, 'ping', { otherPromise: true })()).resolves.toBe('pong');
    });

    it('resolves a destructured thenable', async () => {
      const obj = instanceObj({ ping: () => Promise.resolve('pong') });
      await expect(wrapInstance(obj, 'ping', { otherPromise: true, destruct: true })()).resolves.toBe('pong');
    });

    it('resolves from the destructured success callback', async () => {
      // the method resolves through the callback and returns nothing, so the trailing reject() is
      // a no-op on an already settled promise
      const obj = instanceObj({ ping: (success: Function) => success(1, 2) });
      await expect(wrapInstance(obj, 'ping', { otherPromise: true, destruct: true })()).resolves.toEqual([1, 2]);
    });

    it('rejects from the destructured error callback', async () => {
      const obj = instanceObj({ ping: (_s: Function, error: Function) => error('bad') });
      await expect(wrapInstance(obj, 'ping', { otherPromise: true, destruct: true })()).rejects.toEqual(['bad']);
    });

    it('rejects when nothing thenable comes back', async () => {
      const obj = instanceObj({ ping: () => undefined });
      await expect(wrapInstance(obj, 'ping', { otherPromise: true })()).rejects.toBeUndefined();
    });
  });

  describe('observable', () => {
    it('emits the native success callback', async () => {
      const obj = instanceObj({ watch: (success: Function) => success('tick') });
      await expect(
        firstValueFrom(wrapInstance(obj, 'watch', { observable: true })() as Observable<string>)
      ).resolves.toBe('tick');
    });

    it('collects every argument when destructuring', async () => {
      const obj = instanceObj({ watch: (success: Function) => success(1, 2) });
      await expect(
        firstValueFrom(wrapInstance(obj, 'watch', { observable: true, destruct: true })() as Observable<number[]>)
      ).resolves.toEqual([1, 2]);
    });

    it('errors on the destructured error callback', async () => {
      const obj = instanceObj({ watch: (_s: Function, error: Function) => error('bad') });
      await expect(
        firstValueFrom(wrapInstance(obj, 'watch', { observable: true, destruct: true })() as Observable<unknown>)
      ).rejects.toEqual(['bad']);
    });

    it('errors when the instance method reports an error object', async () => {
      const obj = instanceObj({ watch: () => ({ error: 'boom' }) });
      await expect(
        firstValueFrom(wrapInstance(obj, 'watch', { observable: true })() as Observable<unknown>)
      ).rejects.toBe('boom');
    });

    it('calls the clear function on unsubscribe', () => {
      const clear = vi.fn();
      const obj = instanceObj({ watch: () => undefined, clear });
      const sub = (
        wrapInstance(obj, 'watch', { observable: true, clearFunction: 'clear' })() as Observable<unknown>
      ).subscribe();
      sub.unsubscribe();
      // the clear path re-enters setIndex with no resolve/reject, so both land as undefined
      expect(clear).toHaveBeenCalledWith(undefined, undefined);
    });

    it('passes the original args to the clear function when asked', () => {
      const clear = vi.fn();
      const obj = instanceObj({ watch: () => undefined, clear });
      const sub = (
        wrapInstance(obj, 'watch', {
          observable: true,
          clearFunction: 'clear',
          clearWithArgs: true,
        })('a') as Observable<unknown>
      ).subscribe();
      sub.unsubscribe();
      expect(clear.mock.calls[0][0]).toBe('a');
    });

    it('warns instead of throwing when clearing fails', () => {
      const obj = instanceObj({
        watch: () => undefined,
        clear: () => {
          throw new Error('clear failed');
        },
      });
      const sub = (
        wrapInstance(obj, 'watch', { observable: true, clearFunction: 'clear' })() as Observable<unknown>
      ).subscribe();
      sub.unsubscribe();
      expect(console.warn).toHaveBeenCalledWith(
        'Unable to clear the previous observable watch for',
        'MockPlugin',
        'watch'
      );
    });
  });
});
