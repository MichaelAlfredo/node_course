const path = require("path");

//console.log(path.join("/publica", "dist", "/styles", "main.css"));

const filePath = ("/user", "modu", "/main", "vista.css");

console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve("main"));
