const billInputEl = document.querySelector(".bill-amount");
const cashInputEl = document.querySelector(".cash-given");
const checkBtn = document.querySelector(".check-btn");
const notesNum = document.querySelector(".notes-number").children;

function changeCash(){
    const billAmount = billInputEl.value
    const cashGiven = cashInputEl.value;
    let totalChange = cashGiven - billAmount;
    let notes = 0;

    for (let i = 1; i < 8; i++) {
        notesNum[i].innerHTML = " ";
    }

    if(totalChange >= 2000){
        notes = Math.floor(totalChange / 2000);
        notesNum[1].innerHTML = notes;
        let remain = totalChange % 2000;
        totalChange = remain;
    }
     if(totalChange >= 500){
        notes = Math.floor(totalChange / 500);
        notesNum[2].innerHTML = notes;
        let remain = totalChange % 500;
        totalChange = remain;
     }

    if(totalChange >= 100){
        notes = Math.floor(totalChange / 100);
        notesNum[3].innerHTML = notes;
        let remain = totalChange % 100;
        totalChange = remain;
    }

    if(totalChange >= 20){
        notes = Math.floor(totalChange / 20);
        notesNum[4].innerHTML = notes;
        let remain = totalChange % 20;
        totalChange = remain;
    }

    if(totalChange >= 10){
        notes = Math.floor(totalChange / 10);
        notesNum[5].innerHTML = notes;
        let remain = totalChange % 10;
        totalChange = remain;
    }

    if(totalChange >= 5){
        notes = Math.floor(totalChange / 5);
        notesNum[6].innerHTML = notes;
        let remain = totalChange % 5;
        totalChange = remain;
    }

    if(totalChange >= 1){
        notes = Math.floor(totalChange / 1);
        notesNum[7].innerHTML = notes;
        let remain = totalChange % 1;
        totalChange = remain;
    }

}

checkBtn.addEventListener('click', changeCash);