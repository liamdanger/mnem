#! /usr/bin/env node

const yargs = require('yargs')
const storage = require('node-persist')

const init = async () => await storage.init()

return yargs
    .command({
        command: 'list',
        aliases: ['ls'],
        desc: 'List available strings',
        handler: async () => {
            await init()
            console.log(await storage.keys())
        }
    })
    .command({
        command: 'get <key>',
        aliases: ['g'],
        desc: 'Retrieve a string',
        handler: async ({ key }) => {
            await init()
            console.log(await storage.getItem(key))
        }
    })
    .command({
        command: 'remove <key>',
        aliases: ['rm'],
        desc: 'Stop remembering a string',
        handler: async ({ key }) => {
            await init()
            await storage.removeItem(key)
            console.log(`removing string at ${key}`)
        }
    })
    .command({
        command: 'add <key> [value]',
        aliases: ['a', 'update', 'u'],
        desc: 'Remember a string at provided key (or update existing key)',
        handler: async ({key, value }) => {
            await init()
            await storage.setItem(key, value)
            console.log(`setting ${key} to ${value}`)
        }
    })
    .help()
    .argv
