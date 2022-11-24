// You are asked to design an app that enables you to leave a tip. The tip should be
// 10% of a meal cost.


// tempTip 


function computeTip(totalBill){
    let tempTip = (totalBill * .1);
    return tempTip;

}

console.log(computeTip(1000))
console.log(computeTip(1234))
console.log(computeTip(5432.1))