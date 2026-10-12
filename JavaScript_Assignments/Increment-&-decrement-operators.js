// Part E : increment / decrement operators(++/--)

// Part a:

// Q1

let counter = 5
counter++
console.log(counter)

// Q2

let lives = 3
lives--
console.log(lives)

// Q3

let score = 10
score++
console.log(score)

// Q4

let items = 8 
items--
console.log(items)

// Q5

let count = 0
count++
count++
console.log(count)


// Part - B

// Q6

let x = 5
let y = x++
console.log(y,x) // x++ first uses the original value of x (5) for y, then increases x to 6.

// Q7

let a = 5
let b = ++a
console.log(a,b)  // ++a increases a first, from 5 to 6, and then assigns the new value (6) to b.

// Q8 

let life = 3
let previousLife = life--
console.log(lives,previousLife) 

// Q9

let attempt = 0 
let currentAttempt = ++attempt
console.log(attempt,currentAttempt)

// Q10

let points = 100
points++
points--
console.log(points)

// Part C.

// Q11

let x = 10;
let y = x++;
let z = ++x; 
console.log(x, y, z);  // 12 10 12 

// Q12

let a = 5;
let b = a-- + ++a;
console.log(a, b);  // 5 10

// Q13

let m = 7;
let n = --m + m++;
console.log(m, n);  // 7 12

// Q14 

let p = 3;
let q = p++ + ++p + p;
console.log(p, q); // 5 13

// Q15 

let val = 0;
val = val++ + ++val;
console.log(val); // 2
