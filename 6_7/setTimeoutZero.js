console.log("Starting the program...");

const a = 100889;
const b = 100889;

//callback will only be pushed to callstack in v8 when the current call stack is cleared/empty 
setTimeout(()=>{// trust issue with setTimeout, it will not execute immediately
    console.log("This is a setTimeout with 0 milliseconds delay, but it will execute after the current call stack is cleared/empty.");
}, 0)

function multiply(a, b) {
  return a * b;
}       

const c = multiply(a, b);
console.log("The result of the multiplication is:", c);
