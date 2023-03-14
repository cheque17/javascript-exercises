const reverseString = function(string) {
    result='';
    for (i= 1; i <= string.length; i++){
        if (i===1){
            result += string.slice(-(i));
        } else {
            result += string.slice(-(i), -(i-1));
        }
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
