require("./xyz");

const name = "Hello world!"
var a = 10;
let b = 20;
console.log("name", name);
console.log("a+b", a+b);


// console.log("global", global)
// Node.js
console.log(global.setTimeout); // ✅ Works
console.log(this === global);   // ❌ false

// Universal
console.log(globalThis.setTimeout); // ✅ Works everywhere

// Example using globalThis
globalThis.setTimeout(() => {
  console.log("This works in any JS environment!");
}, 1000);


// console.log("globalThis", globalThis===global);//true

// require(""); 