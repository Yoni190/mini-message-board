const express = require('express')
const path = require('node:path')
const app = express()

const port = process.env.PORT || 3000

const indexRouter = require('./routes/indexRoute')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(indexRouter)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.listen(port, (error) => {
    if(error) {
        console.log(error)
    }

    console.log(`Server running on PORT ${port}`)
})