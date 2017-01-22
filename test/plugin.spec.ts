/// <reference path="../typings/index.d.ts" />

import 'es6-shim';
import {Plugin, Cordova} from './../src/plugins/plugin';

declare let window: any;
window.plugins = {
  test: {}
};

const testPluginMeta = {
  pluginName: 'Test',
  plugin: 'cordova-plugin-test',
  pluginRef: 'plugins.test',
  repo: 'https://github.com/apache/cordova-plugin-test',
  platforms: ['Android', 'iOS']
};

describe('plugin', () => {

  it('sync method', () => {

    window.plugins.test.syncMethod = () => {
      return 'syncResult';
    };

    @Plugin(testPluginMeta)
    class Test {

      @Cordova({
        sync: true
      })
      static syncMethod(arg: any): boolean { return; };

    }

    const spy = spyOn(window.plugins.test, 'syncMethod').and.callThrough();
    const result = Test.syncMethod('foo');
    expect(result).toEqual('syncResult');
    expect(spy).toHaveBeenCalledWith('foo');

  });

  it('normal order callback', done => {

    window.plugins.test.normalOrderCallback = (args, success, error) => {
      success('normalOrderCallback');
    };

    @Plugin(testPluginMeta)
    class Test {
      @Cordova()
      static normalOrderCallback(args: any): Promise<any> { return; }
    }

    const spy = spyOn(window.plugins.test, 'normalOrderCallback').and.callThrough();
    Test.normalOrderCallback('foo').then(result => {
      expect(result).toEqual('normalOrderCallback');
      done();
    });
    expect(spy.calls.mostRecent().args[0]).toEqual('foo');

  });

  it('reverse order callback', done => {

    window.plugins.test.reverseOrderCallback = (success, error, args) => {
      success('reverseOrderCallback');
    };

    @Plugin(testPluginMeta)
    class Test {

      @Cordova({
        callbackOrder: 'reverse'
      })
      static reverseOrderCallback(args: any): Promise<any> { return; }

    }

    const spy = spyOn(window.plugins.test, 'reverseOrderCallback').and.callThrough();
    Test.reverseOrderCallback('foo').then(result => {
      expect(result).toEqual('reverseOrderCallback');
      done();
    });
    expect(spy.calls.mostRecent().args[2]).toEqual('foo');

  });

  it('node style callback', done => {

    window.plugins.test.nodeStyleCallback = (args, done) => {
      done(null, 'nodeStyleCallback');
    };

    @Plugin(testPluginMeta)
    class Test {

      @Cordova({
        callbackStyle: 'node'
      })
      static nodeStyleCallback(args: any): Promise<any> { return; }

    }

    const spy = spyOn(window.plugins.test, 'nodeStyleCallback').and.callThrough();
    Test.nodeStyleCallback('foo').then(result => {
      expect(result).toEqual('nodeStyleCallback');
      done();
    });
    expect(spy.calls.mostRecent().args[0]).toEqual('foo');

  });

  it('object style callback', done => {

    window.plugins.test.objectStyleCallback = (args, {success}) => {
      success('objectStyleCallback');
    };

    @Plugin(testPluginMeta)
    class Test {

      @Cordova({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'error'
      })
      static objectStyleCallback(args: any): Promise<any> { return; }

    }

    const spy = spyOn(window.plugins.test, 'objectStyleCallback').and.callThrough();
    Test.objectStyleCallback('foo').then(result => {
      expect(result).toEqual('objectStyleCallback');
      done();
    });
    expect(spy.calls.mostRecent().args[0]).toEqual('foo');

  });

  it('reverse callback at the end of the function', done => {

    window.plugins.test.reverseEndCallback = (args, error, success) => {
      success('Success');
    };

    @Plugin(testPluginMeta)
    class Test {

      @Cordova({
        successIndex: 2,
        errorIndex: 1
      })
      static reverseEndCallback(args: any): Promise<any> { return; }

    }

    const spy = spyOn(window.plugins.test, 'reverseEndCallback').and.callThrough();
    const cb = (result) => {
      expect(result).toEqual('Success');
      done();
    };

    Test.reverseEndCallback('foo').then(cb, cb);

    expect(spy.calls.mostRecent().args[0]).toEqual('foo');
    expect(spy.calls.mostRecent().args[1]).toBeDefined();
    expect(spy.calls.mostRecent().args[2]).toBeDefined();
    expect(spy.calls.mostRecent().args[3]).toBeUndefined();

  });

});
