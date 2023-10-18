const fs = require("fs");
//syc........
// fs.writeFileSync("./ waseem.txt", "hello waseem");
//async.........
// fs.writeFileSync("./ waseem.txt", "hello waseem async")
// const result = fs.readFileSync("./ contact.txt", "utf-8");
// console.log(result);
fs.appendFileSync("./waseem.txt", new Date().getTime().toLocaleString);
