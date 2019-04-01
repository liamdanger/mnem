#! /usr/bin/env node

const yargs = require('yargs')

const add = require('./commands/add')
const remove = require('./commands/remove')
const get = require('./commands/get')
const list = require('./commands/list')

return yargs
    .command(add)
    .command(remove)
    .command(get)
    .command(list)
    .help()
    .argv
