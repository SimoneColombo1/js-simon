//? Variabili del DOM//
const StartButton=document.querySelector("#start");
const container=document.querySelector("#container");

//% Generatore di Numeri casuali//

StartButton.addEventListener('click', function(){
    StartButton.classList.add('none');
    let div=document.createElement('div');
    container.append(div);
let num= [ Math.floor(Math.random()*5), Math.floor(Math.random()*5), Math.floor(Math.random()*5), Math.floor(Math.random()*5), Math.floor(Math.random()*5)];

for(let i=0 ; i < 5; i++){
  
    
  let span= document.createElement('span');
    div.append(span);
     span.append(num[i]);
    }



//> Creazione timer
setTimeout(display,30000);

function display(){
    div.classList.add('none')
}


setTimeout(timer, 3100);

function timer(NumUtente,h,calc,g,sum){
    
 calc=[];
    
 
 
 for(h=0 ; h<5; h++ ){
       NumUtente= Number.parseInt(prompt('inserisci il numero')) ;
       calc.push(NumUtente);
       if( NumUtente===num[h]){
            alert('Corretto')}
    else{
        alert('Sbagliato');
    } 
}
      
sum=0;

for(g=0; g<5 ; g++){
    if(calc[g]===num[g]){
        sum++;
    }
   
    
}
  if(sum===5){
    alert('hai vinto')
  }
  else{
    alert('hai perso')
  }
}})
    