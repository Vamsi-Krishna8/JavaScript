/*
    fun -> HOF => which takes fn (which is a function) as argument and the 
        function that you passes as an argument is the callBack function
    x => number
    fn => function
*/

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

fun(10, function exec() {
  //exec is a callBack function
  console.log("I am executed");
});

setTimeout(function rn() {
  console.log("Hello");
}, 4000); //after 4000ms rn() function is executed

/* Disadvantage of callBacks
    => Inversion of control
    => CallBack Hell --> Is kind of like a readability problem
        Callback hell is a term used to describe the situation in asynchronous programming where code 
        becomes difficult to read and maintain due to nested callbacks
*/

//INVERSION OF CONTROL

function doTask(fn, x) {
  //whole implementation is done by TeamA
  fn(x * x);
}

doTask(function exec(num) {
  console.log("Number is", num);
}, 9); // Due to callbacks,I am passing control of how exec should be called to doTask this is inversion of control and it is a
//bad practice
