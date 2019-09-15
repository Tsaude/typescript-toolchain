#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const childProcess = require("child_process");
console.log('Formatting project...');
const prettierConfigDir = './node_modules/@tsaude/typescript-toolchain/prettier';
childProcess.execSync(`prettier --config ${prettierConfigDir}/index.js --ignore-path ${prettierConfigDir}/ignore --write 'src/**/*'`, { stdio: 'inherit' });
console.log(colors.green('Success!'));
//# sourceMappingURL=prettier.js.map