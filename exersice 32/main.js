// ARRAY OF CURRENT USERS
var current_username = ["ahsan", "sheraz", "zain", "murtaza", "umer"];
// ARRAY OF NEW USERS
var new_user = ["joji", "mubashir", "murtaza", "waqas", "zain"];
// LOOP THROUGH NEW_USERS TO CHECK FOR USERNAMES AVAILABILITY
new_user.forEach(function (new_one_user) {
    //MAKING A CONDITION FOR USERNAME ALREADY EXIST AND SAVE IN OUR_CONDTION VARIABLE
    var our_condition = current_username.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //PRINT DIFFERENT MESSAGE USING IF-ELSE STATEMENT
    if (our_condition) {
        console.log("sorry,".concat(new_one_user, " is already taken !"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
