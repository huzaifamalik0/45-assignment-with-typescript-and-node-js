function makeSandwich (item : string[]){
    console.log(`\n Making your sandwich with:`);

    item.forEach(element => console.log("-" + element) )

    console.log(`Enjoy your sandwich !\n`);

}

makeSandwich(["ham" , "cheese" , "lettuce"])

makeSandwich(["bread" , " bacon "])

makeSandwich(["peanut butter" , "turkey" , "jelly"]);