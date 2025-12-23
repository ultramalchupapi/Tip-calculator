const billPrice = document.getElementById('billPrice');
const tipPrice = document.getElementById('tipPrice');
const calculateBtn = document.getElementById('calculateBtn');
let tipTotal = document.getElementById('tipTotal');
let billTotal = document.getElementById('billTotal');

calculateBtn.addEventListener('click', ()=>{
    let totalTip = billPrice.value * tipPrice.value/100;
    let totalPrice = Number(totalTip) + Number(billPrice.value);
    
    if(billPrice.value !== '' && tipPrice.value !== ''){
        tipTotal.textContent = `+R${totalTip.toFixed(2)}`;
        billTotal.textContent = `R${totalPrice}`
        billPrice.value = '';
        tipPrice.value = '';
    }else{
        alert('Please enter in values')
    }
});

document.addEventListener('keypress', (e) => {
    let totalTip = billPrice.value * tipPrice.value/100;
    let totalPrice = Number(totalTip) + Number(billPrice.value);

    if(e.key === 'Enter'){
        
        if(billPrice.value !== '' && tipPrice.value !== ''){
            tipTotal.textContent = `+R${totalTip.toFixed(2)}`;
            billTotal.textContent = `R${totalPrice}`

            billPrice.value = '';
            tipPrice.value = '';
        }else{
            alert('Please enter in values')
        }
    }
})


