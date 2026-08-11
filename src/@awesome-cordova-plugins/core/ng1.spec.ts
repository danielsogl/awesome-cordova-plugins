import { afterEach, describe, expect, it, vi } from 'vitest';

import { initAngular1 } from './ng1';

const win: any = window;

afterEach(() => {
  vi.unstubAllGlobals();
  delete win.angular;
});

describe('initAngular1', () => {
  it('does nothing when window is undefined', () => {
    vi.stubGlobal('window', undefined);
    expect(() => initAngular1({ Foo: class {} })).not.toThrow();
  });

  it('does nothing when angular is not present', () => {
    expect(() => initAngular1({ Foo: class {} })).not.toThrow();
  });

  it('registers a $cordova service per plugin', () => {
    const service = vi.fn();
    const module = vi.fn(() => ({ service }));
    const copy = vi.fn((cls: any) => Object.create({ cls }));
    win.angular = { module, copy };

    class Foo {}
    class Bar {}
    initAngular1({ Foo, Bar });

    expect(module).toHaveBeenCalledWith('ionic.native', []);
    expect(service).toHaveBeenCalledTimes(2);
    expect(service.mock.calls.map((call) => call[0])).toEqual(['$cordovaFoo', '$cordovaBar']);

    const [serviceName, [factory]] = service.mock.calls[0] as [string, [() => any]];
    expect(serviceName).toBe('$cordovaFoo');

    const funcs = factory();
    expect(copy).toHaveBeenCalledWith(Foo);
    expect(Object.getPrototypeOf(funcs).name).toBe('Foo');
    expect(Object.getPrototypeOf(funcs).cls).toBe(Foo);
  });
});
