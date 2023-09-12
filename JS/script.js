
////// MAIL ///////////////////
const mailUser  = prompt('Inserisci la tua mail!');

const mailList = ['falson.DeFalsoni@gmail.com', 'mail.assolutamente.reale@gmail.com', 'mario.rossi@gmail.com', 'lorem.ipsum@gmail.com', 'test'];


for(let i = 0 ; i < mailList.length; i++){
  
  let mailCheck = mailList[i];

if(mailCheck === mailUser){
  
  document.getElementById('test').innerHTML = 'MAIL IN LISTA :)';
    }else if(mailCheck !== mailUser){
  
  document.getElementById('test').innerHTML = 'MAIL NON IN LISTA :(';
};
}

////////// DADI ///////////////////////


const roll = document.getElementById('roll');

roll.addEventListener('click', function(){

  const diceUser = Math.floor(Math.random() * (7 - 1) + 1);
  const diceComputer = Math.floor(Math.random() * (7 - 1) + 1);
  
  if(diceComputer > diceUser){
    console.log('hai persooo' + diceComputer + diceUser)
  }else if(diceComputer < diceUser){
    console.log('HAI VINTO!'+ diceComputer + diceUser)
  }else if(diceComputer === diceUser){
    console.log('PAREGGIO!'+ diceComputer + diceUser)
  };
  
});


