/*
1)Revising basic info regarding promises

<==2)Consuming a promise==>

let p=fetch("")
    ==>fetch is assumed to return a promise

=> What to do after the promise is rejected or fulfilled that to do we can mention
after sometime

=>You can attach the functionality that we need to execute once the promise is fulfilled
    or rejected

    => we use .then it take 2 parameters 
    p.then(fulfillmentHandler,rejectionHandler);
    => These 2 are funcitons which will be execute accordingly with the state 
    of the promise
    =>fulfillmentHandler will get executed if the promise state becomes fulfilled
        and rejectionHandler will get executed if the promise state becomes rejected
*/

//Example

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function exec(resolve, reject) {
    console.log("Entering the executor callBack in the promise constructor");
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        console.log("fulfilling");
        resolve(num);
      } else {
        console.log("rejecting");
        reject(num);
      }
    }, 10000);
    console.log("Exiting the executor callBack in the promise constructor");
  });
}

console.log("Starting.....");
const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to be complete");
console.log(p);
p.then(
  function fulfillmentHandler(value) {
    console.log("Inside fullfillmentHandler with value", value);
    console.log("promise after fulfilment is ", p);
  },
  function rejectionHandler(value) {
    console.log("Inside rejectionHandler with value", value);
    console.log("promise after rejection is ", p);
  }
);

/*
  => p.then() => registers handler for your promise objects
  => inside our promise object we have two arrays onfulfillment and onrejection
  => registration of the functions will be done in execution phase
  =>.then simply registers your fulfilment handler or rejection handler to promise arrays
*/

/*
  <===Discussion on fulfillment and rejection handlers===>

  Who executes the functions insider fulfillment and rejection handler
=> Whenever the promise is completed these functions go to the micro-task queue
=> These functions will not get executed immeadiately but wait in the micro-task-queue
=> These will only execute when the event loop confirms that there is nothing in call stack
    or there is no global piece of code left then only the jobs in micro-task queue
    gets executed
=> It doesnt matter whether or promise consists of synchronous/asynchronous piece of code
  the handlers are never immediately executed.

****Important point

=> At any point of time if event loop has a choice to pick from micro task queue
or call back queue(macro-task queue) then it always gives preference to micro-task
queue.
*/
