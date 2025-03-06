const express = require('express')
require('dotenv').config()
const path = require('path')

const views_router = require('./routes/views_router')
const pdf_router = require('./routes/pdf_router')
const logger = require('./middleware/logging')



const app = express()
const port = process.env.PORT || 3000
const domain = process.env.DOMAIN || 'http://localhost'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Middleware
// app.use('/', logger)

// routes
app.use(express.static(path.join(__dirname, "public")));
app.use('/', views_router)
app.use('/', pdf_router)




app.listen(port, ()=>{
    console.log(`Server Started`)
    console.log(`Listening on : ${domain}:${port}`)
})