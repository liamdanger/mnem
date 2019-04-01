const storage = require('node-persist')

module.exports = {
    command: 'list',
    aliases: ['ls'],
    desc: 'List available strings',
    handler: async () => {
        await storage.init()
        const keys = await storage.keys()

        console.log(keys.join(', '))
    }
}
