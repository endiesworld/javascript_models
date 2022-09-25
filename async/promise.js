
let my_promise = new Promise(function(resolve, reject){
    console.log('Hey you are in the promise executor section')
    setTimeout(()=>resolve('Your promise is done'), 20)
})

// console.log(` None blocking(async) code ${my_promise.then(result => result)}`)
// my_promise.then(result => result)

// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
// });

my_promise.finally(()=>{ 
    console.log('Finally recieve and returns no argument form the promise, and runs irrespective of the outcome \n')})
    .then(result => console.log(result))
    .catch((error) => console.log(error));

for (let i = 1 ; i < 10; i++){
    
    console.log(`Blocking code ${i}`)
}