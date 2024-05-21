//? Variabili del DOM//
const StartButton=document.querySelector("section#start");
const container=document.querySelector("#container");

//% Generatore di Numeri casuali//


for( i=0; i<5; i++ ){
   let num= Math.floor(Math.random()*5);
     let span=document.createElement('span');
     span.append(num);
     container.append(span);

}

