// making a function
function make_shirt(size : string ="LARGE", printMessage:string = "I LOVE TYPESCRIPT"){
    console.log(`CREATING A ${size} SHIRT WITH THE ${printMessage} PRINTS ON SHIRT`)
}

//CALLING A FUNCTION
make_shirt();

//CALLING A FUNCTION WITH MEDIUM SIZE SHIRT
make_shirt("MEDIUM")

// CALLING A FUNCTION NOW WITH SMALL SIZE
make_shirt("SMALL", "I LOVE PYTHON")