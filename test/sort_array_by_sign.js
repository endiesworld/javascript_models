// Given an array, can you re-arrange its elements in such a way that the negative elements 
//appear at one side and positive elements appear in the other?

let arr = [10,-1,20,4,5,-9,-6]
let output = [-1,-9,-6,10,20,4,5]

function reArrange(arr) {
    let len = arr.length
    let negative_store = [] ;
    let positive_store = [] ;
    for(let i = 0 ; i <len ; i++){
        
        (arr[i] < 0) ? negative_store.push(arr[i]) : positive_store.push(arr[i]);
    }
    return [...negative_store, ...positive_store];
}


console.log(reArrange(arr))

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
var rearrangeArray = function(arr) {
    let len = arr.length
    let negative_store = [] ;
    let positive_store = [] ;
    let central_store = [] ;
    for(let i = 0 ; i <len ; i++){
        
        (arr[i] < 0) ? negative_store.push(arr[i]) : positive_store.push(arr[i]);
    }
    for(let i = 0 ; i < (len / 2) ; i++){
        central_store.push(positive_store[i])
        central_store.push(negative_store[i])
        
    }
    return central_store;
    
};

console.log(rearrangeArray(nums))