//-----------Problem 1----------------

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download Completed");
      resolve(data);
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbv");
promiseObj.then(function A(value) {
  console.log("value is", value);
});
console.log("end");

//-----------Problem 2----------------

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      resolve(data);
      console.log("Download Completed");
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbv");
promiseObj.then(function A(value) {
  console.log("value is", value);
});
console.log("end");

///-------Problem 3 ---------

console.log("Start of the file");
setTimeout(function time1() {
  console.log("Timer1 done");
}, 0);

for (let i = 0; i < 10000000000; i++) {}

let x = Promise.resolve("Vamsi's Promise");
x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");

//-------Problem 4 ---------

function blocking_for_loop() {
  for (let i = 0; i < 1000000000; i++) {}
}

console.log("Start of the file");
setTimeout(function timer1() {
  console.log("Time 1 done");
}, 0);
blocking_for_loop();
let x = Promise.resolve("Vamsi's promise1");
x.then(function processPromise(value) {
  console.log("Whose promise ?", value);
  blocking_for_loop;
});

let y = Promise.resolve("Vamsi's promise2");
y.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});

let z = Promise.resolve("Vamsi's promise3");
z.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});
setTimeout(function timer2() {
  console.log("Timer 2 done");
});
console.log("End of the file");
