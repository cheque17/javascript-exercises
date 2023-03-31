const fibonacci = function(position) {
    let values = [1,1];
    if (position === 1 || position === 2){
        return values[position-1];
    } else if (position < 0) {
        return 'OOPS';
    }
    let amountOfLoops= position - 2;
    console.log(values[values.length-1]);
    console.log(values[values.length-2]);
    for (let i=0; i<amountOfLoops; i++){
        values.push(values[values.length-1] + values[values.length-2])
    };
    console.log(values[values.length-1]);
    console.log(values[values.length-2]);
     let positionValue = values[values.length-1];
    
    return positionValue;
};

// Do not edit below this line
module.exports = fibonacci;
