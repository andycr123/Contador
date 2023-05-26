let counter = 0;
// Inicializamos el contador

let counterNumber = document.querySelector('#counter-number');
const decreaseButton = document.querySelector('#decreaseBtn');
const resetButton = document.querySelector('#resetBtn');
const increaseButton = document.querySelector('#increaseBtn');
// Importamos los botones y el numero para modificar de nuestro html

decreaseButton.addEventListener("click", () => {
    counter--;
    counterNumber.textContent = counter;
    if (counter == 0){
        counterNumber.style.color = "#f1f1f1";
        counterNumber.style.transition = "all .5s";
        // Si en el decremento el contador llega a 0 se cambie el color a un blanco
    }  else if(counter > 0){
        counterNumber.style.color = "#4caf50";
        counterNumber.style.transition = "all .5s";
        // Si en el decremento el numero no es negativo se mantendra en un color verde
    } else {
        counterNumber.style.color = "#f44336";
        counterNumber.style.transition = "all .5s";
        // Si en el decremento da un numero negativo se pondra en un color rojo
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
        // Si en el aumento el contador llega a 0 se cambie el color a un blanco
    }  else 
    if (counter < 0 ){
        counterNumber.style.color = "#f44336";
        counterNumber.style.transition = "all .5s";
        // Si en el aumento hay numeros negativos que se mantenga en un color rojo

    } else {
        counterNumber.style.color = "#4caf50";
        counterNumber.style.transition = "all .5s";
        // Si en el aumento hay numeros positivos siga con el color verde
    }
})
