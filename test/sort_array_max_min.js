// Arrange elements in such a way that the maximum element appears at first, 
//then minimum at second, then second maximum at third position and second minimum at fourth, and so on.

let arr_ = [1,2,3,4,5]

let arr = [1,2,3,4,5,6,7]
function maxMin(arr){ 
let store = []
let stop = Math.floor((arr.length) / 2)
for(let i = 0 ; i <= stop ; i++) {
    store.push(arr.pop())
    if(i === stop){
        break
    }
    store.push(arr[i])
}
    return store;

}

console.log(maxMin(arr))

console.log(Math.floor((arr.length) / 2))