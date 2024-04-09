"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answere = storeCarInfo(`honda`, `civic`, { color: `blkack` }, { features: [`navigation`, `power window`] });
console.log(answere);
