const fs = require("fs");

setImmediate(() => {
  console.log('setImmediate');
});

setTimeout(() => {
    console.log("Timeout executed");
}, 0);

Promise.resolve().then(() => {
  console.log('promise resolved');
}); 

fs.readFile(__dirname+"/file.txt", "utf-8", (err, data) => {
  console.log("File content async:");
});

process.nextTick(() =>{
  process.nextTick(() =>console.log('2nd process.nextTick'));

  console.log('process.nextTick')
});


console.log("The result of the multiplication is:");

/**
 * output will be --
 * 
 * The result of the multiplication is:
 * process.nextTick
 * promise resolved
 * Timeout executed
 * setImmediate
 * 
 * File content async: <content of file.txt>
 * 2nd process.nextTick
 * 2nd setImmediate
 * 2nd Timeout executed
 */
