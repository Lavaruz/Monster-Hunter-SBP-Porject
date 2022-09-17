const express = require('express')
const {fetchingAPI} = require('../../model/mhAPI.model')

const armorRoute = express.Router()

armorRoute.get('/', async(req,res)=> {
    res.render('armor')
})

module.exports = armorRoute