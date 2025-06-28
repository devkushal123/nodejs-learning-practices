const crypto = require('crypto');
const fs = require('fs');

crypto.pbkdf2("password", "salt", 5000000, 64, "sha512", (err, key) => {
    console.log("1 Hash generated asynchronously:");
});
process.env.UV_THREADPOOL_SIZE = 2; // Set thread pool size to 1
// fs.readFile('file.txt', (err, data) => {
//     console.log("File content:", data.toString());
// }); 

crypto.pbkdf2("password", "salt", 5000000, 64, "sha512", (err, key) => {
    console.log("2 Hash generated asynchronously again:");
});

crypto.pbkdf2("password", "salt", 5000000, 64, "sha512", (err, key) => {
    console.log("3 Hash generated asynchronously again:");
});

crypto.pbkdf2("password", "salt", 5000000, 64, "sha512", (err, key) => {
    console.log("4 Hash generated asynchronously again:");
});

crypto.pbkdf2("password", "salt", 5000000, 64, "sha512", (err, key) => {
    console.log("5 Hash generated asynchronously again:");
});