// Given an array of size n, can you find the second maximum element in the array? Implement your
// solution in JavaScript and see if your output matches the correct output!

function findSecondMaximum(arr) {
    let store = [arr[0], arr[1]].sort((a, b) => a - b)
    for (let i = 1  ; i <arr.length ; i++){
        if((arr[i] > store[0]) && (store[1] != arr[i])){
            store[0] = arr[i]
            if(store[1] < arr[i]){
                store[0] = store[1]
                store[1] = arr[i]
            }
        }
    }
    return store[0];
}

console.log(findSecondMaximum(arr))