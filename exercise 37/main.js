// making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "LARGE"; }
    if (printMessage === void 0) { printMessage = "I LOVE TYPESCRIPT"; }
    console.log("CREATING A ".concat(size, " SHIRT WITH THE ").concat(printMessage, " PRINTS ON SHIRT"));
}
//CALLING A FUNCTION
make_shirt();
//CALLING A FUNCTION WITH MEDIUM SIZE SHIRT
make_shirt("MEDIUM");
// CALLING A FUNCTION NOW WITH SMALL SIZE
make_shirt("SMALL", "I LOVE PYTHON");
