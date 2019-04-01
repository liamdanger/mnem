const storage = require('node-persist')
const chalk = require('chalk')

const storeOptions = require('../storage')

module.exports = {
    command: 'add <key> [value]',
    aliases: ['a', 'update', 'u'],
    desc: 'Remember a string at provided key',
    handler: async ({key, value }) => {
        await storage.init(storeOptions)
        await storage.setItem(key, value)
        console.log(chalk`{green ✓} {dim ${key}:} ${value}`)
    }
}
