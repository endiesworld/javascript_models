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

console.log(access(9))

// FUNTION PARAMETER
/**
 * REST PARAMETER
 * Enables a function to treat all arguments like an array
 * Also check the spread (...) operator, which is used to separate the elements of an array.
 */

const max = function(...values) {
    console.log(values instanceof Array);
    let large = values[0];
    for(let i = 0; i < values.length; i++) {
        if(values[i] > large) {
            large = values[i];
    }
    }
    return large;
};
console.log('*** REST PARAMETER*****')
console.log(max(2, 1, 7, 4));
console.log(max(4));
console.log(max([9, 1, 7, 4, 11]));
console.log(max(...[9, 1, 7, 4, 11]));

let c = () => (1,23)
let a , b = c()
console.log(`a: ${a}, b: ${b}`)
console.log(operational_fnc(cuberoot, my_list))
