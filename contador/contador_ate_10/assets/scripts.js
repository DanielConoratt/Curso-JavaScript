var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
 if (currentNumber <= 9) 
     currentNumber++
     currentNumberWrapper.innerHTML = currentNumber;
 }

function decrement() {
if  (currentNumber == 0)    
     currentNumberWrapper.innerHTML = currentNumber;
if  (currentNumber != 0)
    currentNumber--   
    currentNumberWrapper.innerHTML = currentNumber;   
}




