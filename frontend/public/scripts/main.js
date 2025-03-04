

// http://localhost:5000/demo 
async function generateInvoice(formData){
    const response = await fetch('http://localhost:5000/demo', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
    })

    const pdfData = await response.json()
    showPDF(pdfData.dataUrl)
    console.log(pdfData)
}

async function showPDF(dataUrl){


    const pdfContainer = document.querySelector('.pdf-container')

    let iframePdf = document.createElement('iframe')
    iframePdf.src = dataUrl
    iframePdf.height = 480
    iframePdf.width = 720

    console.log(iframePdf)
    console.log(pdfContainer)

    pdfContainer.appendChild(iframePdf)
}

document.querySelector('#btnDemo').addEventListener('click', ()=>{
    let template = document.querySelector('#template').value
    let title = document.querySelector('#title').value
    let table = [
        {"firstName":"Victor","lastName":"Arreola","ID":"1"},
        {"firstName":"Victor","lastName":"Arreola","ID":"1"},
        {"firstName":"Victor","lastName":"Arreola","ID":"1"},
        {"firstName":"Victor","lastName":"Arreola","ID":"1"},
        {"firstName":"Victor","lastName":"Arreola","ID":"1"},
        {"firstName":"Victor","lastName":"Arreola","ID":"1"},
        {"firstName":"Victor","lastName":"Arreola","ID":"1"}
    ]
    
    let formData = {
        "template": template,
        "data": {
            "title": title,
            "table": table
        }
    }

    generateInvoice(formData)

})