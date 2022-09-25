function bubble_sort(arr) {
    let arr_length = arr.length ;
    for (let i = arr_length  ; i > 0 ; i--){
        for (let j = 0 ; j < i -1 ; j++){
            let a = arr[j] ;
            let b = arr[j+1] ;
            if (a > b){
                arr[j] = b ;
                arr[j + 1] = a
            }
        }

    }
}

arr = [3, 420,7,69,42,9,4]
bubble_sort(arr)
console.log(arr)