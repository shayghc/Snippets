/* This is a practical example of the use of a promises
 *
 * Attribution: From YouTube video - https://www.youtube.com/watch?v=IGYxfTTpoFg
 * 'Promises - Beau Teaches JavaScript'
 *
 */

let promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;
    console.log(thisPromiseCount + ': Started - Sync code started');

    let p1 = new Promise(function(resolve,reject) {
        console.log(thisPromiseCount + 'Promise started - Async code started');
        // Example use of setTimeout - in this case to provide asynchronous responses
        window.setTimeout(
            function() {
                resolve(thisPromiseCount);
            }, Math.random() * 2000 + 1000);
    });

    p1.then(function(val) {
        console.log(val + ': Promise fulfilled - Async code terminated');
    }).catch(function(reason) {
        console.log('Handle rejected promise ('+reason+') here.');
    });

    console.log(thisPromiseCount + ': Promise made - Sync code termination')
}

testPromise();
testPromise();
testPromise();
