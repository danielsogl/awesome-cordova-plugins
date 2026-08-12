import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { cordova } from './cordova';

declare const window: any;

class MockPlugin {
  static getPluginRef(): string {
    return 'mockCordovaPlugin';
  }

  static getPluginName(): string {
    return 'MockPlugin';
  }

  static getPluginInstallName(): string {
    return 'cordova-plugin-mock';
  }
}

describe('cordova', () => {
  let plugin: MockPlugin;

  beforeEach(() => {
    plugin = new MockPlugin();
    window.cordova = {};
    window.mockCordovaPlugin = {
      echo: (value: string) => value,
      echoAsync: (value: string, success: Function) => success(value),
    };
  });

  afterEach(() => {
    delete window.cordova;
    delete window.mockCordovaPlugin;
    vi.restoreAllMocks();
  });

  it('returns the plugin result synchronously', () => {
    expect(cordova(plugin, 'echo', { sync: true }, ['pong'])).toBe('pong');
  });

  it('passes an arguments object through to the plugin', () => {
    const args = (function (...rest: any[]) {
      // eslint-disable-next-line prefer-rest-params
      return arguments;
    })('pong');
    expect(cordova(plugin, 'echo', { sync: true }, args)).toBe('pong');
  });

  it('returns a promise for async methods', async () => {
    await expect(cordova(plugin, 'echoAsync', {}, ['pong'])).resolves.toBe('pong');
  });

  it('rejects when the plugin is not installed', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    delete window.mockCordovaPlugin;
    await expect(cordova(plugin, 'echoAsync', {}, [])).rejects.toEqual('plugin_not_installed');
  });
});
