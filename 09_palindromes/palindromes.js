const palindromes = function (string) {
    let forwardString= string.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let reverseString = forwardString.split("").reverse().join("");
    if (forwardString === reverseString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
