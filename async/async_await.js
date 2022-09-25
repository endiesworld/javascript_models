// async function my_promise() {
//   return "Async operation completed";
// }

// my_promise().finally(()=>{ 
//     console.log('Finally recieve and returns no argument form the promise, and runs irrespective of the outcome \n')})
//     .then(result => console.log(result))
//     .catch((error) => console.log(error));


async function my_promise() {
    console.log('Async function called')
    let promise = new Promise((resolve, reject) => {
        console.log('Inner promise started called')
        setTimeout(() => resolve("Promise is done!"), 1000)
    });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

my_promise()

for (let i = 1 ; i < 10; i++){
    
    console.log(`Blocking code ${i}`)
}