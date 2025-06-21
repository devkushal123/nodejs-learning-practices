# Take a deep dive into the V8 JavaScript engine that powers NodeJS. 
- This video explores V8 architecture, key features, and optimizations. 
- Learn how V8 compiles JavaScript to machine code, its garbage collection mechanisms, and how it ensures high performance for NodeJS applications.


## 2-major component in nodejs is ---
- v8 engine
- libuv
- other things are libraries/modules as well

## V8 js engine (google) 
### steps 1- parsing
- when parsing happen so in that case code is parsed to v8 engine
- lexical analysis (tokenization)
- syntax analysis (parsing) 



https://astexplorer.net/

- JS is both interpreted and compiled language
- JS use the terminology called JIT(Just in Time) compilation 

ASt => ignition interpretter => byte code => execution

- turbofan compiler



<!-------------------------------------- Episode-09 | libuv & Event Loop : ---------------------------------->
- Uncover the secrets of the NodeJS event loop and its integration with libuv. 
- This video explains how the event loop processes asynchronous events, manages callbacks, and ensures non-blocking I/O. 
- Gain insights into how NodeJS achieves concurrency and high performance.

## Nodejs
- it have 2-major parts
-   v8 js engine
-   Libuv

## Libuv components
    - event loop
    - callback queues
    - thread pool

![Note] - async/non-blocking I/O is done in nodejs with help of libuv

## event loop
- it is inside libuv
- Job of eventloop is to keep checking the callstack and callback queues.
- If seems callback queues having some task waiting for execution, so, eventloop will check the callstack and if callstack is empty then eventloop will take the one of the task from callback queue and it give it to callstack for execution.

### event loop phases (4-major phases)
- Order of executions - 
    - timer (setTimeout, setInterval)
    - poll (API calls, file reads, crypto, fs, db calls) (I/O callbacks)
    - check (setImmidiate or callbacks)
    - close (responsible for closing connection like socket.on("close))

- before execution of above each phases event loop follow a inside execution cycle.
    process.nextTick()
    promises callbacks
- Before start execution of each phase callback will check if there is callback waiting for nextTick or promises.
So, if exist so first it will ececute this and then each phases.
 
### examples of phases
    C:\kohler.com\otherFilesFor_practice\nodejs-learning-practices\6_7_8_9\libuv_eventloop9.js

- eventloop waits on poll phase.
- when event loop is ideal it waits on poll phase
    <!-- in this example - -->
    C:\kohler.com\otherFilesFor_practice\nodejs-learning-practices\6_7_8_9\libuv_eventloop9.2.js
    - ******** event loop wait on pooll phase n then it got to check phase it will not start again from timer phase 
    - so, first setimmidiate will execute then timer