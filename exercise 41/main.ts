let magician : string[] =[ `Harry Potter` , `Hermione Granger`, `Ron Weasly`,`Albus Dumbledore`];

function show_magician(magicians : string[]){

     magicians.forEach(element => {
      console.log(element);
    });
}
show_magician(magician)