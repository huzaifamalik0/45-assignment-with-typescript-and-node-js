var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Harry Potter", "Hermione Granger", "Ron Weasly", "Albus Dumbledore"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = "the Great " + magicianArry[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log("This is my orignal array:");
show_magician(magician);
console.log("This is my modified copy of  array:");
show_magician(copyMagicianArray);
