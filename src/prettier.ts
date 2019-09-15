#!/usr/bin/env node

import * as colors from 'colors'
import * as childProcess from 'child_process'

console.log('Formatting project...')

const prettierConfigDir = './node_modules/@tsaude/typescript-toolchain/prettier'

childProcess.execSync(`prettier --config ${prettierConfigDir}/index.js --ignore-path ${prettierConfigDir}/ignore --write 'src/**/*'`, { stdio: 'inherit' })

console.log(colors.green('Success!'))
