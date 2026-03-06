function getIndex (messages) {

    return function (req, res) {
        res.render('index', { messages: messages })
    }
}

module.exports = { getIndex }