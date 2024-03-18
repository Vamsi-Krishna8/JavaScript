//<======How promises resolve issues of callBacks ?? ====>

// function download(url, cb) {
//   console.log("Started downloading...");
//   setTimeout(function exec() {
//     console.log("Completed downloading after 5 secs");
//     const content = "ABCDEF";
//     cb(content);
//   }, 5000);
// }

// download("www.xyz.com", function processDownload(data) {
//   console.log("Downloaded data is ", data);
// });

/*
    Now in the above piece of code let us assume that the download function is not written by you
    => You are expecting the callback function (cb) is only called once
    What if ?
    => It is calling it twice ?
    => Or it is not even calling ?

==> So this is the problem of inversion of control that the control of your callback you are 
    giving it to the other function now the other function is deciding 
     => When to call your callback,where to call your callBack , Whether to call your callBack
        and how many times to call your callBack.
*/

// Same output can be achieved by using promises

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
x.then(function fullfilment(value) {
  console.log("content Downloaded is ", value);
});

//Now the whole control of what should happen is completely with you !!
