
const tableLineItems = document.querySelector('#tableLineItems');

function addRow(){
    // create row
    let row = document.createElement('tr')

    row.innerHTML = 
    `
    <td><input class="quantity" type="number" value="0" min="0" required></td>
    <td><input class="item" type="text" placeholder="Name" required></td>
    <td><input class="description" type="text" placeholder="Lorem Ipsum ..." required></td>
    <td><input class="unitPrice" type="number" value="0" min="0" required></td>
    `

    // add row
    tableLineItems.querySelector('tbody').appendChild(row)
}

function removeRow(){
    // console.log(tableLineItems.querySelector('tbody tr:last-child'))
    let parent = tableLineItems.querySelector('tbody')
    let child = parent.querySelector('tr:last-child')
    parent.removeChild(child)
}

function sumUnitPrice(){
    console.log(tableLineItems)

    let lineItems = tableLineItems.querySelectorAll('.unitPrice')
    console.log(lineItems)

    let sum = 0
    lineItems.forEach((elm,ind)=>{
        console.log(elm.value)
        sum += Number.parseFloat(elm.value)
    })

    return sum
}





document.getElementById('btnAddRow').addEventListener('click', ()=>{
    console.log('Add Row')
    addRow()
})

document.getElementById('btnRemoveRow').addEventListener('click', ()=>{
    console.log('Remove Row')
    removeRow()
})

document.getElementById('btnSumUnitPrice').addEventListener('click', ()=>{
    console.log('Sum Unit Price')
    console.log(sumUnitPrice())
})
