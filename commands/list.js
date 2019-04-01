const storage = require('node-persist')

module.exports = {
    command: 'list',
    aliases: ['ls'],
    desc: 'List strings by key',
    handler: async () => {
        await storage.init()
        const keys = await storage.keys()

        console.log(keys.join(', '))
    }
}
