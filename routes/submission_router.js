const router = require('express').Router()
const invoiceModel = require('../models/invoice_model')



router.get('/', (req,res)=>{
    res.send({"message":"hello world"})
})

// get all invoices
router.get('/get-all', async(req,res)=>{
    try{
        const submissionData = await invoiceModel.find()
        if(!submissionData){
            return res.status(404).send({"message":"No submissions found"})
        }
        res.status(200).send(submissionData)

    }catch(err){
        console.error(err)
        res.status(500).send({"message":`Error fetching invoices: ${err}`})
    }
})

// find by _id
router.get('/get-by-id/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const invoiceData = await invoiceModel.findOne({_id:id})
        if(!invoiceData){
            return res.status(404).send({"message":"Invoice not found"})
        }
        res.status(200).send(invoiceData)
    }catch(err){
        console.error(err)
        res.status(500).send({"message":`Error fetching invoice: ${err}`})
    }
})

// find by invoice number
router.get('/get-by-number/:invoiceNumber', async(req,res)=>{
    try{
        const invoiceNumber = req.params.invoiceNumber
        const invoiceData = await invoiceModel.findOne({invoiceNumber:invoiceNumber})
        if(!invoiceData){
            return res.status(404).send({"message":"Invoice not found"})
        }
        res.status(200).send(invoiceData)
    }catch(err){
        console.error(err)
        res.status(500).send({"message":`Error fetching invoice: ${err}`})
    }
})


// submit an invoice
router.post('/submit', async (req,res)=>{
    try{
        const invoiceData = {
            "invoiceDate": req.body.invoiceDate,
            "invoiceDueDate": req.body.invoiceDueDate,
            "invoiceNumber": req.body.invoiceNumber,
            "invoiceAmount": req.body.invoiceAmount,
            "customerName": req.body.customerName,
            "pdfData": req.body.pdfData}
        const newInvoice = new invoiceModel(invoiceData)        
        const document = await newInvoice.save()
        res.status(201).send({"message":"Invoice submitted successfully", "data":document})
    }catch(err){
        console.error(err)
        res.status(500).send({"message":`Error submitting invoice: ${err}`})
    }
})

module.exports = router