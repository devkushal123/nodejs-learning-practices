# How Node.js Modules Work Behind the Scenes

## Module Wrapper Function------------

When you create a module in Node.js, all your code is automatically wrapped inside a function. This wrapper function is an IIFE (Immediately Invoked Function Expression):

```javascript

(function(){
    // all the code of module runs inside here 
})();

(function(exports, require, module, __filename, __dirname) {
    // Your module code goes here
    const myFunction = () => {
        console.log('Hello from module');
    };
    
    module.exports = myFunction;
});
```

## Key Concepts-------------

### Module Scope
- Variables and functions in a module are private by default
- Only items explicitly exported via `module.exports` or `exports` are accessible outside
- Each module has its own scope, preventing global namespace pollution

### IIFE Benefits
1. **Privacy/safety**: 
   - Keeps variables and functions private
   - Prevents global scope contamination
   - Creates closure for module-specific data

2. **Immediate Execution**:
   - Code runs as soon as the module is loaded
   - Initialization happens once
   - Cached for subsequent requires

### Module Parameters
| Parameter | Description |
|-----------|------------|
| `exports` | Shorthand for `module.exports` |
| `require` | Function to import modules |
| `module` | Reference to current module |
| `__filename` | Full path of current file |
| `__dirname` | Directory name of current file |

## Example

```javascript
// myModule.js
const privateVar = 'I am private';

function privateFunction() {
    return 'This is private';
}

module.exports = {
    publicVar: 'I am public',
    publicFunction: () => 'This is public'
};

// main.js
const myModule = require('./myModule');
console.log(myModule.publicVar);        // 'I am public'
console.log(myModule.privateVar);       // undefined
```

> **Note**: Module privacy is achieved through IIFE and the require statement, with Node.js passing module/require as parameters to the IIFE wrapper function.

```javascript
(function(module, require){

})();

```

- So, nodejs wraps everything inside moduel or function then it passes to v8 engine to excute the code
- So, Nodejs wraps functions and variables code inside IIFE and then adding some extra things (require, module ) to it and then give it to v8 engine n then v8 engine excutes ur code.


## 5-Step Mechanism of require(path)

1. **Resolving the Module**
   - Checks for local path (`./`)
   - Validates JSON file path
   - Checks for Node.js internal modules
   - Determines data type (node internal module/JS file/JSON)

2. **Loading the Module**
   - Identifies file type
   - Loads content based on file type

3. **Wrapping in IIFE**(compile step)
   - Encapsulates code in module wrapper function
   - Provides module-specific scope

4. **Code Evaluation**
   - Processes `module.exports` and `require` statements
   - Executes module code

5. **Module Caching**
   - Stores module in cache
   - Returns cached version for subsequent requires
   - here module will cached 
   - means code of that require only run once.


## Important Node.js Resources---------------------

### Official Resources -----------
- 📦 GitHub Repository: [nodejs/nodejs](https://github.com/nodejs)
- ⬇️ Download Node.js: [nodejs.org/download](https://nodejs.org/en/download)
- 👩‍💻 Contribute: [Get Involved](https://nodejs.org/en/about/get-involved)
- 🎓 Certification: [Linux Foundation Training](https://training.linuxfoundation.org/application-development)

### Key Documentation Links
- [Node.js API Documentation](https://nodejs.org/api/)
- [Module System](https://nodejs.org/api/modules.html)
- [require() Function](https://nodejs.org/api/modules.html#requireid)

### Source Code References
- [lib/internal/modules/cjs/loader.js](https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js)
- [lib/module.js](https://github.com/nodejs/node/blob/master/lib/module.js)




## require function deep in nodejs directory/github
- https://github.com/nodejs/node/blob/main/lib/internal/modules/helpers.js



Notes - use "?" + "." keys from keyboard to open vs code on/from github