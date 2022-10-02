// Given an array, find the first integer, which is unique in the array. 
// Unique means the number does not repeat and appears only once in the whole array.

let arr = [9,2,3,2,6,6]

function findFirstUnique(arr) {
    let store = {}
    let store_order = []
    let unique = null
    for(let i = 0 ; i <arr.length ; i++){
        if(store.hasOwnProperty(arr[i])){
            store[arr[i]] += 1        
        }
        else{
            store[arr[i]] = 1
            store_order.push(arr[i])
        }
    }

    for (let i = 0 ; i <store_order.length ; i++){
        if (store[store_order[i]] === 1){
            unique = store_order[i]
            break
        }
    }

    return unique

}

console.log(findFirstUnique(arr))