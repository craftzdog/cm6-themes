const { watch } = require('@marijn/buildtool')
const { resolve } = require('path')
const fs = require('fs')

const workspacePath = resolve(__dirname, '..', 'packages')
const packages = fs
  .readdirSync(workspacePath)
  .filter(file => fs.lstatSync(resolve(workspacePath, file)).isDirectory())

watch(packages.map(p => resolve(workspacePath, p, 'src', 'index.ts')))
