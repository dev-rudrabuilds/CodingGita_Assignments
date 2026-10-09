// C] COMPARISON OPERATORS

// 1. LOOSE EQUALITY (==)

// Question-1

// let a = "25";
// let b = 25;

// console.log(a == b);

// // Output:
// // true


// Question-2

// console.log(0 == false);

// // Output:
// // true


// Question-3

// console.log(10 == "10");
// console.log(null == undefined);

// // Output:
// // true
// // true


// Question-4

// console.log("" == 0);
// console.log([] == false);

// // Output:
// // true
// // true


// Question-5

// console.log(NaN == NaN);

// // Output:
// // false

// // Explanation:
// // NaN is not equal to anything, including itself.



// 2. LOOSE INEQUALITY (!=)

// Question-1

// console.log("18" != 18);

// // Output:
// // false


// Question-2

// let password = "1234";
// let userInput = 1234;

// console.log(password != userInput);

// // Output:
// // false


// Question-3

// console.log(5 != "5");
// console.log(0 != false);

// // Output:
// // false
// // false


// Question-4

// console.log(null != undefined);
// console.log("" != 0);

// // Output:
// // false
// // false


// Question-5

// console.log(NaN != NaN);

// // Output:
// // true

// // Explanation:
// // NaN is not equal to itself, so != returns true.



// 3. STRICT EQUALITY (===)

// Question-1

// let a1 = "25";
// let b1 = 25;

// console.log(a1 === b1);

// // Output:
// // false

// // Explanation:
// // === checks both value and data type.
// // "25" is a string and 25 is a number.


// Question-2

// console.log(0 === false);
// console.log(null === undefined);

// // Output:
// // false
// // false


// Question-3

// console.log(10 === "10");
// console.log(true === 1);

// // Output:
// // false
// // false


// Question-4

// console.log("" === 0);
// console.log([] === false);

// // Output:
// // false
// // false


// Question-5

// let value1 = 10;
// let value2 = "10";

// console.log(value1 === value2);

// // Output:
// // false

// // Explanation:
// // === is preferred because it does not perform automatic type conversion.
// // It checks both value and data type.



// 4. STRICT INEQUALITY (!==)

// Question-1

// console.log("18" !== 18);

// // Output:
// // true


// Question-2

// console.log(0 !== false);
// console.log(null !== undefined);

// // Output:
// // true
// // true


// Question-3

// console.log(5 !== "5");
// console.log(true !== 1);

// // Output:
// // true
// // true


// Question-4

// console.log("" !== 0);
// console.log(NaN !== NaN);

// // Output:
// // true
// // true


// Question-5

// let input = "5";

// if (input !== "0") {
//     console.log("Input is not equal to 0");
// }

// // Output:
// // Input is not equal to 0
