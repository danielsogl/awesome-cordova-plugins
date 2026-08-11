import { describe, expect, it } from 'vitest';

import * as core from './index';

/**
 * The barrel calls checkReady() at module scope — that call is the package's only side effect and
 * the reason core is published with `sideEffects: ["./index.js"]`. Under vitest `process` exists,
 * so checkReady returns immediately; this only asserts the module loads and re-exports its surface.
 */
describe('core barrel', () => {
  it('re-exports the plugin base class', () => {
    expect(typeof core.AwesomeCordovaNativePlugin).toBe('function');
  });

  it('re-exports the runtime helpers the generated wrappers call', () => {
    for (const name of [
      'checkAvailability',
      'instanceAvailability',
      'wrap',
      'getPromise',
      'cordova',
      'cordovaInstance',
      'cordovaPropertyGet',
      'cordovaPropertySet',
      'instancePropertyGet',
      'instancePropertySet',
      'cordovaFunctionOverride',
    ]) {
      expect(typeof (core as Record<string, unknown>)[name], name).toBe('function');
    }
  });

  it('does not export the decorators themselves — they are types the build strips', () => {
    expect((core as Record<string, unknown>).Cordova).toBeUndefined();
    expect((core as Record<string, unknown>).Plugin).toBeUndefined();
  });
});
