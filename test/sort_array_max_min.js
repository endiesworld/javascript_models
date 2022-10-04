// Arrange elements in such a way that the maximum element appears at first, 
//then minimum at second, then second maximum at third position and second minimum at fourth, and so on.

let arr_ = [1,2,3,4,5]

let arr = [1,2,3,4,5,6,7]
function maxMin(arr){ 
    arr.sort((a,b)=>b-a)
    let holder = 0 ;
    let last_index = arr.length -1 ;
    for (let i = 1 ; i < last_index   ; i++){
        if(arr[i] < arr[i-1] && arr[i] > arr[last_index]){
            holder = arr[i] ;
            arr[i] = arr[last_index] ;
            arr[last_index] = holder ;
            console.log('first')
        }
        else if (arr[i] > arr[i-1] && arr[i] < arr[last_index]){
            holder = arr[i] ;
            arr[i] = arr[last_index] ;
            arr[last_index] = holder ;
            console.log('second')
        }
        else if (arr[i] < arr[i-1] && arr[i] > arr[i +1]) {
            holder = arr[i] ;
            arr[i] = arr[i + 1] ;
            arr[i + 1] = holder ;
            console.log('third')
        }
        console.log(arr)
    }
    return arr;

}

console.log(maxMin(arr))