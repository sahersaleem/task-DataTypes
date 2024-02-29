// Task Datatypes
//example no 1  (string)
let favouriteCity = "Karachi";
let favouriteCountry = "Pakistan";
console.log(`${favouriteCity}` + `${favouriteCountry}`);
//example 2 (number)
let a = 10;
let b = 25;
let c = 30;
console.log('a+b = ', a + b);
console.log('a-b = ', a - b);
console.log('a*c = ', a * c);
console.log('c/a = ', c / a);
// example 3(boolean)
let isStudent = true;
let isTeacher = false;
console.log(isStudent);
console.log(isTeacher);
// example4(null)
let friend = null;
console.log(friend);
// example5 (undefined)
let favouriteFood;
console.log(favouriteFood);
// task 7 
// we can pass a special value in it; 
let sym1 = Symbol();
let sym2 = Symbol("name");
let sym3 = Symbol("12345");
console.log(sym1.description);
console.log(sym2.description);
console.log(sym3.description);
// example7 (bigint)
let largeNum = 551536374866737747474998876543321190098777n;
console.log(largeNum);
export {};
