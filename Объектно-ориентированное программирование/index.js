const { Exam } = require("./library");

let obj = new Exam("./json/abiturs.json");

console.log(obj.restore());