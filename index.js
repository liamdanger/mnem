#! /usr/bin/env node

const yargs = require('yargs')
const keyCompletion = require('./completion')

return yargs
    .commandDir('commands')
    .demandCommand()
    .completion('completion', keyCompletion)
    .help()
    .argv
