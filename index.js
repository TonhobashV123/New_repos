const Calc = require('../Func.js');

console.log("Тонгобаш Василий");
console.log("Демонстрація Ряду Тейлора cos(x):");

var steps = process.argv[2] ? ? 4;
console.log("Кількість ітерацій: " + steps);
var res = Calc.TaylorA(2, steps);
console.log(res);