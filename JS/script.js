//? Variabili del DOM//
const StartButton=document.querySelector("#start");
const container=document.querySelector("#container");

//% Generatore di Numeri casuali//

StartButton.addEventListener('click', function(){
    StartButton.classList.add('none');
    let div=document.createElement('div');
    container.append(div);


    for( i=0; i<5; i++ ){
 let num= Math.floor(Math.random()*5);
    let span= document.createElement('span');
    div.append(span);
     span.append(num);
    

}

//> Creazione timer

let timer= setInterval(function (){

div.classList.add('none');



},3000)
})