#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const childProcess = require("child_process");
console.log('Linting project...');
childProcess.execSync('eslint --fix "src/**/*.ts" --config "./node_modules/@tsaude/typescript-toolchain/.eslintrc.json"', { stdio: 'inherit' });
console.log(colors.green('Success!'));
//# sourceMappingURL=eslint.js.map