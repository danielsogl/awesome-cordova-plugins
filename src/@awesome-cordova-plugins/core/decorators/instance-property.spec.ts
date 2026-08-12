import { describe, expect, it } from 'vitest';

import { instancePropertyGet, instancePropertySet } from './instance-property';

describe('instance properties', () => {
  it('reads a property from the object instance', () => {
    expect(instancePropertyGet({ _objectInstance: { version: '1.0.0' } }, 'version')).toBe('1.0.0');
  });

  it('returns null for a falsy property value', () => {
    expect(instancePropertyGet({ _objectInstance: { count: 0 } }, 'count')).toBeNull();
  });

  it('returns null when there is no object instance', () => {
    expect(instancePropertyGet({}, 'version')).toBeNull();
  });

  it('writes a property to the object instance', () => {
    const pluginObj: any = { _objectInstance: {} };
    instancePropertySet(pluginObj, 'version', '2.0.0');
    expect(pluginObj._objectInstance.version).toBe('2.0.0');
  });

  it('does nothing when there is no object instance', () => {
    const pluginObj: any = {};
    instancePropertySet(pluginObj, 'version', '2.0.0');
    expect(pluginObj._objectInstance).toBeUndefined();
  });
});
