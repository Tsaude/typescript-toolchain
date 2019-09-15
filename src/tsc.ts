#!/usr/bin/env node

import * as colors from 'colors'
import * as childProcess from 'child_process'

console.log('Compiling project...')

childProcess.execSync('rm -rf ./lib', { stdio: 'inherit' })
childProcess.execSync('tsc', { stdio: 'inherit' })

console.log(colors.green('Success!'))
