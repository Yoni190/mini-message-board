const db = require('../db/queries')

async function getIndex (req, res) {
    const messages = await db.getMessages()
    res.render('index', { messages: messages })
}

function getMessageForm(req, res) {
    res.render('form')
}

function createMessage(req, res) {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date() })
    res.redirect('/')
}

function showDetails(req, res) {
    res.render('details', { message: messages[req.params.id]})
}

module.exports = { getIndex, getMessageForm, createMessage, showDetails }