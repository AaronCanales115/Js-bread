const express = require('express');
const breads = express.Router();
const bread = require('../models/breads.js')

//index
breads.get('/', (req, res) => {
    res.render('index', 
    {
        breads: bread,
        title: 'Index Page'
    })
    res.send(bread)
})

//show
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
})

module.exports = breads