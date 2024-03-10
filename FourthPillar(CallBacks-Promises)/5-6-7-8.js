/*
    ASYNC PROGRAMMING WITH JAVASCRIPT

    => JavaScript is sync in nature (these all are applicable if we create valid ecmascript code which is given by the standards)
    => JavaSctipt is single threaded.

    => Example after one code part is completed then only it will go to the next part of the code it will give enough time 
        for the code part to get complete.

*/

console.log("Hi");
setTimeout(function () {
  console.log("Timeout");
}, 4000);
console.log("Bye");

/*
    output is 

    Hi
    Bye
    Timeout    
        (JS dint wait at line no 13(setTimeout)) Whyy ???
*/

function timeByLoop() {
  console.log("loop Starts");
  for (let i = 0; i < 10000000000; i++) {
    //some task
  }
  console.log("loop ends");
}

function timeByRuntimeFeature() {
  console.log("Starting timer");
  setTimeout(function exec() {
    console.log("Completed by timer");
  }, 5000);
}

console.log("Hi");
timeByLoop();
timeByRuntimeFeature();
timeByLoop();
console.log("Bye");

/*
    Javascript never stop the native running ecma script code and prints someother piece of code like setTimer etc 
    it always completes the native piece of ecmaScript code and then only it will go to other piece of code.

    => It adds all the other events into the Event queue 
    => EventLoop is the thing which always keeps on checking the callStack whether it is empty or not.
        Eventqueue functions are executed only when the callStack is empty and no other globalCode is left.
    => Then the task is taken from the eventloop and one by one it is added to the callStack and the process continues.
    => EventLoop is an infiniteloop
*/
