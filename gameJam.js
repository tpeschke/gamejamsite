const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , { server } = require('./server-config')
    , path = require('path')

const app = new express()
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

// ================================== \\

app.get('/code', (req, res) => {
    res.sendFile(path.join(__dirname + '/webpage/code.html'))
})

app.get('/rules', (req, res) => {
    res.sendFile(path.join(__dirname + '/webpage/rules.html'))
})

app.get('/assets/:file', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/' + req.params.file))
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/webpage/index.html'))
})

// ================================== \\

app.listen(server, _ => {
    console.log(`Drink deep the cup of bitter mercy ${server}`)
})