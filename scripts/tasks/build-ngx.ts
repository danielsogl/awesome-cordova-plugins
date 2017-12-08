import { generateDeclarationFiles, transpileNgx, transpileNgxCore, modifyMetadata, cleanupNgx } from '../build/ngx';

transpileNgxCore();
transpileNgx();
generateDeclarationFiles();
modifyMetadata();
cleanupNgx();
