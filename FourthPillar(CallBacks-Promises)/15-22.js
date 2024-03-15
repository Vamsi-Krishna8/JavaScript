/*
    ---PROMISES---

    => Promises are readability enhancers
    => They can solve the problem of InversionOfControl
    => In JavaScript promises are special type of objects that get returned immeadiately when we call them.
    => Promises acts as a placeholder for the data we hope to get back sometime in future
    => In these promise objects we can attach the functionality we want to execute once the future task is done.
    => Once the future task is done promises will automatically execute the attached functionality


    Q) How we can create a promise ??
    Q) How can we consime a promise ??

    Promise => may be we fulfill the promise
            => may be we fail to fulfill the promise

    How to create a promise

    => Creation of a promise object is synchronous in nature
    => There are 3 states for a promise object
        => Pending : When we create a new promise object this is the default state.It represents
                     work in progress

            The state can migrate from pending to either fulfilled or rejected
            
        => Fulfilled : if the operation is completed successfully the state property of the 
                       promise object will migrate from pending to fulfilled
        
        => Rejected : if the operation is not completed successfully then the state property of the
                      promise object will migrate from pending to rejected state

    
    ===Syntax for new Promise===

    => new is a keyword in javascript which is used to create objects
    => new Promise(f)
            => This is a constructor and it expects a callBack.

    new Promise(function(resolve,reject){
        // inside this function we can write our time consuming task.
    }); 

    Example 
    
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("foo");
        },300);
    });

    <===Resolve and Reject===>

    Whenever in the implementation of executor callBack if you call the resolve function,the
    promise goes to a fulfilled state and if you call the reject function then the promise goes
    to the rejected state & if you don't call anything then the promise remains in pending state.

    => Pending,Fulfilled,Rejected are the state properities of the promise
    => Similar to the state property promise also has a value property

    => In pending state the value is undefined but other state With whatever argument we call 
    the resolve or reject that argument gets assigned to the value property.
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise(function exec(resolve, reject) {
    for (let i = 0; i < 10; i++) {}
    let num = getRandomInt(10);
    if (num % 2 == 0) resolve(num);
    else reject(num);
  });
}

function createPromiseWithTimeout() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) resolve(num);
      else reject(num);
    }, 100);
  });
}

let x = createPromiseWithTimeout();
console.log(x);

/*
    Q) What if we pass multiple params in resolve or reject
    => It doesnt matter how many params you are passing to resolve or reject it only takes the first parameter

    Q) Can we return from resolve or reject ?
    => Generally whenever we write functions we return something so lets take 3 cases to demonstrate this
*/

/*
    Case 1 => Using return without resolve and reject
    In this case the exection of the code will run fine but the state of the promise will not change 
    => The state of the promise can only be changed with resolve or reject. Hence the state of the promise will be 
        unchanged in Case 1
*/

function createPromiseWithTimeout() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        console.log("fulfilling");
        return num;
      } else {
        console.log("rejecting");
        return num;
      }
    }, 100);
  });
}

let y = createPromiseWithTimeout();
console.log(y);

/*
    Case 2 : What if we have some piece of code after the resolve
    => It will work as normal function and the below lines will be executed normally !!
*/

function createPromiseWithTimeout() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        console.log("fulfilling");
        resolve(num);
        console.log("Completed Resolving");
        return num;
      } else {
        console.log("rejecting");
        reject(num);
        console.log("Completed Rejecting");
        return num;
      }
    }, 100);
  });
}

let y = createPromiseWithTimeout();
console.log(y);

/* 

    Case 3 : What if we use resovle/reject 2 times ??
    => You can use resolve/reject any number of times but the value associated with the promise will get affected only
        by the first resolve/reject and JS will ignore the remaining resolve/reject

*/

function createPromiseWithTimeout() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        console.log("fulfilling");
        resolve(num);
        resolve(10);
        console.log("Completed Resolving");
        return num;
      } else {
        console.log("rejecting");
        reject(num);
        reject(10);
        console.log("Completed Rejecting");
        return num;
      }
    }, 100);
  });
}

let y = createPromiseWithTimeout();
console.log(y);
