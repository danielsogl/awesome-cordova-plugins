import { cleanupNgx, generateDeclarationFiles, transpileNgx, transpileNgxCore } from '../build/ngx';

transpileNgxCore();
transpileNgx();
generateDeclarationFiles();
cleanupNgx();
