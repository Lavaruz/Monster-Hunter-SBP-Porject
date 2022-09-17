const express = require('express')
const app = express()
const path = require('path')

const homeRoute = require('./src/route/home/home')
const armorRoute = require('./src/route/armor/armor')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.use('/', homeRoute)
app.use('/armor', armorRoute)

app.listen(3000, () => console.log('server run at port 3000'))