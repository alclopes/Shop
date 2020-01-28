const init = db => {
    const router = require('express').Router()
    const categories = require('../../controllers/categories')

    // router.get('/', (req, res) => res.send('Olá dda rota: admin_categories'))
    router.get('/', categories.adminGetCategories(db))
    router.get('/nova', categories.adminCreateCategory(db))
    router.post('/nova', categories.adminCreateCategory(db))
    
    return router
}

module.exports = init