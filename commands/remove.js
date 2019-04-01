const storage = require('node-persist')
const chalk = require('chalk')

const storeOptions = require('../storage')

module.exports = {
    command: 'remove <key>',
    aliases: ['rm'],
    desc: 'Stop remembering a string',
    handler: async ({ key }) => {
        await storage.init(storeOptions)
        await storage.removeItem(key)
        console.log(chalk`{green ✓} {dim ${key}} deleted`)
    }
}
