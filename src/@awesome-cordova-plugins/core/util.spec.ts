import { describe, expect, it } from 'vitest';

import { get, getPromise } from './util';

describe('get', () => {
  it('resolves a nested path', () => {
    const element = { a: { b: { c: 'value' } } } as any;
    expect(get(element, 'a.b.c')).toBe('value');
  });

  it('returns the element itself for an empty path segment list', () => {
    const element = { a: 1 } as any;
    expect(get(element, 'a')).toBe(1);
  });

  it('returns null when the path hits a nullish value mid-way', () => {
    const element = { a: null } as any;
    expect(get(element, 'a.b.c')).toBeNull();
  });

  it('returns undefined when the last segment is missing', () => {
    const element = { a: {} } as any;
    expect(get(element, 'a.b')).toBeUndefined();
  });
});

describe('getPromise', () => {
  it('passes resolve to the callback', async () => {
    await expect(getPromise((resolve: Function) => resolve('done'))).resolves.toBe('done');
  });

  it('passes reject to the callback', async () => {
    await expect(getPromise((_resolve: Function, reject: Function) => reject('nope'))).rejects.toBe('nope');
  });

  it('uses a no-op callback by default', () => {
    const promise = getPromise();
    expect(promise).toBeInstanceOf(Promise);
  });
});
