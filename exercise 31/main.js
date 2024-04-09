var user_name = ["ahsan", "sheraz", "admin", "zain", "'murtaza"];
user_name = [];
if (user_name.length === 0) {
    console.log(" your array is empty ,we need to find some users");
}
else {
    //using foreach loop on array
    user_name.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, " , would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, " , thank you for logging in again."));
        }
    });
}
