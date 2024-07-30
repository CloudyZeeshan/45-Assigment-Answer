function storeCareInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answare = storeCareInfo("Honda", "Civic", { color: "black" }, { features: ["Navigation", "Power window"] });
console.log(answare);
export {};
