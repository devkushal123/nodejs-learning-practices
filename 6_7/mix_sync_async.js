const fs = require("fs");
const https = require("https");

console.log("Starting the mix of synchronous and asynchronous operations...");
var a = 5;
var b = 10;

// This code demonstrates mixing synchronous and asynchronous operations in Node.js.

// https.get("https://dummyjson.com/products/1", (res) => {
//   console.log("res.statusCode:", res.statusCode);    
// });

setTimeout(() => {
  console.log("Timeout executed after 2 seconds");
}, 2000);

fs.readFileSync("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("--------------------yyyyyyy:", data);
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content async:", data);
});

function multiple(a,b) {
  console.log("This is a synchronous function.");
  return a*b;
}
var c = multiple(a, b);
console.log("The result of the multiplication is:", c);
