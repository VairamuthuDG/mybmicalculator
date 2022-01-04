const weight   = document.getElementById("weight");
const height = document.getElementById("height");
const calc = document.getElementById("calc");
const display = document.getElementById("display");



calc.addEventListener('click', function(){

let weighKg = Number(weight.value);

let heighMt = Number(height.value)/100;

let heighSq = (heighMt*heighMt);




    if((weighKg===0) || (heighMt===0) || (weighKg & heighMt == NaN)){
        display.innerHTML = "Pls Enter Valid Input";
        display.style.color = 'red';
    }

    else{
    let result = Math.abs((weighKg/heighSq).toFixed(2));
    display.innerHTML = 'YOUR BMI IS'+' ' + result;
    display.style.color = 'Jungle Green';
    }
});
