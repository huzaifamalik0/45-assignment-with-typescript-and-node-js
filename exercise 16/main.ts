//creating a guest list array
let guestList =["ahsan", "ali" ,"zain", "sheraz"];

//making variable for those guest who cant come
let dontCome =guestList[0];

//printing a name of guest who cant come
console.log(dontCome, "nahi araha");

//add or remove values from guest list array
guestList.splice(0,1,"huzaifa");

//printing message for biggerv table 
console.log("good news ! we have found a bigger table for dinner");

//adding a new value at starting index of array
guestList.unshift("sami");

//adding a new value at ending index of array
guestList.push("murtaza");

//get a new value at middle index of array
let middleIndex : number =Math.floor(guestList.length / 2);

//adding a new guest to middle index of array
guestList.splice(middleIndex , 0 ,"umer");

//print message olf updates list
console.log("update list of our guests");

//sending a invitation message to our guest one  by one with thier names
guestList.forEach(oneGuest => console.log(`salam ${oneGuest},would you like to dinner with me in my house at sunday's evening?`));

