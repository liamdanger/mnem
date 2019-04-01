const storage = require('node-persist')
const chalk = require('chalk')

module.exports = {
    command: 'remove <key>',
    aliases: ['rm'],
    desc: 'Stop remembering a string',
    handler: async ({ key }) => {
        await storage.init()
        await storage.removeItem(key)
        console.log(chalk`{green ✓} {dim ${key}} deleted`)
    }
}
