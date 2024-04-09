//define varibale
var apple = "apple";
var upperCaseApple = " APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["mango", "strawberry", "banana"];
//test for equality and inequality with strings
console.log("is apple is eaqual to apple?");
console.log(apple == "apple");
console.log("\n is apple is not equal to apple");
console.log(apple != "apple");
// test using the lower case function
console.log("\n is APPLE is equal to apple after converting to lowercase? ");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\n is APPLE is not equal to apple after converting to lowercase? ");
console.log(upperCaseApple.toLowerCase() != "apple");
//numerical tests
//equal to
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\n ten is not equal to twenty");
console.log(ten != twenty);
// greater than
console.log("\n is ten is greater than zero");
console.log(ten > 0);
//less than
console.log("\n is twenty is less than 10");
console.log(twenty < ten);
// greater than or equal to
console.log("\n is ten is greater than equal to 5?");
console.log(ten >= 5);
//less than or equal to
console.log("\n is twenty is less than or equal to 10");
console.log(twenty <= 10);
//tests using and & or operator
// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
//using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
//test whether an item is include in array
console.log("\n is orange include in my fruits array?");
console.log(fruits.includes("strawberry"));
console.log("\n is banana not in clude in my fruits array");
console.log(fruits.includes("banana"));
