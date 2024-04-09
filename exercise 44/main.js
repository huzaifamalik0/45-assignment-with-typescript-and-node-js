function makeSandwich(item) {
    console.log("\n Making your sandwich with:");
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("Enjoy your sandwich !\n");
}
makeSandwich(["ham", "cheese", "lettuce"]);
makeSandwich(["bread", " bacon "]);
makeSandwich(["peanut butter", "turkey", "jelly"]);
