import 'core-js';
import { Plugin, Cordova, CordovaProperty, CordovaCheck, CordovaInstance, InstanceProperty } from './decorators';
import { IonicNativePlugin } from './ionic-native-plugin';
import { ERR_CORDOVA_NOT_AVAILABLE, ERR_PLUGIN_NOT_INSTALLED } from './plugin';
import { Observable } from 'rxjs/Observable';

declare const window: any;

class TestObject {

  constructor(public _objectInstance: any) {}

  @InstanceProperty
  name: string;

  @CordovaInstance({ sync: true })
  pingSync(): string { return; }

  @CordovaInstance()
  ping(): Promise<any> { return; }

}

@Plugin({
  pluginName: 'TestPlugin',
  pluginRef: 'testPlugin',
  repo: '',
  plugin: 'cordova-plugin-my-plugin',
  platforms: ['Android', 'iOS']
})
class TestPlugin extends IonicNativePlugin {

  @CordovaProperty
  name: string;

  @Cordova({ sync: true })
  pingSync(): string { return; }

  @Cordova()
  ping(): Promise<string> { return; }

  @CordovaCheck()
  customPing(): Promise<string> {
    return Promise.resolve('pong');
  }

  create(): TestObject {
    return new TestObject(TestPlugin.getPlugin().create());
  }

  @Cordova({
    destruct: true
  })
  destructPromise(): Promise<any> { return; }

  @Cordova({
    destruct: true,
    observable: true
  })
  destructObservable(): Observable<any> { return; }

}

function definePlugin() {
  (window as any).testPlugin = {
    name: 'John Smith',
    ping: (success: Function, error: Function) => success('pong'),
    pingSync: () => 'pong',
    create: function TestObject() {
      this.pingSync = () => 'pong';
      this.ping = (success: Function, error: Function) => success('pong');
      this.name = 'John Smith';
      return this;
    },
    destructPromise: (success: Function) => success('hello', 'world'),
    destructObservable: (success: Function) => success('hello', 'world')
  };
}

describe('Regular Decorators', () => {

  let plugin: TestPlugin;

  beforeEach(() => {
    plugin = new TestPlugin();
    definePlugin();
  });

  describe('Plugin', () => {

    it('should set pluginName', () => {
      expect(TestPlugin.getPluginName()).toEqual('TestPlugin');
    });

    it('should set pluginRef', () => {
      expect(TestPlugin.getPluginRef()).toEqual('testPlugin');
    });

    it('should return original plugin object', () => {
      expect(TestPlugin.getPlugin()).toEqual(window.testPlugin);
    });

    it('should return supported platforms', () => {
      expect(TestPlugin.getSupportedPlatforms()).toEqual(['Android', 'iOS']);
    });

  });

  describe('Cordova', () => {

    it('should do a sync function', () => {
      expect(plugin.pingSync()).toEqual('pong');
    });

    it('should do an async function', (done: Function) => {
      plugin.ping()
        .then(res => {
          expect(res).toEqual('pong');
          done();
        })
        .catch(e => {
          expect(e).toBeUndefined();
          done('Method should have resolved');
        });
    });

    it('should throw plugin_not_installed error', (done: Function) => {

      delete window.testPlugin;
      window.cordova = true;

      expect(<any>plugin.pingSync()).toEqual(ERR_PLUGIN_NOT_INSTALLED);

      plugin.ping()
        .catch(e => {
          expect(e).toEqual(ERR_PLUGIN_NOT_INSTALLED.error);
          delete window.cordova;
          done();
        });

    });

    it('should throw cordova_not_available error', (done: Function) => {

      delete window.testPlugin;

      expect(<any>plugin.pingSync()).toEqual(ERR_CORDOVA_NOT_AVAILABLE);

      plugin.ping()
        .catch(e => {
          expect(e).toEqual(ERR_CORDOVA_NOT_AVAILABLE.error);
          done();
        });

    });

  });

  describe('CordovaProperty', () => {

    it('should return property value', () => {
      expect(plugin.name).toEqual('John Smith');
    });

    it('should set property value', () => {
      plugin.name = 'value2';
      expect(plugin.name).toEqual('value2');
    });

  });

  describe('CordovaCheck', () => {

    it('should run the method when plugin exists', (done) => {
      plugin.customPing()
        .then(res => {
          expect(res).toEqual('pong');
          done();
        });
    });

    it('shouldnt run the method when plugin doesnt exist', (done) => {
      delete window.testPlugin;
      window.cordova = true;
      plugin.customPing()
        .catch(e => {
          expect(e).toEqual(ERR_PLUGIN_NOT_INSTALLED.error);
          done();
        });
    });

  });

  describe('CordovaOptions', () => {

    describe('destruct', () => {

      it('should destruct values returned by a Promise', (done) => {
        plugin.destructPromise()
          .then((args: any[]) => {
            expect(args).toEqual(['hello', 'world']);
            done();
          });
      });

      it('should destruct values returned by an Observable', (done) => {
        plugin.destructObservable()
          .subscribe((args: any[]) => {
            expect(args).toEqual(['hello', 'world']);
            done();
          });
      });

    });

  });

});

describe('Instance Decorators', () => {

  let instance: TestObject,
    plugin: TestPlugin;

  beforeEach(() => {
    definePlugin();
    plugin = new TestPlugin();
    instance = plugin.create();
  });

  describe('Instance plugin', () => {



  });

  describe('CordovaInstance', () => {

    it('should call instance async method', (done) => {
      instance.ping()
        .then(r => {
          expect(r).toEqual('pong');
          done();
        });
    });

    it('should call instance sync method', () => {
      expect(instance.pingSync()).toEqual('pong');
    });

    it('shouldnt call instance method when _objectInstance is undefined', () => {

      delete instance._objectInstance;
      instance.ping()
        .then(r => {
          expect(r).toBeUndefined();
        })
        .catch(e => {
          expect(e).toBeUndefined();
        });

    });

  });

  describe('InstanceProperty', () => {
    it('should return property value', () => {
      expect(instance.name).toEqual('John Smith');
    });

    it('should set property value', () => {
      instance.name = 'John Cena';
      expect(instance.name).toEqual('John Cena');
    });
  });

});
