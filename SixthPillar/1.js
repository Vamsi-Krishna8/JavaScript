function process() {
  let i = 0;
  function innerProcess() {
    i += 1;
    return i;
  }
  return innerProcess;
}
let result = process();
console.log(result);

/*   
    In JavaScript, a closure is a powerful and fundamental concept that deals with how functions are created and how they remember and access 
    variables from their scope. At its core, a closure occurs when a function is able to remember and access its lexical scope even when that 
    function is executing outside its original scope.

    => Closure ---> Closing over values ---->symbolic to remembering the scope of the variable
    We are not snapshotting the value we are remembering the exact same memory location  
*/

//Example 1

function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
}

const sayHello = createGreeting("Hello");
sayHello("Alice"); // Output: "Hello, Alice"

//Example 2

function createCounter() {
  let count = 0; // `count` is a "private" variable
  return function () {
    count += 1;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter();
console.log(counter2()); // Output: 1
console.log(counter1()); // Output: 3
console.log(counter2()); // Output: 2

//Example 3

function outerFunction() {
  let usedVar1 = "I am used";
  let usedVar2 = "I am also used";
  let unusedVar = "I am not used";

  return function innerFunction() {
    console.log(usedVar1); // Accesses usedVar1 from the outer scope
    console.log(usedVar2); // Accesses usedVar2 from the outer scope
    // Note: innerFunction does not access unusedVar
  };
}

const myClosure = outerFunction(); // Execute outerFunction to get the closure
myClosure(); // Call the closure

/*
    The closure (innerFunction) captures and remembers only the variables that it actually uses, which are usedVar1 and usedVar2 in this case. 
    Even though unusedVar exists in the same lexical scope as the other variables, it is not captured by the closure because it's not referenced within the closure.

    It's worth noting that JavaScript engines, such as V8 (used in Chrome and Node.js), are highly optimized for managing closures. These optimizations can include 
    not physically capturing variables that are not used within a closure.

    This example demonstrates how closures capture and maintain access to the specific variables from their outer function that they need to use, 
    allowing for efficient memory usage and encapsulation.

*/
