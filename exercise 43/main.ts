let magician : string[] =[ `Harry Potter` , `Hermione Granger`, `Ron Weasly`,`Albus Dumbledore`];

function copyArray(arr :string[]){
return[...arr]


}

function make_great(magicianArry : string[]){

    for(let i=0;i<magicianArry.length; i++){

        magicianArry[i] =`the Great ` + magicianArry[i]
    }
}

function show_magician(magicians : string[]){

     magicians.forEach(element => {
      console.log(element);
    });
}

const copyMagicianArray= copyArray(magician)

make_great(copyMagicianArray);

console.log(`This is my orignal array:`)
show_magician(magician)

console.log(`This is my modified copy of  array:`)
show_magician(copyMagicianArray);