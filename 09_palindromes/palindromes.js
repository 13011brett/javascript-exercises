const palindromes = function (pdrome) {
    const replaced = pdrome.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversed = replaced.split("").reverse().join("");

    return replaced === reversed;

};

// Do not edit below this line
module.exports = palindromes;
