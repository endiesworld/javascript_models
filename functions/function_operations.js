// Function Declaration
function squareroot(x){
    // some other function statemants
    return x*x
}


// Function Expression

const cuberoot = function (x){
    // Some other function statement
    return x*x*x
}


function operational_fnc(opes, data){
    let result = []
    if (data instanceof Array ){
        for(val of data){
            result.push(opes(val))
        }
    }
    else {
        result = opes(data)
    }
    return result
}

const my_list = [2,4,6,8]

console.log(operational_fnc(cuberoot, my_list))
