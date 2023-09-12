const mailUser  = prompt('Inserisci la tua mail!');

const mailList = ['falson.DeFalsoni@gmail.com', 'mail.assolutamente.reale@gmail.com', 'mario.rossi@gmail.com', 'lorem.ipsum@gmail.com'];
let mailFound = false;
  
/* 
for(let i = 0 ; i < mailList.length; i++){
  let mailCheck = mailList[i];

  if(mailCheck === mailUser){
    mailFound = true;
    console.log('DAGLIEEEE');
    
    if(mailFound = false){
      console.log('RIPROVA');
    }else if(mailFound = true){
      console.log('DAGLIEEE');
    }

     
  };
};
 */


for(let i = 0 ; i < mailList.length; i++){
  let mailCheck = mailList[i];
  
  if(mailCheck === mailUser){
    console.log('DAGLIEEE');
    document.getElementById('test').innerHTML = 'HAI VINTO';
  }else{
    console.log('RIPROVA');
    document.getElementById('test').innerHTML = 'HAI PERSO';
  };



}