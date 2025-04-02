
const tableLineItems = document.querySelector('#tableLineItems');

function addRow(){
    let row = document.createElement('tr')
    let quantity = document.createElement('td')
    let item = document.createElement('td')
    let description = document.createElement('td')
    let unitPrice = document.createElement('td')

    row.appendChild(quantity)
    row.appendChild(item)
    row.appendChild(description)
    row.appendChild(unitPrice)


    tableLineItems.querySelector('tbody').appendChild(row)
}

function removeRow(){
    // console.log(tableLineItems.querySelector('tbody tr:last-child'))
    let parent = tableLineItems.querySelector('tbody')
    let child = parent.querySelector('tr:last-child')
    parent.removeChild(child)
}

document.getElementById('btnAddRow').addEventListener('click', ()=>{
    console.log('Add Row')
    addRow()
})

document.getElementById('btnRemoveRow').addEventListener('click', ()=>{
    console.log('Remove Row')
    removeRow()
})