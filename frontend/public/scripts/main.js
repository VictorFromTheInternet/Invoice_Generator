

// http://localhost:5000/demo 
async function generateInvoice(formData){
    const response = await fetch('http://localhost:5000/demo', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            template: formData.template,
            data: {
                title: formData.title,
                table: formData.table
            }            
        })
    })

    const pdfData = await response.json()
    console.log(pdfData)
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