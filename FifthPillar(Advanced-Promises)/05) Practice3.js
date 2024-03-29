//We will perform the above examples with help of promises

function downloadData(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started downloading from url", url);
    setTimeout(function exec() {
      console.log("Downloading complete");
      const content = "ABCDEF";
      resolve(content);
    }, 6000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}

function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started uploading", file, "on", url);
    setTimeout(function uploadData() {
      console.logO("Upload completed");
      const response = "SUCCESS";
      cb(response);
    }, 2000);
  });
}

let x = downloadData("www.xyz.com");
let y = x.then(function processDownload() {
  console.log("Downloading done with following value", value);
  return writeFile(value);
});
let w = y.then(function processWrite(value) {
  console.log("data written in the file with name", value);
  return uploadData(value, "www.abc.com");
});
let q = w.then(function processUpload(value) {
  console.log("we have uploaded with value", value);
});
