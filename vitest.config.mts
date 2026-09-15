import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Vite 8 transforms with oxc, which defaults to TC39 decorators. core/ is compiled with
  // experimentalDecorators, so the transform has to be told. No emitDecoratorMetadata needed:
  // @Cordova and @Plugin are declaration-only types the build strips, nothing reads design:type.
  oxc: {
    decorator: { legacy: true },
  },
  test: {
    // core/ reads window and window.document; the decorators register listeners on them
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', 'scripts/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      // Only core/ is meaningfully testable. The 266 plugin wrappers are decorator stubs whose
      // bodies the build replaces, so there is nothing of their own to exercise.
      include: ['src/@awesome-cordova-plugins/core/**/*.ts'],
      exclude: ['**/*.spec.ts', '**/interfaces.ts'],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});
