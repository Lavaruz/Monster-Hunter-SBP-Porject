const express = require('express')

const homeRoute = express.Router()

homeRoute.get('/', async(req,res)=> {
    res.render('index')
})

module.exports = homeRoute