//Initialize header color
var header = document.querySelector("h1");
header.style.color = 'red';

//Random color funcion
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = '#';
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Change the color of header
function changeHeaderColor(){
    getColor = getRandomColor();
    header.style.color = getColor;
}

//Change header color every 500ms
setInterval("changeHeaderColor()",500);


//**********************************************
//Change the Color of all the buttons

var allButtons = document.getElementsByTagName('button');
console.log(allButtons);

var copyAllButtons=[];
for(let i=0; i<allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}
console.log(copyAllButtons);

//Change buttons color according to selected option
function buttonColorChange(myChoice){
    if(myChoice.value === 'red'){
        redButtons();
    }
    else if(myChoice.value === 'green'){
        greenButtons();
    }
    else if(myChoice.value === 'reset'){
        resetButtonColors();
    }
    else if(myChoice.value === 'random'){
        randomColors();
    }
}

//Change buttons color to bootstrap red
function redButtons(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

//Change buttons color to bootstrap green
function greenButtons(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

//Reset the colors of all buttons
function resetButtonColors(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

//Generate and apply random color to buttons
function randomColors(){
    let choices=['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];

    for(let i=0; i<allButtons.length; i++){
        let randomNumber=Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}