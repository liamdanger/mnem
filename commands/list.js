const storage = require('node-persist')
const storeOptions = require('../storage')

module.exports = {
    command: 'list',
    aliases: ['ls'],
    desc: 'List available strings',
    handler: async () => {
        await storage.init(storeOptions)
        const keys = await storage.keys()

        console.log(keys.join(', '))
    }
}
