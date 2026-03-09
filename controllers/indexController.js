const db = require('../db/queries')
const { body, validationResult, matchedData } = require('express-validator')


const validateData = [
    body("message").trim()
        .isLength({ min: 5, max: 200 }).withMessage('Please enter a message between 5 and 200 chars long.'),
    body("name").trim()
        .isLength({ min: 5, max: 200}).withMessage('Your name must be at least 5 chars long.'),
]


exports.getIndex = async (req, res) => {
    const messages = await db.getMessages()
    res.render('index', { messages: messages })
}

exports.getMessageForm = async (req, res) => {
    res.render('form')
}

exports.createMessage = [
    validateData,
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).render('form', {
                errors: errors.array()
            })
        }

        const { message, name } = matchedData(req)
        await db.createMessage(message, name)
        res.redirect('/')
    }
]

// async function createMessage(req, res) {
//     await db.createMessage(req.body.message, req.body.name)
//     res.redirect('/')
// }

exports.showDetails = async (req, res) => {
    const messages = await db.getMessage(req.params.id)
    res.render('details', { message: messages[0] })
}
