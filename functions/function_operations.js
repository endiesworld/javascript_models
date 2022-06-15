/**
 * Functions 
 */

// Function Declaration
function function_1(){
    // Function body
    return 'End of function_1'
}

/**
 * Function Expression
 *  Function expressions are convenient when passing a function as an argument to another function
 */
let function_2 = function(){
    // Function body
    return 'End of function_2'
}

function function_3(func, any_value= true){
    console.log(func())
    return 'End of function_3'
}

// Call only two functions
console.log(function_1()) 
console.log(function_3(function_2))

/**
 * Recursive Function
 * A recursive function is a function that calls its self
 */
function recursive_func(value){
    return value == 1 ? 1 : ( value * recursive_func(value -1))
}

console.log( recursive_func(5)) 

/**
 * Nested function and Closure
 * Nested function ia a function inside another function
 * A closure is an expression (most commonly a function) that can have access to its environment variables]
 */

let main_function = function ( x, y){

    function inside_function(z) {
        console.log(x + y + z)
        return 'End of inside function'
    }

    console.log('Accessed main function')
    return inside_function
}

let access = main_function(5, 6)

console.log(access(9))