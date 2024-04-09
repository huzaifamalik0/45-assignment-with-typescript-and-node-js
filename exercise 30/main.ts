//creating a array
let user_name = ["ahsan", "sheraz", "zain","admin","ali"];

//using foreach loop on array
user_name.forEach(oneUser => {
if(oneUser === "admin"){
console.log(`hello ${oneUser} , would you like to see a status report?`)
}else{
    console.log(`hello ${oneUser} , thank you for logging in again.`)
}
})

