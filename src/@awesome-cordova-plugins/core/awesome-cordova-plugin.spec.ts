import { afterEach, describe, expect, it, vi } from 'vitest';

import { AwesomeCordovaNativePlugin } from './awesome-cordova-plugin';
import { checkAvailability } from './decorators/common';

// Only checkAvailability is stubbed; get() has to stay real because getPlugin() resolves the
// plugin ref through it.
vi.mock('./decorators/common', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./decorators/common')>()),
  checkAvailability: vi.fn(),
}));

const checkAvailabilityMock = vi.mocked(checkAvailability);

class TestPlugin extends AwesomeCordovaNativePlugin {
  static pluginName = 'TestPlugin';
  static pluginRef = 'test.plugin';
  static plugin = 'cordova-plugin-test';
  static repo = 'https://github.com/example/cordova-plugin-test';
  static platforms = ['Android', 'iOS'];
  static install = 'cordova plugin add cordova-plugin-test';
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.resetAllMocks();
  delete (window as any).test;
});

describe('AwesomeCordovaNativePlugin', () => {
  it('defaults its static metadata to empty values', () => {
    expect(AwesomeCordovaNativePlugin.getPluginName()).toBe('');
    expect(AwesomeCordovaNativePlugin.getPluginRef()).toBe('');
    expect(AwesomeCordovaNativePlugin.getPluginInstallName()).toBe('');
    expect(AwesomeCordovaNativePlugin.getSupportedPlatforms()).toEqual([]);
    expect(AwesomeCordovaNativePlugin.repo).toBe('');
    expect(AwesomeCordovaNativePlugin.install).toBe('');
  });

  it('exposes the subclass metadata', () => {
    expect(TestPlugin.getPluginName()).toBe('TestPlugin');
    expect(TestPlugin.getPluginRef()).toBe('test.plugin');
    expect(TestPlugin.getPluginInstallName()).toBe('cordova-plugin-test');
    expect(TestPlugin.getSupportedPlatforms()).toEqual(['Android', 'iOS']);
  });

  describe('installed', () => {
    it('is true when checkAvailability returns true', () => {
      checkAvailabilityMock.mockReturnValue(true);
      expect(TestPlugin.installed()).toBe(true);
      expect(checkAvailabilityMock).toHaveBeenCalledWith('test.plugin');
    });

    it('is false when checkAvailability reports an error instead of true', () => {
      checkAvailabilityMock.mockReturnValue({ error: 'cordova_not_available' });
      expect(TestPlugin.installed()).toBe(false);
    });
  });

  describe('getPlugin', () => {
    it('reads the plugin ref off window', () => {
      const plugin = { foo: 'bar' };
      (window as any).test = { plugin };
      expect(TestPlugin.getPlugin()).toBe(plugin);
    });

    it('returns null when the ref is not on window', () => {
      expect(TestPlugin.getPlugin()).toBeNull();
    });

    it('returns null when window is undefined', () => {
      vi.stubGlobal('window', undefined);
      expect(TestPlugin.getPlugin()).toBeNull();
    });
  });
});
