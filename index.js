let counter = 0;

let counterNumber = document.querySelector('#counter-number');
const decreaseButton = document.querySelector('#decreaseBtn');
const resetButton = document.querySelector('#resetBtn');
const increaseButton = document.querySelector('#increaseBtn');


decreaseButton.addEventListener("click", () => {
    counter--;
    counterNumber.textContent = counter;
    if (counter == 0){
        counterNumber.style.color = "#f321f1";
        counterNumber.style.transition = "all .5s";
        
    }  else if(counter > 0){
        counterNumber.style.color = "#4c1231";
        counterNumber.style.transition = "all .5s";
    } else {
        counterNumber.style.color = "#f44336";
        counterNumber.style.transition = "all .5s";
        
    }
})

resetButton.addEventListener("click", () => {
    counter = 0;
    counterNumber.textContent = counter;  
    counterNumber.style.color = "#F1F1F1";
    counterNumber.style.transition = "all .5s"
})

increaseButton.addEventListener("click", () => {
    counter++;
    counterNumber.textContent = counter;  
    if (counter == 0){
        counterNumber.style.color = "#f1f1f1";
        counterNumber.style.transition = "all .5s";
        
    }  else 
    if (counter < 0 ){
        counterNumber.style.color = "#f44336";
        counterNumber.style.transition = "all .5s";
        

    } else {
        counterNumber.style.color = "#4caf50";
        counterNumber.style.transition = "all .5s";
        
    }
})
