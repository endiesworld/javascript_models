let mamals = {
    brainy: true
}

let human = {
    legs: 2,
    __proto__: mamals
}

let emmanuel = {
    gender: 'male',
    __proto__ : human
}

console.log(`Emmanuel has ${emmanuel.legs} legs`)

// use hasOwnProperty method to chech if an property belongs to an object
console.log(`Does Emmanuel have the brainy property ? ${emmanuel.hasOwnProperty('brainy')}`)

console.log(`Is Emmanuel bariny ? ${emmanuel.brainy}`)

// When we read a property that doesn’t exist on our object, we’ll keep looking for it on the prototype chain.
//  If we don’t find it, we get undefined.
// But when we write a property that doesn’t exist on our object, that creates the property on our object

let obj = {};
console.log(obj.__proto__); 

// prototype Poluting
obj.__proto__.smell = 'banana';

console.log(`What does Emmanue smell like ? ${emmanuel.smell}`)
console.log(`Is Emmanuel bariny ? ${emmanuel.brainy}`)