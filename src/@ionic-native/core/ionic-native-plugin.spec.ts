import { IonicNativePlugin } from './ionic-native-plugin';

describe('IonicNativePlugin', () => {

  class MyPlugin extends IonicNativePlugin {

    hello(): string {
      return 'world';
    }

  }

  class MockClass extends MyPlugin {

    hello(): string {
      return 'two worlds';
    }

  }

  let instance: MyPlugin;

  beforeEach(() => {
    instance = new MyPlugin();
  });

  it('should extend class', () => {
    expect(typeof MyPlugin.getPluginName).toEqual('function');
  });

  it('should set mock class after creating instance', () => {
    instance.useClass(MockClass);
    expect(instance.hello()).toEqual('two worlds');
  });

  it('should set mock class before creating instance', () => {
    MyPlugin.useClass(MockClass);
    expect(new MyPlugin().hello()).toEqual('two worlds');
  });

});
