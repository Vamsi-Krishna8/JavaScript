//<==== .then chaining =====>

/*
    Important point to note down is 
    .then function also returns a promise.
    => The .then function returns a promise object. It immeadiately returns a
        new promise object
    =>if you dont return anything from a java script function it by-default returns
        undefined. 
*/

function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started downloaded from url", url);
    setTimeout(function p() {
      console.log("Completed download in 5secs");
      const content = "ABCDEF";
      resolve(content);
    }, 5000);
  });
}

let x = download("www.xyz.com");
y = x.then(function fullfilment(value) {
  console.log("content Downloaded is ", value);
  return "New promise string";
});

y.then(function newfullfilment(value) {
  console.log("value from chained then promise", value);
});


// <====Problem====>

Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      }),
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
