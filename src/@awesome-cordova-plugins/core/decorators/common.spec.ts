import { callCordovaPlugin, wrapPromise } from './common';

declare const window: any;

class MockPlugin {
  static getPluginRef(): string {
    return 'mockPlugin';
  }

  static getPluginName(): string {
    return 'MockPlugin';
  }

  static getPluginInstallName(): string {
    return '';
  }

  create(): MockInstancePluginObject {
    return new MockInstancePluginObject();
  }
}

class MockInstancePluginObject {
  _pluginInstance: MockCordovaPlugin;

  constructor() {
    this._pluginInstance = new MockCordovaPlugin();
  }
}

class MockCordovaPlugin {
  static ping = jest.fn((arg: string) => 'pong');
  static pingAsync = jest.fn((arg: string, success: Function, error: Function) => success('pong'));
  ping = jest.fn((arg: string) => 'pong');
  pingAsync = jest.fn((arg: string, success: Function, error: Function) => success('pong'));
}

describe('Common decorator functions', () => {
  let plugin: MockPlugin, instancePluginObject: MockInstancePluginObject;

  beforeAll(() => {
    window.mockPlugin = MockCordovaPlugin;
    plugin = new MockPlugin();
    instancePluginObject = plugin.create();
  });

  describe('callCordovaPlugin', () => {
    test('should return value from cordova plugin', () => {
      expect(callCordovaPlugin(plugin, 'ping', ['pingpong'])).toBe('pong');
    });

    test('original method should have been called', () => {
      expect(MockCordovaPlugin.ping.mock.calls.length).toBe(1);
    });

    test('original method should have received args', () => {
      expect(MockCordovaPlugin.ping.mock.calls[0][0]).toBe('pingpong');
    });
  });

  describe('wrapPromise', () => {
    test('should return a promise that resolves with a value', async () => {
      expect(await wrapPromise(plugin, 'pingAsync', ['pingpong'])).toBe('pong');
    });

    test('original method should have been called', () => {
      expect(MockCordovaPlugin.pingAsync.mock.calls.length).toBe(1);
    });

    test('original method should have received args', () => {
      expect(MockCordovaPlugin.pingAsync.mock.calls[0][0]).toBe('pingpong');
      expect(typeof MockCordovaPlugin.pingAsync.mock.calls[0][1]).toBe('function');
      expect(typeof MockCordovaPlugin.pingAsync.mock.calls[0][2]).toBe('function');
    });
  });

  describe('wrapObservable', () => {
    test('should return an observable that emits a value', async () => {});

    test('original method should have been called', () => {});

    test('original method should have received args', () => {});
  });

  describe('wrapEventObservable', () => {
    test('should return an observable that wraps an event listener', async () => {});
  });

  describe('callInstance', () => {
    test('should call an instance method', async () => {});

    test('original method should have been called', () => {
      // expect(instancePluginObject._pluginInstance.ping.mock.calls.length).toBe(1);
    });

    test('original method should have received args', () => {
      // expect(instancePluginObject._pluginInstance.ping.mock.calls[0][0]).toBe('pingpong');
    });
  });
});
