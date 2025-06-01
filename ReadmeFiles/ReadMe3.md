# Node.js Installation and Usage Guide

## Installation of Node.js

To install Node.js, follow these steps:

1. Download Node.js and NVM from the official website: [Node.js Download](https://nodejs.org/en/download)
2. Follow the installation instructions provided on the website.

## Using Node REPL

Node REPL (Read-Eval-Print Loop) is a command shell that allows you to run Node.js easily. To use Node REPL, follow these steps:

1. Open your command prompt (cmd).
2. Type `node` and press Enter.

This is the quickest way to run Node.js.

## Explanation

Node.js is a JavaScript runtime environment because of its REPL feature. It allows you to execute JavaScript code outside of a web browser, making it versatile for server-side scripting and other applications.



## Running the Application

To run this Node.js application, make sure you have Node.js installed.

Then, in your terminal, navigate to the project directory and run:

```bash
node index.js



## JavaScript Global Objects

We have browser global objects like `this` and `window`, and Node.js gives us the `global` object which has everything like `setTimeout`, `setInterval`. The `this` keyword will not give you the global object; it will be an empty object.

There is one common keyword for both browser and server-side environments — `globalThis`.

## Code Example

```js
// Browser
console.log(window.setTimeout); // ✅ Works
console.log(this === window);   // ✅ true (in global scope)

// Node.js
console.log(global.setTimeout); // ✅ Works
console.log(this === global);   // ❌ false

// Universal
console.log(globalThis.setTimeout); // ✅ Works everywhere

// Example using globalThis
globalThis.setTimeout(() => {
  console.log("This works in any JS environment!");
}, 1000);
