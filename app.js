const express = require('express')
require('dotenv').config()
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const domain = (process.env.NODE_ENV == 'prod') ? process.env.DOMAIN : 'http://localhost'


async function startServer(){
    try{


        // routers        
        const pdf_router = require('./routes/pdf_router')        

        // middleware
        app.use(express.json({limit: '50mb'}))
        app.use(express.urlencoded({extended: true}))        

        // routes
        app.use(express.static(path.join(__dirname, "public")));        
        app.use('/', pdf_router)        

        // listen
        app.listen(port, ()=>{
            console.log(`Server Started`)
            console.log(`Listening on : ${domain}:${port}`)
        })

    }catch(err){
        console.error('error:', err)
    }                
}
startServer()
