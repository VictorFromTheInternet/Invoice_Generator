const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const domain = (process.env.NODE_ENV == 'prod') ? process.env.DOMAIN : 'http://localhost'
const MONGO_URI = process.env.MONGO_URI


async function startServer(){
    try{
        // db connection
        console.log(`Mongo URI: ${MONGO_URI}`)
        console.log(`Domain: ${domain}`)
        await mongoose.connect(MONGO_URI)
        console.log('Connected to DB')


        // routers
        const views_router = require('./routes/views_router')
        const pdf_router = require('./routes/pdf_router')
        const submission_router = require('./routes/submission_router')
        const logger = require('./middleware/logging')

        // middleware
        app.use(express.json({limit: '50mb'}))
        app.use(express.urlencoded({extended: true}))        

        // routes
        app.use(express.static(path.join(__dirname, "public")));
        app.use('/', views_router)
        app.use('/', pdf_router)
        app.use('/invoice', submission_router)

        // listen
        app.listen(port, ()=>{
            console.log(`Server Started`)
            console.log(`Listening on : ${domain}:${port}`)
        })

    }catch(err){
        console.error('MongoDB connection error:', err)
    }                
}
startServer()
