const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const indexRouter = require('./routes/indexRoute')

app.use(indexRouter)

app.listen(port, (error) => {
    if(error) {
        console.log(error)
    }

    console.log(`Server running on PORT ${port}`)
})