// JS promises example

//Basic usage
var promiseResponse = new Promise(function(resolve,reject) {
    // Perform an async task and then...
    if (true) {
        resolve(); // Add response content inside the parentheses
    } else {
        reject(); // Failure response inside these parentheses
    }
});

// This is the code that will use the response from the promises
promiseResponse.then(function() {
    // Do something with the resolve result
}).catch(function() {
    // Do something with the reject response
})
