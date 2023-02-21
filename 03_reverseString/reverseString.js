const reverseString = function(string) {

    reversedString = '';
    for(var i = 1; i <= string.length; i++){
        reversedString += string[string.length - i]
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
