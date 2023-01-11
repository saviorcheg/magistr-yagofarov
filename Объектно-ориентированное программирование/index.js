const { Exam } = require("./library");


let obj = new Exam("./json/abiturs.json");
console.log(obj.orderBy(["rating"], ["desc"]));

// let obj = new Exam("./json/clients.json");
// console.log(obj.orderBy(["address.city","address.street","name"],["desc","desc","asc"]));