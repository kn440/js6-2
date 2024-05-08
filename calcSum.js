
const numberPrecition=require('number-precision');
const calcResult =(purchases, discount)=>{
    let total = purchases.reduce((acc,purchase)=>numberPrecition.plus(acc,purchase), 0);
    total=numberPrecition.times(total,discount);
    return total;
}

module.exports=calcResult;