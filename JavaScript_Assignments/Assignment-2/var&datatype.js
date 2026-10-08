// Assignment: Introduction to Variables and Datatypes

// Part I: Variables (let, var, const)

// Part A - 4 Questions

// Q1.

// let name = "Faiyaz"; let age = 20; let city = "Gujarat";

// console.log(name); console.log(age); console.log(city);

// Q2.

// let score = 50; score = 80;

// console.log(score);

// Output: 80

// Q3.

// const PI = 3.14;

// console.log(PI);

// Output: 3.14

// Q4.

// var num1; let num2;

// console.log(num1); console.log(num2);

// num1 = 10; num2 = 20;

// console.log(num1); console.log(num2);

// Output: undefined undefined 10 20

// Part B - 4 Questions

// Q5.

// const studentName = "Faiyaz"; let marks = 85; const schoolName = "ABC School";

// marks = 90;

// console.log(studentName); console.log(marks); console.log(schoolName);

// Q6.

// if (true) { var a = 10; let b = 20; const c = 30; }

// console.log(a); console.log(b); console.log(c);

// Output: 10 ReferenceError ReferenceError

// Q7.

// Using var:

// var user = "Faiyaz"; var user = "Rahul";

// console.log(user);

// Output: Rahul

// Explanation: var allows re-declaration.

// Using let:

// let userName = "Faiyaz"; let userName = "Rahul";

// Output: SyntaxError

// Q8.

// var a = 10; let b = 20; const c = 30;

// a = 100; b = 200; c = 300;

// console.log(a); console.log(b); console.log(c);

// Output: 100 200 TypeError

// Part C - 2 Questions

// Q9.

// Given Code:

// var x = 10;

// if (true) { var x = 20; let y = 30; const z = 40; }

// console.log(x); console.log(y); console.log(z);

// Output:

// 20 ReferenceError ReferenceError

// Q10.

// Correct Code:

// const name = "Faiyaz";

// let age = 20; age = 25;

// if (true) { var city = "Delhi"; }

// let country = "India";

// console.log(name); console.log(age); console.log(city); console.log(country);

// let score = 50; score = 80;

// console.log(score);

// Output:

// Faiyaz 25 Delhi India 80

// Part D - Hoisting (2 Questions)

// Q11.

// Code:

// console.log(a); console.log(b); console.log(c);

// var a = 10; let b = 20; const c = 30;

// Output:

// undefined ReferenceError ReferenceError

// Q12.

// Correct Code:

// var x = "Hello"; let y = "World"; const z = "!";

// console.log(x); console.log(y); console.log(z);

// console.log(x + " " + y + z);

// Output:

// Hello World ! Hello World!

// Part E - Basic Identification

// Q1.

// Code:

// let wholeNumber = 25; let decimalNumber = 25.5; let text = "JavaScript"; let isStudent = true;

// console.log(wholeNumber, typeof wholeNumber); console.log(decimalNumber, typeof decimalNumber); console.log(text, typeof text); console.log(isStudent, typeof isStudent);

// Output:

// 25 number 25.5 number JavaScript string true boolean

// Q2.

// Code:

// let a; let b = null;

// console.log(a, typeof a); console.log(b, typeof b);

// Output:

// undefined undefined null object

// Q3.

// Code:

// let positiveInfinity = Infinity; let negativeInfinity = -Infinity; let notANumber = NaN; let scientificNumber = 2.5e3; let readableNumber = 1_000_000;

// console.log(positiveInfinity, typeof positiveInfinity); console.log(negativeInfinity, typeof negativeInfinity); console.log(notANumber, typeof notANumber); console.log(scientificNumber, typeof scientificNumber); console.log(readableNumber, typeof readableNumber);

// Output:

// Infinity number -Infinity number NaN number 2500 number 1000000 number

// Q4.

// Code:

// let singleQuote = 'Hello JavaScript'; let doubleQuote = "Hello World";

// let name = "Faiyaz"; let templateString = Hello ${name};

// console.log(singleQuote); console.log(doubleQuote); console.log(templateString);

// Output:

// Hello JavaScript Hello World Hello Faiyaz

// Part F - Advanced Primitive Types

// Q5.

// Code:

// let symbol1 = Symbol("id"); let symbol2 = Symbol("id");

// console.log(symbol1 === symbol2);

// let user = {};

// user[symbol1] = "First Value"; user[symbol2] = "Second Value";

// console.log(user[symbol1]); console.log(user[symbol2]);

// Output:

// false First Value Second Value

// Q6.

// Code:

// let num = 9007199254740991;

// console.log(num + 1); console.log(num + 2); console.log(num + 3);

// let bigNum = 9007199254740991n;

// console.log(bigNum + 1n); console.log(bigNum + 2n); console.log(bigNum + 3n);

// Output:

// 9007199254740992 9007199254740992 9007199254740994

// 9007199254740992n 9007199254740993n 9007199254740994n

// Q7.

// A unique identifier: Type: Symbol Example: const id = Symbol("id");

// A very large integer: Type: BigInt Example: const bigNumber = 9007199254740993n;

