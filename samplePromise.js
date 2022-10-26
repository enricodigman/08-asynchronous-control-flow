// create a file named sampleCallback.js

function myAsync1(callback) {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve("async1")
        }, 3000)
    })
}

function myAsync2(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("async2")
        }, 2000)
    })
}

function myAsync3(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("async3")
        }, 1000)
    })
}

function myAsync4(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                  // lets say something happened
              throw new Error("forced error")
          } catch (err) {
              return reject(err)
          }
        }, 3000)
    })
	
}

// 1. Need to fix this so that we run it in the proper sequence
// 2. it should be printing the values "async1","async2"... but it seems there is an error in the callback handling
// 3. should 
function start() {
    myAsync1().then(c => {
        console.log(c)
        return myAsync2()
    }).then(c => {
        console.log(c)
        return myAsync3()
    }).then(c => {
        console.log(c)
        return myAsync4()
    }).catch(err => {
        console.log(err);
    })
}

start()



// Convert this using promises and name the file samplePromise.js
// convert this using async await where the sequence is respected. name the file sampleAsyncAwait.js
