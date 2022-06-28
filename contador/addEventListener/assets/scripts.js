var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

increment.addEventListener('click', function(){
    currentNumber++   
    currentNumberWrapper.innerHTML = currentNumber;
})

decrement.addEventListener('click', function(){
    currentNumber--   
    currentNumberWrapper.innerHTML = currentNumber;
})



/*

Primeira Forma!!!

function increment() {
    currentNumber++   
    currentNumberWrapper.innerHTML = currentNumber;  
 }


function decrement() {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber;

}*/