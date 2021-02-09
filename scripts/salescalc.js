//adds listener
addEventListener("load", main)

//creates main function for calculating sales
function main() {
    btCalcSales.addEventListener("click", calculateSales)
}

//creates function to actually calculate sales
function calculateSales() {
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
    Tax=Price*TaxRate
    Total=Price+Tax
    spTotal.innerHTML=Total.toFixed(2)
}

