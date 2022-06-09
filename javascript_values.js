// Values and Code

/*  
    Values are diffrent from the codes(Instructions) we write. Codes interract with values
*/

// Primitive value type : Can't be created, destroyed or changed can only be pointed at 

console.log(typeof(2))
console.log(typeof('Emmanuel'))
console.log(typeof(true))
console.log(typeof(undefined))
console.log(typeof(null)) // Prints an object value type, eventhough null is a primitive type.


// Object or Functions : These are mutable values

console.log(typeof({}))
console.log(typeof([]))
console.log(typeof(new Date())); // "object"
console.log(typeof(/\d+/)); // "object"
console.log(typeof(Math)); // "object"
console.log(typeof(x => x**2))