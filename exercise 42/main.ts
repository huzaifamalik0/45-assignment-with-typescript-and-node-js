let magician : string[] =[ `Harry Potter` , `Hermione Granger`, `Ron Weasly`,`Albus Dumbledore`];

function make_great(magicianArry : string[]){

    for(let i=0;i<magicianArry.length; i++){

        magician[i] =`the Great ` + magicianArry[i]
    }

}

function show_magician(magicians : string[]){

     magicians.forEach(element => {
      console.log(element);
    });
}

make_great(magician);
show_magician(magician)