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



