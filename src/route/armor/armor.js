const express = require('express')

const {getArmorById} = require('../../model/fetchMH.axios')

const armorRoute = express.Router()

armorRoute.get('/', async(req,res)=> {
    res.render('armor')
})
armorRoute.get('/:id', (req,res) => {
    getArmorById(req.params.id)
        .then(armor => {
            res.render('armor-detail', {
                armor
            })
        })
})

module.exports = armorRoute