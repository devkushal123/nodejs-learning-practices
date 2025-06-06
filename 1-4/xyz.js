console.log("importing another file");
const { multiply, calcDevide } = require("./calculate");

const obj = require("./sum");

console.log("sum", obj.sum()); // 15
console.log("x", obj.x); 

console.log("mutiply", multiply(5, 10)); // 50
console.log("devide", calcDevide(10, 2)); // 5