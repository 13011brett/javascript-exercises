

const removeFromArray = function(array, ...params) {
    var newArray = [];




    array.forEach(function myFunct(item){
        var isRemoved = false;
        for(var i = 0; i < params.length; i++){
            if (item === params[i]){
                isRemoved = true;
            }

        }
        if(!isRemoved){
            newArray.push(item);
        }
    })

    
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
