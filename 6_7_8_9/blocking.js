const crypto = require('node:crypto');

console.log("hello world");

var a = 5;
var b = 10; 


// sync function will block the main thread - dont use it.
const key = crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
console.log("1st Hash generated synchronously", key.toString('hex'));

// async func
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", (err, key) => {
  console.log("2nd Hash generated after 2 seconds", key.toString('hex'));
});

function multiple(a, b) {
  console.log("This is a synchronous function.");
  return a * b;
}

var c = multiple(a, b);
console.log("The result of the multiplication is:", c);