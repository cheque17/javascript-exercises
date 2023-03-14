const sumAll = function(firstNum, secondNum) {
    let result = 0;
    let start = firstNum;
    let end = secondNum;

    if (firstNum > secondNum) {
        start = secondNum;
        end = firstNum;
    }

    if ( firstNum<0 || secondNum<0 || typeof(firstNum)!='number' || typeof(secondNum)!='number') {
        return 'ERROR';
    }

    for (let i= start; i<=end; i++){
        result += i;
    }
    return result;
  /*  console.log(typeof(firstNum));
    console.log(typeof(secondNum));*/
};

// Do not edit below this line
module.exports = sumAll;
