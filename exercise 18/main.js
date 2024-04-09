var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and prints its orignal order
var countriesToVisit = ["France", "NEWZEALAND", "Zimbabwe", "Afghanistan"];
console.log("orignal order:", countriesToVisit);
//print the array in alphabetical order without modifying the actual array list 
console.log("Alphabetical Order;", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still in its orignal order
console.log("still in orignal order;", countriesToVisit);
// print the array in reversed order without modifying the array list
console.log("Reverse Order;", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is still in its orignal order
console.log("still in orignal order;", countriesToVisit);
// we have changed the orignal array order now
console.log("Orignal array reverse:", countriesToVisit.reverse());
//Print the array to show that it's orignal order
console.log("Back To Orignal Order:", countriesToVisit.reverse());
//print the array to show that its order has been changed in alphabetical order  now
console.log("sorted in alphabetic order;", countriesToVisit.sort());
// we have changed again the orignal array order now in reverse order again
console.log("Orignal array reverse:", countriesToVisit.reverse());
