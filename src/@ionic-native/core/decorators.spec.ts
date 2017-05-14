import { Plugin, Cordova, CordovaProperty } from './decorators';
import { IonicNativePlugin } from './ionic-native-plugin';

declare const window: any;

window['myPlugin'] = {

  hello: () => 'world',
  key: 'value'

};

describe('Decorators', () => {

  @Plugin({
    pluginName: 'MyPlugin',
    pluginRef: 'myPlugin',
    repo: '',
    plugin: 'cordova-plugin-my-plugin'
  })
  class MyPlugin extends IonicNativePlugin {

    @CordovaProperty
    key: string;

    @Cordova({ sync: true })
    hello(): string { return; }

  }

  let instance: MyPlugin;

  beforeEach(() => {
    instance = new MyPlugin();
  });

  describe('Plugin', () => {

    it('should set class properties', () => {
      expect(MyPlugin.getPluginName()).toEqual('MyPlugin');
      expect(MyPlugin.getPluginRef()).toEqual('myPlugin');
    });

  });

  describe('Cordova', () => {

    it('should do a sync function', () => {
      expect(instance.hello()).toEqual('world');
    });

  });

  describe('CordovaProperty', () => {

    it('should return property value', () => {
      expect(instance.key).toEqual('value');
    });

    it('should set property value', () => {
      instance.key = 'value2';
      expect(instance.key).toEqual('value2');
    });

  });

});
