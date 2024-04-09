var guestList = ["ahsan", "ali", "zain", "sheraz"];
var dontCome = guestList[0];
console.log(dontCome, "nahi araha");
guestList.splice(0, 1, "huzaifa");
guestList.forEach(function (guest) { return console.log("assalam alikum ".concat(guest, ", would you like to dinner with me in my house at sunday's evening?")); });
