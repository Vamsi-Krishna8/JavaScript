// Interview Problem 1

console.log("Hello World");
setTimeout(function exec() {
  console.log("Timer done");
}, 0);
console.log("End");

//Interview Problem 2

console.log("Hello World");
setTimeout(function exec() {
  console.log("Timer done");
}, 0);
for (let i = 0; i < 1000000000; i++) {
  //some work
}
console.log("End");

//Interview Problem 3

console.log("Hello World");
for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    console.log("timer done");
  }, 10);
}
for (let i = 0; i < 1000000000; i++) {
  //some work
}
console.log("end");
