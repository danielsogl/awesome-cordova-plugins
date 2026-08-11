import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  // SWC parses decorators only when asked to. Without this, any spec importing a file that uses
  // @Cordova()/@Injectable() fails to compile, which is why the shared runtime had no coverage.
  // legacyDecorator + decoratorMetadata mirror experimentalDecorators/emitDecoratorMetadata.
  transform: {
    '^.+\\.tsx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: { syntax: 'typescript', decorators: true },
          transform: { legacyDecorator: true, decoratorMetadata: true },
        },
      },
    ],
  },
  roots: ['<rootDir>/src', '<rootDir>/scripts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

export default config;
