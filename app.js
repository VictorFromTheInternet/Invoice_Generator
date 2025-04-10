const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

const views_router = require('./routes/views_router')
const pdf_router = require('./routes/pdf_router')
const submission_router = require('./routes/submission_router')
const logger = require('./middleware/logging')



const app = express()
const port = process.env.PORT || 3000
const domain = (process.env.NODE_ENV == 'prod') ? process.env.DOMAIN : 'http://localhost'
const MONGO_URI = process.env.MONGO_URI

// db connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err))

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use('/', logger)

// routes
app.use(express.static(path.join(__dirname, "public")));
app.use('/', views_router)
app.use('/', pdf_router)
app.use('/invoice', submission_router)




app.listen(port, ()=>{
    console.log(`Server Started`)
    console.log(`Listening on : ${domain}:${port}`)
})