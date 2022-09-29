
arr1 = [1,3,4,5]  
arr2 = [2,6,7,8]
function mergeArrays(arr1,arr2){
    let combinedArrays = []
    let arr1_pointer = 0 
    let arr2_pointer = 0
    while(arr1.length >  arr1_pointer && arr2.length > arr2_pointer){
        if(arr1[arr1_pointer] > arr2[arr2_pointer]){
            combinedArrays.push(arr2[arr2_pointer])
            arr2_pointer++
        }
        else{
            combinedArrays.push(arr1[arr1_pointer])
            arr1_pointer++
        }
    } 
    combinedArrays = combinedArrays.concat(arr1.slice(arr1_pointer))  
    combinedArrays = combinedArrays.concat(arr2.slice(arr2_pointer))  

    return combinedArrays
}

console.log(mergeArrays(arr1,arr2))