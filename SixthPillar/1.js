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
