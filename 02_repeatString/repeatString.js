const repeatString = function(string, timesRepeated) {
    var retString = '';
    if(timesRepeated < 0){
        retString = 'ERROR';
    } 
    
    
    for(let i = 0; i < timesRepeated; i++){
        retString += string;
    }
    return retString;

};

// Do not edit below this line
module.exports = repeatString;
