
async function generateInvoice(formData){
    //loading spinner
    const spinner = document.getElementById('loadingSpinner')
    spinner.classList.add('loading-spinner')


    const baseUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:5000/demo' // Development URL
        : 'https://invoice-generator-api-5far.onrender.com/demo'; // Production URL

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
    })

    const pdfData = await response.json()

    spinner.remove('loading-spinner')
    showPDF(pdfData.dataUrl)
    // console.log(pdfData)
}

async function showPDF(dataUrl){
    const pdfContainer = document.querySelector('.pdf-container')
    let child = document.querySelector('#pdf-iframe')    
    pdfContainer.removeChild(child)
    

    let pdfIframe = document.createElement('iframe')
    pdfIframe.id = 'pdf-iframe'
    pdfIframe.src = dataUrl
    pdfIframe.height = 480
    pdfIframe.width = 720

    console.log(pdfIframe)
    console.log(pdfContainer)

    pdfContainer.appendChild(pdfIframe)
}


function getTableData(){
    const tableLineItems = document.querySelectorAll('#tableLineItems tbody tr');
    console.log(tableLineItems)
    
    let tableData = []
    tableLineItems.forEach((elm,ind)=>{
        let quantity = elm.querySelector('.quantity').value
        let item = elm.querySelector('.item').value
        let description = elm.querySelector('.description').value
        let unitPrice = elm.querySelector('.unitPrice').value

        let tempRow = {
            "quantity":quantity,
            "item":item,
            "description":description,
            "unitPrice":unitPrice
        }

        console.log(tableData)
        tableData.push(tempRow)
    })

    return tableData
}

document.querySelector('#btnDemo').addEventListener('click', ()=>{
    let template = document.querySelector('#template').value
    let title = document.querySelector('#title').value
    let tableData = getTableData()
    
    let formData = {
        "template": template,
        "data": {
            "title": title,
            "table": tableData
        }
    }

    generateInvoice(formData)

})