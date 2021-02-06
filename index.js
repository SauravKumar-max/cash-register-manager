const billInputEl = document.querySelector(".bill-amount");
const cashInputEl = document.querySelector(".cash-given");
const checkBtn = document.querySelector(".check-btn");

function changeCash(){
    const billAmount = billInputEl.value
    const cashGiven = cashInputEl.value;
    let totalChange = cashGiven - billAmount;

    if(totalChange >= 2000){

    }else if(totalChange >= 500){

    }else if(totalChange >= 100){

    }else if(totalChange >= 20){

    }else if(totalChange >= 10){

    }else if(totalChange >= 5){

    }else if(totalChange >= 1){

    }

}

checkBtn.addEventListener('click', changeCash);