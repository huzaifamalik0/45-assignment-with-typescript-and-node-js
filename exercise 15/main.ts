let guestList = ["ahsan", "ali","zain", "sheraz" ];

let dontCome = guestList[0];

console.log(dontCome, "nahi araha");

guestList.splice(0, 1, "huzaifa");

guestList.forEach(guest => console.log(`assalam alikum ${guest}, would you like to dinner with me in my house at sunday's evening?`));
