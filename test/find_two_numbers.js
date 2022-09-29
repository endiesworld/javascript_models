// Given an array and a number "value", find two numbers from the array 
// that sum to 'value'. Implement your solution in JavaScript and see 
// if your output matches with the correct output.
arr = [1,21,3,14,5,60,7,6]
value = 81

// function findSum(arr,value){
//     let store = false
//     let lastindex = arr.length -1
//     let stop = false
//     for(let i = 0; i < arr.length ; i++){
//         lastindex -= i
//         let j = i + 1
//         if(arr[i] + arr[lastindex] === value){
//             store = [arr[i],arr[lastindex]]
//             break
//         }
//         for( ; j < lastindex ; j++){
//             if(arr[i] + arr[j] === value){
//             store = [arr[i],arr[j]]
//             stop = true
//             break
//             }
//             if(arr[j] + arr[lastindex] === value){
//             store = [arr[j],arr[lastindex]]
//             stop = true
//             break
//             }
//         } 
//         if (stop) {
//             break
//         }
//     }

//     return store ? store : false
// }

function findSum(arr, value) {

    arr.sort(function(a, b) {
        return a - b
    })

    var index1 = 0,
        index2 = arr.length - 1,
        result = [],
        sum = 0;

    while (index1 != index2) {
        sum = arr[index1] + arr[index2]

        if (sum < value) {
            index1++;
        } else if (sum > value) {
            index2--;
        } else {
            result.push(arr[index1]);
            result.push(arr[index2]);
            return result;

        }
    }
  return false;
}


console.log(findSum([1,2,3,4],5))
console.log(findSum([1,2,3,4],10))

console.log(findSum(arr,value))