import {
  cleanupNgx,
  generateDeclarationFiles,
  modifyMetadata,
  transpileNgx,
  transpileNgxCore
} from '../build/ngx';

transpileNgxCore();
transpileNgx();
generateDeclarationFiles();
modifyMetadata();
cleanupNgx();
