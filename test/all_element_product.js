// Given an array, return an array where each index stores the product of all numbers in the array except the 
//number at the index itself.
arr = [1,2,3,4]

function findProduct_(arr) {
    let product = 1
    let store = []
    let zero_test = true

    for (let i = 0 ; i <arr.length; i++){
        if (arr[i] != 0){
            product *= arr[i]
        }
        else {
            zero_test = false
        }
    }

    for(let i = 0 ; i <arr.length; i++){
        if(zero_test){
            store.push(product/arr[i])
        }
        else{
            if(arr[i] == 0){
                store.push(product)
            }
            else {
                store.push(0)
            }
        }
    }

    return store;
}

function findProduct(arr) {
    var temp = 1,
        product = [];
    for (var i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
    }

    temp = 1;
    for (var i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
    }

    return product
}

console.log(findProduct(arr))
console.log(findProduct_(arr))