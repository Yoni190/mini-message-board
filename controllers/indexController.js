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

function getIndex (req, res) {
    res.render('index', { messages: messages })
}

function getMessageForm(req, res) {
    res.render('form')
}

function createMessage(req, res) {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date() })
    res.redirect('/')
}

module.exports = { getIndex, getMessageForm, createMessage }