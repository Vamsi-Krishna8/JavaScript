//Write a function to download data from the URL
//Write a function to save that downloaded data in a file and return that filename
//Write a function to upload a file written in previous step and upload that in new url 

function downloadData(url, cb) {
  //Downloads the data from the url
  console.log("Started downloading from url", url);
  setTimeout(function exec() {
    console.log("Downloading complete");
    const data = "ABCDEF";
    cb(data);
  }, 4000);
}

function writeFile(data, cb) {
  //writes the given data into a new file
  console.log("Started writing a file with", data);
  setTimeout(function write() {
    console.log("Completed writing the data in a file");
    const filename = "file.txt";
    cb(filename);
  }, 5000);
}

function uploadData(url, file, cb) {
  //uploads the data to the file from the given url
  console.log("Started uploading", file, "on", url);
  setTimeout(function uploadData() {
    console.logO("Upload completed");
    const response = "SUCCESS";
    cb(response);
  }, 2000);
}

//callBack Hell and inversion of control both exists here !!

downloadData("www.xyz.com", function processDownload(content) {
  console.log("We are now going to proicess the downloaded data");
  writeFile(content, function processWrite(filename) {
    console.log("We have downloaded and written the file,now we will upload");
    uploadData("www.upload.com", filename, function processUpload(response) {
      console.log("we have uploaded with", response);
    });
  });
});
