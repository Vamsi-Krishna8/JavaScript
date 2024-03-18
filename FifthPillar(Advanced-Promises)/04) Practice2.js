//Write a function to download data from the URL

function downloadData(url, cb) {
  console.log("Started downloading from url", url);
  setTimeout(function exec() {
    console.log("Downloading complete");
    const data = "ABCDEF";
    cb(data);
  }, 4000);
}

downloadData("www.xyz.com",function process(data){
    console.log("Downloaded data is",data)
})