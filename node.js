'use strict'

const express = require('express')

const app = express()
app.use(express.static('dist'))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD') // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.get('/', function (req, res, next) {
    // Handle the get for this route
})

app.post('/', function (req, res, next) {
    // Handle the post for this route
})
