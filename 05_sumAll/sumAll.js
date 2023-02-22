const sumAll = function(var1, var2) {
    var greater = (var1 > var2) ? var1 : var2;
    var lesser = (var1 < var2) ? var1 : var2;
    var culmative = 0;
    
    if(typeof(greater) != 'number' || typeof(lesser) != 'number' 
        || greater <= 0 || lesser <= 0) return 'ERROR';
    
    for( ; lesser <= greater; lesser++){
        culmative += lesser;
        
        
    }
    return culmative;


};

// Do not edit below this line
module.exports = sumAll;
