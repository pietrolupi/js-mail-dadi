
////// MAIL ///////////////////


const mailUser  = document.getElementById('form-mail');
const mailList = ['falson.DeFalsoni@gmail.com', 'mail.assolutamente.reale@gmail.com', 'mario.rossi@gmail.com', 'lorem.ipsum@gmail.com', 'test'];
const btnMail = document.querySelector('.btn-mail');

btnMail.addEventListener('click', function(){
  
  for(let i = 0 ; i < mailList.length; i++){
  
    let mailCheck = mailList[i];
  
  if(mailCheck === mailUser.value){
    
    document.getElementById('test').innerHTML = 'MAIL IN LISTA :)';
      }else if(mailCheck !== mailUser.value){
    
    document.getElementById('test').innerHTML = 'MAIL NON IN LISTA :(';
  };
  }


})



////////// DADI ///////////////////////


const roll = document.getElementById('roll');

roll.addEventListener('click', function(){

  const diceUser = Math.floor(Math.random() * (7 - 1) + 1);
  const diceComputer = Math.floor(Math.random() * (7 - 1) + 1);
  const result = document.querySelector('.show-winner > span');
  
  if(diceComputer > diceUser){
    result.innerHTML = 'HAI PERSO :('
  }else if(diceComputer < diceUser){
    result.innerHTML = 'HAI VINTO :)'
  }else{
    result.innerHTML = 'PAREGGIO, RITENTA!'
  };
  
  //////////stampe in HTML
  const showRoll = document.querySelector('.show-roll');
  const showRoll2 = document.querySelector('.show-roll-2');
  const showWinner = document.querySelector('.show-winner');
  showRoll.classList.remove('d-none');
  showRoll2.classList.remove('d-none');
  showWinner.classList.remove('d-none');
  document.querySelector('.show-roll > span').innerHTML = diceUser;
  document.querySelector('.show-roll-2 > span').innerHTML = diceComputer;
 

});


