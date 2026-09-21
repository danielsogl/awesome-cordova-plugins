import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { cordovaPropertyGet, cordovaPropertySet } from './cordova-property';

declare const window: any;

class MockPlugin {
  static getPluginRef(): string {
    return 'mockPropertyPlugin';
  }

  static getPluginName(): string {
    return 'MockPlugin';
  }

  static getPluginInstallName(): string {
    return 'cordova-plugin-mock';
  }
}

describe('cordova properties', () => {
  let plugin: MockPlugin;

  beforeEach(() => {
    plugin = new MockPlugin();
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    delete window.cordova;
    delete window.mockPropertyPlugin;
    vi.restoreAllMocks();
  });

  describe('when the plugin is available', () => {
    beforeEach(() => {
      window.cordova = {};
      window.mockPropertyPlugin = { version: '1.0.0' };
    });

    it('reads the property from the plugin', () => {
      expect(cordovaPropertyGet(plugin, 'version')).toBe('1.0.0');
    });

    it('writes the property through to the plugin', () => {
      cordovaPropertySet(plugin, 'version', '2.0.0');
      expect(window.mockPropertyPlugin.version).toBe('2.0.0');
    });
  });

  describe('when the plugin is not installed', () => {
    beforeEach(() => {
      window.cordova = {};
    });

    it('returns null on get', () => {
      expect(cordovaPropertyGet(plugin, 'version')).toBeNull();
    });

    it('does nothing on set', () => {
      cordovaPropertySet(plugin, 'version', '2.0.0');
      expect(window.mockPropertyPlugin).toBeUndefined();
    });
  });

  describe('when cordova is not available', () => {
    it('returns null on get', () => {
      expect(cordovaPropertyGet(plugin, 'version')).toBeNull();
    });

    it('does nothing on set', () => {
      cordovaPropertySet(plugin, 'version', '2.0.0');
      expect(window.mockPropertyPlugin).toBeUndefined();
    });
  });
});
