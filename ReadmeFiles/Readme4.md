# Using the `require` Function in Node.js

## Introduction

In Node.js, the `require` function is used to include one file into another. It allows you to use one module inside another module.

**Modules protect their variables and functions from leaking into the global scope.** This means that any variables or functions defined inside a module are not accessible outside unless explicitly exported.

## Example Scenario

Suppose you have two files:

### `sum.js`
```javascript
function sum() {
    return 10 + 5;
}

const x = 42;

module.exports = {
    sum,
    x
};
```

## Key Takeaways

| Feature | Description |
|---------|------------|
| ✅ Module Import | Use `require('./filename')` to include one file into another |
| ✅ Module Export | Use `module.exports` to export functions or variables |
| ✅ Destructuring | Directly access specific exports from a module |
| ✅ Scope Protection | Keeps code organized and prevents global scope leakage |
| ✅ Built-in Modules | Access Node.js modules like `fs`, `path`, and `http` |
| ✅ JSON Support | JSON files can be required and auto-parsed to objects |

## Module Systems in Node.js

### CommonJS (CJS) Modules

* Uses `require` and `module.exports`
* Enabled by default in Node.js
* Traditional module system
* Synchronous execution
* Runs in non-strict mode

#### Why Synchronous?
CommonJS modules are synchronous because:
- Each `require` call blocks execution until the module is loaded
- Modules are loaded and executed in order
- Dependencies are resolved and evaluated before the requiring module continues


#### CJS Example
```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
    add,
    subtract
};

// main.js
const math = require('./math.js');
// OR using destructuring
const { add, subtract } = require('./math.js');

console.log(math.add(5, 3));      // Output: 8
console.log(subtract(10, 4));      // Output: 6
```

### ES Modules (ESM)

* Modern JavaScript module system
* Requires `"type": "module"` in package.json
* Uses `export` keyword for exports
* Uses `import` instead of `require`
* Asynchronous execution
* Also known as ES6 modules
* Runs in strict mode

#### Why Asynchronous?
ESM modules are asynchronous because:
- Modules can be loaded in parallel, improving performance
- Import statements are resolved before code execution begins
- Static analysis is possible at parse time
- Better support for browser environments where async loading is crucial
- Supports top-level await

#### ESM Example
```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Alternative syntax using default export
export default {
    add,
    subtract
};

// main.js
// Named imports
import { add, subtract } from './mathUtils.js';
console.log(add(5, 3));       // Output: 8
console.log(subtract(10, 4)); // Output: 6

// Default import
import mathUtils from './mathUtils.js';
console.log(mathUtils.add(5, 3));  // Output: 8
```

### Package.json Configuration for ESM
```json
{
    "name": "my-project",
    "version": "1.0.0",
    "type": "module"
}
```


## JavaScript Execution Modes--------------------

### Strict Mode vs Non-Strict Mode

#### Non-Strict Mode (CommonJS Default)
* More forgiving JavaScript variant
* Silent errors are allowed
* Examples:
```javascript
// These are allowed in non-strict mode
x = 42;  // No declaration needed
delete Object.prototype;  // Allowed but fails silently
function sum(a, a, b) { return a + b; }  // Duplicate parameters allowed
```

#### Strict Mode (ESM Default)
* Activated by adding `'use strict';` or using ESM
* Catches common mistakes and "unsafe" actions
* Examples:
```javascript
'use strict';

// These will throw errors in strict mode
x = 42;  // ReferenceError: x is not defined
delete Object.prototype;  // TypeError: Cannot delete property
function sum(a, a, b) { return a + b; }  // SyntaxError: Duplicate parameter

// Correct way in strict mode
let x = 42;
function sum(a, b, c) { return a + b + c; }
```

#### Key Differences

| Feature | Non-Strict Mode | Strict Mode |
|---------|----------------|-------------|
| Variable Declaration | Optional | Required |
| Silent Errors | Allowed | Throws Errors |
| `this` in Functions | Global object | undefined |
| Duplicate Parameters | Allowed | Error |
| Octal Syntax | Allowed | Error |
| Delete Variables | Allowed | Error |
| Reserved Words | Can be variable names | Protected |



## Important Notes About module.exports

> ⚠️ **Key Concept**: `module.exports` is initially an empty object "{}" that serves as the export container for your module.

### How module.exports Works

```javascript
// Initially, module.exports is an empty object
module.exports = {}

// When you assign properties:
module.exports.add = (a, b) => a + b;         // Method 1: Direct property assignment
module.exports = { add: (a, b) => a + b };    // Method 2: Object assignment

// Both approaches work, but be careful with mixing them:
module.exports.add = (a, b) => a + b;
module.exports = { subtract: (a, b) => a - b }; // This will OVERWRITE the previous add function!
```

### Best Practices

✅ Choose one export style and stick to it:
```javascript
// Style 1: Individual exports
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

// Style 2: Single object export (recommended)
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
```

⚠️ **Warning**: Mixing export styles can lead to unexpected behavior and is considered a bad practice.



## Creating Folder Modules

A folder can become a module by creating an `index.js` file that imports and re-exports other modules from that folder.

### Example Folder Structure
```
math-module/
├── add.js
├── subtract.js
└── index.js
```

### Module Files

```javascript
// add.js
module.exports = (a, b) => a + b;

// subtract.js
module.exports = (a, b) => a - b;

// index.js
const add = require('./add');
const subtract = require('./subtract');

module.exports = {
    add,
    subtract
};
```

### Using the Folder Module

```javascript
// main.js
const mathModule = require('./math-module');
// OR with destructuring
const { add, subtract } = require('./math-module');

console.log(mathModule.add(5, 3));      // Output: 8
console.log(subtract(10, 4));           // Output: 6
```

### Best Practices
- Keep related functionality together in a folder
- Use descriptive file and folder names
- Export all module functionality through index.js
- Document the module's API in the folder's README.md