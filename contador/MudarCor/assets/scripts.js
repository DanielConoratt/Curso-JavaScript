var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
    if (currentNumber >= 0)
    document.getElementById("mudacor").style.backgroundColor = 'green';
    //document.getElementById("mudacor").style.color = 'green';
    currentNumber++   
    currentNumberWrapper.innerHTML = currentNumber;  
 }


function decrement() {
    if (currentNumber <= 0)
    document.getElementById("mudacor").style.backgroundColor = 'red'; 
    //document.getElementById("mudacor").style.color = 'red';
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber;

}




