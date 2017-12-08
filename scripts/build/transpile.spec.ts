// No real tests here, just helps in development

import {
  generateDeclarations,
  transpile,
} from './transpile';
import { modifyMetadata, transpileNgx, transpileNgxCore } from './ngx';

test('should build ngx core', () => {
  transpileNgxCore();
});

test('should generate declaration files', () => {
  generateDeclarations();
});

test('should get decorator info', () => {
  transpile();
});

test('should build angular', () => {
  transpileNgx();
});

test('should modify metadata', () => {
  modifyMetadata();
});
