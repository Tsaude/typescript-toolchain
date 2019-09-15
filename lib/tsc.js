#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const childProcess = require("child_process");
console.log('Compiling project...');
childProcess.execSync('rm -rf ./lib', { stdio: 'inherit' });
childProcess.execSync('tsc', { stdio: 'inherit' });
console.log(colors.green('Success!'));
//# sourceMappingURL=tsc.js.map