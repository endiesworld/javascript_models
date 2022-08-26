// SAME VALUE COMPARISON Object.is(a, b)

console.log('******* Primitive Value comparison (5, 5) ********')
console.log(Object.is(5,5)) // true

console.log('******* Object Value comparison ({}, {}) ********')
console.log(Object.is({},{})) // false

console.log('******* Object Value comparison Object.is(NaN,NaN) ********')
console.log(Object.is(NaN,NaN)) // true

// STRICT EQUALITY a === b

console.log('******* Primitive Value comparison strict equality ( 5 === 5) ********')
console.log(5 === 5) // true

console.log('******* strict equality ({} === {} ) ********')
console.log({} === {}) // false

console.log('******* strict equality (NaN === NaN ) ********')
console.log(NaN === NaN) // false

console.log('******* isNaN( NaN ) ********')
console.log(isNaN( NaN )) // false