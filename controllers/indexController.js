function getIndex (messages) {
    return function (req, res) {
        res.render('index', { messages: messages })
    }
}

function getMessageForm(req, res) {
    res.render('form')
}

module.exports = { getIndex, getMessageForm }