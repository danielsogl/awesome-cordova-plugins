/**
 * Guards the decorator settings in vitest.config.ts. Vite 8 transforms with oxc, which defaults to
 * TC39 decorators; without `oxc.decorator.legacy` this file fails to transform, so any spec that
 * so much as imports a source file containing decorator syntax cannot compile.
 *
 * Note this only covers the syntax. The `@Cordova`/`@Plugin` decorators the
 * plugins use are `export declare const` in decorators/interfaces.ts — types
 * with no runtime implementation, stripped by the build transformers — so they
 * are not callable from a test.
 */
function marker(value: string): ClassDecorator & MethodDecorator {
  return ((target: object, key?: string | symbol) => {
    const holder = key === undefined ? target : (target as Record<string, unknown>);
    (holder as Record<string, unknown>)[`__marker_${String(key ?? 'class')}`] = value;
  }) as ClassDecorator & MethodDecorator;
}

@marker('on-class')
class Decorated {
  @marker('on-method')
  method(): number {
    return 1;
  }
}

describe('decorator syntax', () => {
  it('compiles under the configured SWC transform', () => {
    expect((Decorated as unknown as Record<string, unknown>).__marker_class).toBe('on-class');
    expect(new Decorated().method()).toBe(1);
  });

  it('applies method decorators to the prototype', () => {
    const proto = Decorated.prototype as unknown as Record<string, unknown>;
    expect(proto.__marker_method).toBe('on-method');
  });
});
