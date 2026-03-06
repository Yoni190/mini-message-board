const { Router } = require('express')
const { getIndex } = require('../controllers/indexController')

const router = Router()

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    }
]

router.get('/', getIndex)

module.exports = router