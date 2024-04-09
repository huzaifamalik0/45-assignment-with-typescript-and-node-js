//creating a guest list array
var guestList = ["ahsan", "ali", "zain", "sheraz"];
//making variable for those guest who cant come
var dontCome = guestList[0];
//printing a name of guest who cant come
console.log(dontCome, "nahi araha");
//add or remove values from guest list array
guestList.splice(0, 1, "huzaifa");
//printing message for biggerv table 
console.log("good news ! we have found a bigger table for dinner");
//adding a new value at starting index of array
guestList.unshift("sami");
//adding a new value at ending index of array
guestList.push("murtaza");
//get a new value at middle index of array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "umer");
//print message olf updates list
console.log("update list of our guests");
//sending a invitation message to our guest one  by one with thier names
guestList.forEach(function (oneGuest) { return console.log("salam ".concat(oneGuest, ",would you like to dinner with me in my house at sunday's evening?")); });
//inform that only two guest acan be invited for dinner
console.log("unfortunately, the new table won't arrive on time so i can invite two guest dinner with me");
//using while loop to remove guest from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry,".concat(removeGuest, " i can't invite you to dinner"));
}
//sending a invitation  to the last two guest on the list
console.log("invitation to the last two guest");
guestList.forEach(function (lastTwo) { return console.log("luckly ".concat(lastTwo, ", you are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
