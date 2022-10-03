// Rotate an array by n
// Given an array, can you rotate its elements from right to left by one index?

// let arr_ = [1,2,3,4,5]
// let n_ = 3
let arr = [1,2,3,4,5,6,7]
let  n = 3
// let arr = [-1]
// let n = 2
// let arr = [-1,2]
// let n = 3
function rightRotate(arr,n){
    let len = arr.length - 1;
    let new_array = [...arr] ;
    let new_index = 0 ;
    for (let i = 0 ; i <= len ; i++){
        new_index = n + i ;
        while (new_index > len){
            new_index = new_index -len - 1
        }
        new_array[new_index] = arr[i]
    }
    return new_array; 
}

// function rightRotate(arr,n){
// return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
// }

console.log(rightRotate(arr,n))