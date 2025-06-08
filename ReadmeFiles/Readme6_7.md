# ---------- Libuv and async IO -----------------
# -----Delve into libuv, the library that powers NodeJS's asynchronous I/O. This video explains how libuv handles non-blocking I/O operations, its role in the NodeJS ecosystem, and how it contributes to the performance and scalability of NodeJS applications.


- Node.js has an event-driven architecture capable of asynchronous I/O. 
In this episode, we will make understanding about -
1. event-driven architecture
2. Asynchronous I/O

- JS ---> synchronous single threaded language.
    - here synchronous means blocking way
    - So, the code will execute serially one by one one after the other
    - JS is simple it is just using single thread to excute and run the code.
    - But in other languages they run some peice of code with on ethread and other piece of code with other thread to run parallel.
    - JavaScript is a synchronous, single-threaded language, meaning there is only one thread in which the JavaScript engine (such as the V8 engine) runs. In JavaScript, code is executed line by line within this single thread

- Node.js - making JS asynchronous to execute code non-blocking/parallel with a single thread itself.


### ---------- for synchronous --------- 

- whenever a code is excuted a Global execution context(GEC) will be created and it will go inside your callstack
- Code will be run on a single threaded way or synchronous way.
```javascript
var a = 12345;
var b = 67890;

function multiply(a, b) {
  return a * b;
}
var c = multiply(a, b);

```

fisrt a will be exceuted and store inside the memory 
then same for b
then function 
the it will read c and check c having function call, so whenever function call so, in this case, it will create a sperate execution context
for multiply function and 
it will store function excution context inside callstack.

time, tide n js waits for none.


### ----------- for async------------
- Whenever we read async operations like - file read, api call, fetch db data and timeout.
- Nodejs give super power to JS to execute code in async way which is due to the library called "libuv"
- "Libuv" - made async I/O made simple 

- so, nodejs works like code goes to v8 engine if code is sync it is fine executed as it is like synchrounous.
if code is async so to execute that nodejs gives power to v8 engine to use libuv library to execute the code async way.

- Whenever js code executed by v8 and v8 engine see there is an api call, file read operation and settimeout so, v8 engine "offload the code to libuv" and libuv manages and executes it.


### lets understand mix of sync and async code---
C:\kohler.com\otherFilesFor_practice\nodejs-learning-practices\6\mix_sync_async.js

in theis code example --
- libuv resposible to make file system call and get back the data and once it has the data give it to v8 engine and v8 engine will create execution context to execute that function data for file read and once execute execute context will be removed and stack will be empty

- so, nodejs is async and v8 is sync.
- nodejs is async I/O (non-blocking ) bcs its is not bloacking main thread 
- ***nodejs is non-block i/o using v8 engine.


<!-- episode 7 need to start -->