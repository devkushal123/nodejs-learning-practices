const fs = require("fs");
const a = 100;

setImmediate(() => {
  console.log('setImmediate');
});

Promise.resolve().then(() => {
  console.log('promise resolved');
}); 

fs.readFile(__dirname+"/file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content async:", data);
});

setTimeout(() => {
    console.log("Timeout executed");
}, 0);

process.nextTick(() =>console.log('process.nextTick'));

function ram(){
    return a * 2;
}

console.log("The result of the multiplication is:", ram());

/**
 * output will be --
 * 
 * The result of the multiplication is: 200
 * process.nextTick
 * promise resolved
 * Timeout executed
 * setImmediate
 * File content async: <content of file.txt>
 */
