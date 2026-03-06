const { Router } = require('express')
const indexController  = require('../controllers/indexController')

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

router.get('/', indexController.getIndex(messages))
router.get('/new', indexController.getMessageForm)

module.exports = router