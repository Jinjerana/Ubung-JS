// indexOf
// const str = 'test value'
// console.log(str.indexOf('t', 1));

// includes
// (true/false)

// Kanketination - only with adding
// string + string
// const value = 'Hello'
// const result = value + ' ' + 'world' (kanketination);
// const result2 = `${value} world` (ES6);

// Ub1
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - prapes;
// console.log(diff);

// Ub2
// let students = 100;
// // students = students + 50;
// students += 50;
// kombined operator
// console.log(students);

// ub3
// const value = 27.5;
// console.log(Math.round(value)) - 28
// console.log(Math.floor(value)) - 27
// console.log(Math.ceil()) - 28
// toFixed() - скільки значень після крапки
// console.log(value.toFixed(1)) - повертає рядок

// ub4
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in Stock`;
// console.log(message);

// ub5
// розрахунок індексу маси тіла
// let weight = '88,3';
// let height = '1.75';
// weight = Number(weight.replace(',', '.')) - change to koma, to Number
// height = Number(height.replace(',', '.'))

// const bmi = weight / (height ** 2)
// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1))
// console.log(bmi);

const resp = prompt('What is official name for JavaScript?');
let message;
if (resp === 'ECMAScript') {
	message = 'Reight!';
} else {
	message = 'False! ECMAScript!';
}
alert(message);
