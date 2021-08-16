import {
  cleanupNgx,
  generateLegacyBundles,
  generateDeclarationFiles,
  modifyMetadata,
  transpileNgx,
  transpileNgxCore,
} from '../build/ngx';

transpileNgxCore();
transpileNgx();
generateLegacyBundles();
generateDeclarationFiles();
modifyMetadata();
cleanupNgx();
