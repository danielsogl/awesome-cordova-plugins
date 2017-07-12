// This is to verify that new (FileTransfer.getPlugin)() works

import { Plugin, CordovaInstance } from './decorators';
import { checkAvailability } from './plugin';
import { IonicNativePlugin } from './ionic-native-plugin';

class FT {
  hello(): string {
    return 'world';
  }
}

(window as any).FileTransfer = () => new FT();

@Plugin({
  plugin: 'cordova-plugin-file-transfer',
  pluginRef: 'FileTransfer',
  repo: '',
  pluginName: 'FileTransfer'
})
export class FileTransfer extends IonicNativePlugin {
  create(): FileTransferObject {
    let instance: any;
    if (checkAvailability(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
      instance = new (FileTransfer.getPlugin())();
    }
    return new FileTransferObject(instance);
  }
}

export class FileTransferObject {

  constructor(public _objectInstance: any) {
    console.info('Creating a new FileTransferObject with instance: ', _objectInstance);
  }

  @CordovaInstance({ sync: true })
  hello(): string { return; }

}

describe('Mock FileTransfer Plugin', () => {

  let plugin: FileTransfer,
    instance: FileTransferObject;

  beforeAll(() => {
    plugin = new FileTransfer();
    instance = plugin.create();
  });

  it('should create a new FileTransfer plugin instance', () => {
    expect(plugin instanceof FileTransfer).toBeTruthy();
  });

  it('should create new FileTransferObject instance', () => {
    expect(instance instanceof FileTransferObject).toBeTruthy();
  });

  it('FileTransferObject instance should have _objectInstance property', () => {
    expect(instance._objectInstance).toBeDefined();
  });

  it('FileTransferObject.hello should return world', () => {
    console.info('instance hello is', instance.hello());
    expect(instance.hello()).toEqual('world');
  });

});
