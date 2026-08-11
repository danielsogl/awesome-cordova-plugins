import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { cordovaInstance } from './cordova-instance';

declare const window: any;

class MockInstancePlugin {
  _objectInstance = {
    echo: (value: string) => value,
    echoAsync: (value: string, success: Function) => success(value),
  };
}

describe('cordovaInstance', () => {
  let plugin: MockInstancePlugin;

  beforeEach(() => {
    plugin = new MockInstancePlugin();
    window.cordova = {};
  });

  afterEach(() => {
    delete window.cordova;
  });

  it('calls the instance method synchronously with an array of args', () => {
    expect(cordovaInstance(plugin, 'echo', { sync: true }, ['pong'])).toBe('pong');
  });

  it('accepts an arguments object', () => {
    const args = (function (...rest: any[]) {
      // eslint-disable-next-line prefer-rest-params
      return arguments;
    })('pong');
    expect(cordovaInstance(plugin, 'echo', { sync: true }, args)).toBe('pong');
  });

  it('returns a promise for async methods', async () => {
    await expect(cordovaInstance(plugin, 'echoAsync', {}, ['pong'])).resolves.toBe('pong');
  });
});
