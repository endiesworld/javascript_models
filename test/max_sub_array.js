// Given an unsorted array A, the maximum sum sub array is the sub array (contiguous elements) from A
//  for which the sum of the elements is maximum. In this challenge, we want to find the sum 
// of the maximum sum sub array. This problem is a tricky one because the array might have 
// negative integers in any position, so we have to cater to those negative integers while 
// choosing the continuous subarray with the largest positive values.

let findMaxSumSubArray = function(A) {
    let max = A[0] ;
    let running_max = A[0];
    for (let i = 1; i <A.length ; i++){
        if(A[i] > running_max + A[i] && A[i] > running_max){
            running_max = A[i]
        }
        else {
            running_max += A[i]
        }
        if(running_max > max){
            max =  running_max
        }
    }
    return max
};

// console.log(-5 > -10)

// console.log(findMaxSumSubArray([-2,10,7,-5,15,6]))

// console.log(findMaxSumSubArray([-4,2,-5,1,2,3,6,-5,1]))
// console.log(findMaxSumSubArray([-15,-14,-10,-19,-5,-20, -3, -10]))

// let arr = [1,2,3,4]

// console.log(arr[5])

var arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]
function foo(m) {
    var v = m[0][0];
    for (let row of m) {
        for (let element of row) {
            if (v < element){
                v = element
            }
        }
    }
    return v
}

console.log(foo(arr[0]))