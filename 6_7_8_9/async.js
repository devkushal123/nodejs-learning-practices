
// 1. api calls
// 2. filereading
// 3. setTimeout(() => {
//     // database queries
// }, timeout);

// // these task takes time to execute

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  console.log("res.statusCode:", res.statusCode);    
});

setTimeout(() => {
  console.log("Timeout executed after 2 seconds");
}, 2000);

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
