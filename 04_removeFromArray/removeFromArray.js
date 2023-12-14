const removeFromArray = function(array, ...itemsToDelete) {
    for(let i = 0; i < itemsToDelete.length; i++){
        if(array.includes(itemsToDelete[i])){
            let itemToDeleteIndex = array.indexOf(itemsToDelete[i])
            let arrayPartLeft = array.slice(0, itemToDeleteIndex)
            let arrayPartRight = array.slice(itemToDeleteIndex + 1, array.length)
            array = arrayPartLeft.concat(arrayPartRight)
        }
    }
    return array
    
};

// Do not edit below this line
module.exports = removeFromArray;
