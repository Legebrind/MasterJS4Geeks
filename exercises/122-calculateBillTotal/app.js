function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    return  preTaxAndTipAmount+(preTaxAndTipAmount*0.095)+(preTaxAndTipAmount*0.15);
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9