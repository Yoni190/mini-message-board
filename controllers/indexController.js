const db = require('../db/queries')

async function getIndex (req, res) {
    const messages = await db.getMessages()
    res.render('index', { messages: messages })
}

function getMessageForm(req, res) {
    res.render('form')
}

async function createMessage(req, res) {
    await db.createMessage(req.body.message, req.body.name)
    res.redirect('/')
}

async function showDetails(req, res) {
    const messages = await db.getMessage(req.params.id)
    res.render('details', { message: messages[0] })
}

module.exports = { getIndex, getMessageForm, createMessage, showDetails }