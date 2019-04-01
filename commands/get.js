const storage = require('node-persist')
const storeOptions = require('../storage')

module.exports = {
    command: 'get <key>',
    aliases: ['g'],
    desc: 'Retrieve a string',
    handler: async ({ key }) => {
        await storage.init(storeOptions)

        console.log(await storage.getItem(key))
    }
}
