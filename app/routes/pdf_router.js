const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send({"message":"hello world"})
})

router.post('/demo',(req,res)=>{
    // const test = req.body.test
    console.log(req.body)
    res.send(req.body)
})

module.exports = router