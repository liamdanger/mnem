#! /usr/bin/env node

const yargs = require('yargs')

return yargs
    .commandDir('commands')
    .demandCommand()
    .help()
    .argv
