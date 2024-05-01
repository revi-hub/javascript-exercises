const fibonacci = function(num) {
    let prev = 1
    let curr = 1
    let variable = 0

    if(num == 0)
        return 0

    else if(num < 0){
        return 'OOPS'
    }

    for(let i = 2; i < num; i++){
        variable = curr;
        curr = prev + curr;
        prev = variable;
    }

    return curr
    
};

// Do not edit below this line
module.exports = fibonacci;
