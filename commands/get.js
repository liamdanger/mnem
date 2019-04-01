const storage = require('node-persist')

module.exports = {
    command: 'get <key>',
    aliases: ['g'],
    desc: 'Retrieve a string',
    handler: async ({ key }) => {
        await storage.init()
        console.log(await storage.getItem(key))
    }
}
