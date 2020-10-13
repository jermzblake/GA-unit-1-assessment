//cached input buttons
let plusButton = document.getElementById("positive")
let minusButton = document.getElementById("negative")
//cached input field
let inputField = document.getElementById("number")
//cached counter
let counterDisplay = document.getElementById("counter")

//app's state (variables)
let counter = 0


//event listners
plusButton.addEventListener('click', addInput)
minusButton.addEventListener('click', subtractInput)

//functions
function checkInteger(){
    if(counter < 0){
        counterDisplay.style.color = "red";
    }else {
        counterDisplay.style.color = "black"
    }
}

function addInput(){
    counter = (counter) + parseInt(inputField.value);
    checkInteger()
     counterDisplay.textContent = counter;
 
}


function subtractInput(){
    counter = (counter) - parseInt(inputField.value);
    checkInteger()
     counterDisplay.textContent = counter;
 
}


