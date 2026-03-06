function getIndex (messages) {
    return function (req, res) {
        res.render('index', { messages: messages })
    }
}

function getMessageForm(req, res) {
    res.render('form')
}

function createMessage(req, res) {
    console.log(req.body)
    res.send(req.body)
}

module.exports = { getIndex, getMessageForm, createMessage }