import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { cordovaFunctionOverride } from './cordova-function-override';

declare const window: any;

class MockPlugin {
  static getPluginRef(): string {
    return 'mockOverridePlugin';
  }

  static getPluginName(): string {
    return 'MockPlugin';
  }

  static getPluginInstallName(): string {
    return 'cordova-plugin-mock';
  }
}

describe('cordovaFunctionOverride', () => {
  let plugin: MockPlugin;

  beforeEach(() => {
    plugin = new MockPlugin();
    window.cordova = {};
  });

  afterEach(() => {
    delete window.cordova;
    delete window.mockOverridePlugin;
    vi.restoreAllMocks();
  });

  it('replaces the plugin method and emits its calls', () => {
    const original = () => 'original';
    window.mockOverridePlugin = { onEvent: original };

    const values: any[] = [];
    const subscription = cordovaFunctionOverride(plugin, 'onEvent').subscribe((value) => values.push(value));

    expect(window.mockOverridePlugin.onEvent).not.toBe(original);
    window.mockOverridePlugin.onEvent('hello');
    expect(values).toEqual(['hello']);

    subscription.unsubscribe();
  });

  it('resets the plugin method to a no-op on unsubscribe', () => {
    window.mockOverridePlugin = { onEvent: () => 'original' };

    const values: any[] = [];
    const subscription = cordovaFunctionOverride(plugin, 'onEvent', ['unused']).subscribe((value) =>
      values.push(value)
    );
    subscription.unsubscribe();

    expect(typeof window.mockOverridePlugin.onEvent).toBe('function');
    expect(window.mockOverridePlugin.onEvent('ignored')).toBeUndefined();
    expect(values).toEqual([]);
  });

  it('errors when the plugin is not installed', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const error = vi.fn();
    const complete = vi.fn();

    cordovaFunctionOverride(plugin, 'onEvent').subscribe({ error, complete });

    expect(error).toHaveBeenCalledWith({ error: 'plugin_not_installed' });
    expect(complete).not.toHaveBeenCalled();
  });
});
