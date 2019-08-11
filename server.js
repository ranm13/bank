const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/bankDB", { useNewUrlParser: true })


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', api)

const port = 1991
app.listen(port, function(){
    console.log('server is running')
})
