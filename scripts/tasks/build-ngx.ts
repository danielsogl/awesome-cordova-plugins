import {
  cleanupNgx,
  generateLegacyBundles,
  generateDeclarationFiles,
  transpileNgx,
  transpileNgxCore,
} from '../build/ngx';

transpileNgxCore();
transpileNgx();
generateLegacyBundles();
generateDeclarationFiles();
cleanupNgx();
