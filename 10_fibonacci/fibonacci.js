const fibonacci = function(fibNum) {
    fibNum = Number(fibNum);
    var nextNumber;
    firstNum = 0;
    secondNum = 1;
    nextNumber = (fibNum <= 2 && fibNum > 0) ? 1 : "OOPS";  
    for(var i = 1; i < fibNum; i++){
        nextNumber = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNumber;
    }
    return nextNumber;
     

};

// Do not edit below this line
module.exports = fibonacci;
