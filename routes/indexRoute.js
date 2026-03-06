const { Router } = require('express')
const indexController  = require('../controllers/indexController')

const router = Router()


router.get('/', indexController.getIndex)
router.get('/new', indexController.getMessageForm)
router.post('/new', indexController.createMessage)

module.exports = router