// Declared but not given a value: Type: Undefined Example: let value;

// Intentional empty value: Type: Null Example: let data = null;

// Part G - Prediction & Fixing

// Q8.

// Code:

// let a; let b = null; let c = 42; let d = "Hello"; let e = true; let f = Symbol("key"); let g = 123n;

// console.log(typeof a, a); console.log(typeof b, b); console.log(typeof c, c); console.log(typeof d, d); console.log(typeof e, e); console.log(typeof f, f); console.log(typeof g, g);

// Output:

// undefined undefined object null number 42 string Hello boolean true symbol Symbol(key) bigint 123n

// Q9.

// Incorrect Code:

// let num = 10; let text = Hello; let flag = True; let empty; let nothing = Null; let unique = symbol("id"); let big = 9007199254740991;

// Correct Code:

// let num = 10; let text = "Hello"; let flag = true; let empty; let nothing = null; let unique = Symbol("id"); let big = 9007199254740991n;

// console.log(num, text, flag, empty, nothing, unique, big);

// Q10.

// a) Main difference:

// Primitive data types store a single simple value. Non-primitive data types can store collections or more complex data.

// Example:

// let age = 20; // Primitive let student = {name: "Riya"}; // Non-Primitive

// b) Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt are called Primitive because they represent single basic values and are not objects.

// c) Example of Non-Primitive:

// let student = { name: "Riya", age: 18 };

// Objects are Non-Primitive because they can contain multiple values and properties.

// Part H - Non-Primitive Data Types

// Q1.

// Code:

// let student = { name: "Riya", age: 18, isEnrolled: true };

// console.log(student); console.log(student.name); console.log(student.age); console.log(student.isEnrolled);

// Output:

// {name: "Riya", age: 18, isEnrolled: true} Riya 18 true

// Q2.

// Code:

// let scores = [85, 92, 78, 90];

// let mixedData = [25, "Hello", true, null];

// console.log(scores); console.log(mixedData);

// console.log(scores[0]); console.log(scores[3]);

// Output:

// [85, 92, 78, 90] [25, "Hello", true, null] 85 90

// Q3.

// Code:

// function calculateArea(length, width) { return length * width; }

// console.log(calculateArea(10, 5)); console.log(calculateArea(8, 4));

// Output:

// 50 32

// Q4.

// Code:

// let num = 10; let text = "Hello"; let flag = true; let empty = null; let object = {name: "Riya"}; let array = [1, 2, 3];

// function greet() { return "Hello"; }

// console.log(num, typeof num); console.log(text, typeof text); console.log(flag, typeof flag); console.log(empty, typeof empty); console.log(object, typeof object); console.log(array, typeof array); console.log(greet, typeof greet);

// Output:

// 10 number Hello string true boolean null object {name: "Riya"} object [1, 2, 3] object function function

// Part I - Naming Rules & Best Practices

// Q5.

// let userName; Valid let 2ndPlace; Invalid let _privateData; Valid let $price; Valid let my-age; Invalid let function; Invalid let totalCount; Valid let const; Invalid

// Q6.

// Original Code:

// let x = 10; let y = 5; let a = x * y; let b = 100;

// Improved Code:

// const length = 10; const width = 5; const area = length * width; const maximumValue = 100;

// console.log(area); console.log(maximumValue);

// Q7.

// Code:

// let age; age = 20;

// let name = "Faiyaz";

// const PI = 3.14;

// console.log(age); console.log(name); console.log(PI);

// Output:

// 20 Faiyaz 3.14

// Part J - Prediction & Fixing

// Q8.

// Code:

// let person = { name: "Amit", age: 22 };

// let colors = ["red", "green", "blue"];

// function sayHi() { return "Hi!"; }

// let empty = null;

// console.log(typeof person); console.log(typeof colors); console.log(typeof sayHi); console.log(typeof empty); console.log(person.name); console.log(colors[1]); console.log(sayHi());

// Output:

// object object function object Amit green Hi!

// Q9.

// Correct Code:

// let student = { name: "Neha", age: 19 };

// let scores = [90, 85, 88];

// function greet(name) { return "Hello " + name; }

// const maxScore = 100;

// console.log(student.name); console.log(scores[0]); console.log(greet("Neha")); console.log(maxScore);

// Output:

// Neha 90 Hello Neha 100

// Q10.

// a) Difference between Object and Array:

// An Object stores data using key-value pairs.

// Example:

// let student = { name: "Riya", age: 18 };

// An Array stores multiple values in an ordered list.

// Example:

// let marks = [80, 90, 85];

// b) Why does typeof null return "object"?

// typeof null returns "object" because of an old historical behavior in JavaScript. However, null is not actually an object. It represents an intentional absence of value.

// c) Why keep arrays with a single data type?

// Keeping the same data type makes the array easier to understand, process, and work with.

// Example:

// let marks = [80, 85, 90, 95];

// d) When should you use const and let?

// Use const when the variable will not be reassigned.

// Example:

// const PI = 3.14;

// Use let when the variable's value needs to change.

// Example:

// let score = 50; score = 80;