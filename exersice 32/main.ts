// ARRAY OF CURRENT USERS
let current_username = ["ahsan","sheraz","zain","murtaza","umer"];

// ARRAY OF NEW USERS
let new_user = ["joji","mubashir","murtaza","waqas" ,"zain"];

// LOOP THROUGH NEW_USERS TO CHECK FOR USERNAMES AVAILABILITY
new_user.forEach(new_one_user => {

    //MAKING A CONDITION FOR USERNAME ALREADY EXIST AND SAVE IN OUR_CONDTION VARIABLE
    let our_condition = current_username.some(current_one_user => current_one_user.toLowerCase() ===new_one_user.toLowerCase())

    //PRINT DIFFERENT MESSAGE USING IF-ELSE STATEMENT
  if(our_condition){
    console.log(`sorry,${new_one_user} is already taken !`)
  }else{
    console.log(`this username ${new_one_user} is available`)
  }
})
