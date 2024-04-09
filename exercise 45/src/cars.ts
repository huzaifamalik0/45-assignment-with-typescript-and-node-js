function storeCarInfo(manufacturer : string , modelName : string , ...extraOption: {[key :string ] : any}[] ): object {

    const carInfo ={
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;

};

let answere = storeCarInfo(`honda`,`civic`,{color:`blkack`},{features:[`navigation`, `power window`]})

console.log(answere);


