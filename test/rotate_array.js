// Rotate an array by n
// Given an array, can you rotate its elements from right to left by one index?

let arr = [1,2,3,4,5]
let n = 3

function rightRotate(arr,n){
    let len = arr.length ;
    let new_array = [...arr] ;
    let new_index = 0 ;
    let shift = len -( n -1) ;
    for (let i = 0 ; i < len ; i++){
        new_index = shift + i ;
        if (new_index >= len){
            new_index -= len
        }
        new_array[new_index] = arr[i]
    }
    return new_array; 
}

// function rightRotate(arr,n){
// return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
// }

console.log(rightRotate(arr,n))