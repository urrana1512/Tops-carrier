console.log("hello world"); //Global - Core Module
const fs = require("fs"); //Non-Global - Core Module
fs.writeFileSync("Hello.txt", "Hello World");
