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
