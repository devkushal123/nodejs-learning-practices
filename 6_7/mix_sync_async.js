const fs = require("fs");
const https = require("https");

// This code demonstrates mixing synchronous and asynchronous operations in Node.js.

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  console.log("res.statusCode:", res.statusCode);    
});

setTimeout(() => {
  console.log("Timeout executed after 2 seconds");
}, 2000);

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

var a = 5;
var b = 10;
function multiple(a,b) {
  console.log("This is a synchronous function.");
  return a*b;
}
var c = multiple(a, b);
console.log("The result of the multiplication is:", c);
