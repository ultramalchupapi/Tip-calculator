const billPrice = document.getElementById('billPrice');
const tipPrice = document.getElementById('tipPrice');
const calculateBtn = document.getElementById('calculateBtn');
let billTotal = document.getElementById('billTotal');


calculateBtn.addEventListener('click', ()=>{
    totalPrice = billPrice.value * tipPrice.value/100;
    
    if(billPrice.value !== '' && tipPrice.value !== ''){
        billTotal.textContent = `R${totalPrice.toFixed(2)}`;
        billPrice.value = '';
        tipPrice.value = '';
    }else{
        alert('Please enter in values')
    }
});

document.addEventListener('keypress', (e) => {
    totalPrice = billPrice.value * tipPrice.value/100;

    if(e.key === 'Enter'){
        if(billPrice.value !== '' && tipPrice.value !== ''){
        billTotal.textContent = `R${totalPrice.toFixed(2)}`;
        billPrice.value = '';
        tipPrice.value = '';
    }else{
        alert('Please enter in values')
    }
    }
})
