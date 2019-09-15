#!/usr/bin/env node

import * as colors from 'colors'
import * as childProcess from 'child_process'

console.log('Linting project...')

childProcess.execSync('eslint --fix "src/**/*.ts" --config "./node_modules/@tsaude/typescript-toolchain/.eslintrc.json"', { stdio: 'inherit' })

console.log(colors.green('Success!'))
