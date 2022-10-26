let Queue = require('./queue')

let myqueue = []

function findBin(n) {
   let result = [];
    let myQueue = new Queue();
    var s1, s2;
    myQueue.enqueue("1");
    for (var i = 0; i < n; i++) {

        result.push(myQueue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1";

        myQueue.enqueue(s1);
        myQueue.enqueue(s2);

    }

    return result;
}

console.log(findBin(3))
console.log(findBin(5))
// console.log(1%2)
// console.log(Math.floor(1 / 2))
// bin = '' + (2%2) + 1
// console.log(bin)