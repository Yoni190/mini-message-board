const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(port, (error) => {
    if(error) {
        console.log(error)
    }

    console.log(`Server running on PORT ${port}`)
})