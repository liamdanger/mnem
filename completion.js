const storage = require('node-persist')

module.exports = async current => {
    if (current === 'get' || current === 'g') {
        await storage.init()

        return await storage.keys()
    }
}
