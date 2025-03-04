const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/',(req,res)=>{
    // const filePath = path.join(__dirname, "....", "frontend","public", "views", `index.html`)
    const filePath = path.join(__dirname, "..", "..", "frontend","public","views","index.html")
    console.log(filePath)
    res.sendFile(filePath)
})

router.get('/demo',(req,res)=>{
    // const filePath = path.join(__dirname, "....", "frontend","public", "views", `index.html`)
    const filePath = path.join(__dirname, "..", "..", "frontend","public","views","index.html")
    console.log(filePath)
    res.sendFile(filePath)
})


module.exports = router