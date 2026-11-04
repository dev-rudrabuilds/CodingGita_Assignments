// Assignment : Conditional Statements


// A] if Statement

// Question-1

// let num = 25

// if (num%5==0){
//     console.log{"Divisible by 5"}
// }


// Question-2

// let age = 61

// if (age>=60){
//     console.log{"Senior Citizen"}
// }


// Question-3

// let num = 99

// if(num>100){
//     console.log("Big Number")
// }


// Question-4

// let temprature = 5

// if(temprature<10){
//     console.log("Very Cold")
// }


// Question-5

// let marks = 100

// if(marks=100){
//     console.log("Perfect Score")
// }


// Question-6

// let num = -20

// if(num<0){
//     console.log("Negative Number")
// }


// Question-7

// let word = " "

// if(word ==" "){
//     console.log("No input provided")
// }


// Question-8

// let year = 2026

// if(year%100==0){
//     console.log("Century Year")
// }


// Question-9

// let num = 747

// if(num%2==0 && num >0){
//     console.log("Positive Even Number")
// }


// Question-10

// let marks = 36

// if(marks>=35 && marks<=100){
//     console.log("Valid Marks")
// }


// B] if...else Statement

// Question-1


// let num =20;

// if (num%2==0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }



// Question-2


// let age =18;

// if (age>=18){
//     console.log("Eligible")
// }else{
//     console.log("Not Eligible")
// }


// Question-3


// let num =77;

// if (num>0){
//     console.log("Positive")
// }else{
//     console.log("Negative")
// }


// Question-4


// let marks =77;

// if (marks>=35){
//     console.log("Passed")
// }else{
//     console.log("Failed")
// }


// Question-5


// let ch ="F";

// if (ch >="A" && ch<="Z"){
//     console.log("UpperCase Letter")
// }else{
//     console.log("Not a UpperCase Letter")
// }


// Question-6


// let num = 9;

// if (num%3==0){
//     console.log("Divisible By 3")
// }else{
//     console.log("Not Divisible By 3")
// }


// Question-7


// let password = prompt("Enter password:-");

// if (password=="admin123"){
//     console.log("Login Successful")
// }else{
//     console.log("Incorrect Password")
// }


// Question-8


// let num = 24;

// if (num%4==0){
//     console.log("Leap Year")
// }else{
//     console.log("Not Leap Year")
// }


// Question-9


// let num1 = 24;
// let num2 = 26;

// if (num1>num2){
//     console.log(num1)
// }else{
//     console.log(num2)
// }


// Question-10


// let num = 24;

// if (num>0){
//     console.log("Positive")
// }else{
// if (num<0){
//     console.log("Negative")
// }else{
//     console.log("zero")
// }



// C] if...else if...else Statement


// Question-1

// let month = Number(prompt("Enter A Month Number:-"));

// if (month==12 || month==1 || month==2){
//     console.log("Winter")
// };
// else if (month==3 || month==4 || month==5){
//     console.log("Summer")
// };
// else if (month==6 || month==7 || month==8){
//     console.log("Monsoon")
// };
// else if (month==9 || month==10 || month==11){
//     console.log("Autumn")
// };
// else{
//     console.log("Invalid Month Number")
// };


// Question-2

// let income = 600000;

// if(income<300000){
//     console.log("No tax")
// }
// else if(income>=300000 && income<=700000){
//     console.log("5% tax =>" , income*0.05)
// }
// else if(income>=700000 && income<=1000000){
//     console.log("10% tax =>" , income*0.10)
// }
// else{
//     console.log("15% tax =>" , income*0.15 )
// }



// Question-3

// let studentScore = 96;

// if(studentScore>=90 && studentScore<=100){
//     console.log(`Outstanding , You Scored => ${studentScore}`)
// }
// else if(studentScore>=90 && studentScore<=100){
//     console.log(`Good , You Scored => ${studentScore}`)
// }
// else if(studentScore>=90 && studentScore<=100){
//     console.log(`Average , You Scored => ${studentScore}`)
// }
// else{
//     console.log(`Needs Improvements , You Scored => ${studentScore}`)
// }


// Question-4


// let vehicleSpeed = 36;

// if (vehicleSpeed<40){
//     console.log(`Slow => ${vehicleSpeed}`)
// }
// if (vehicleSpeed>=40 && vehicleSpeed<=80){
//     console.log(`Normal => ${vehicleSpeed}`)
// }
// else
//     console.log(`Fast => ${vehicleSpeed}`)
// }


// Question-5


// let personHeight = 180;

// if (personHeight<150){
//     console.log(`Short => ${personHeight}`)
// }
// else if (personHeight>=150 && personHeight<=170){
//     console.log(`Average => ${personHeight}`)
// }
// else{
//     console.log`Tall => ${personHeight}`
// }


// // Question-6
// let day = 6;

// if (day >= 1 && day <= 5) {
//     console.log("Weekday");
// } else if (day === 6 || day === 7) {
//     console.log("Weekend");
// } else {
//     console.log("Invalid Day");
// }


// // Question-7
// let units = 120;
// let bill;

// if (units <= 50) {
//     bill = units * 2;
// } else if (units <= 150) {
//     bill = units * 4;
// } else {
//     bill = units * 6;
// }

// console.log("Total Bill: ₹" + bill);


// // Question-8
// let attendance = 85;

// if (attendance >= 90) {
//     console.log("Excellent");
// } else if (attendance >= 75) {
//     console.log("Good");
// } else if (attendance >= 50) {
//     console.log("Satisfactory");
// } else {
//     console.log("Poor");
// }


// // Question-9
// let marks1 = 85;
// let marks2 = 92;
// let marks3 = 78;

// if (marks1 >= marks2 && marks1 >= marks3) {
//     console.log("Highest Mark:", marks1);
// } else if (marks2 >= marks1 && marks2 >= marks3) {
//     console.log("Highest Mark:", marks2);
// } else {
//     console.log("Highest Mark:", marks3);
// }


// // Question-10
// let num = -7;

// if (num === 0) {
//     console.log("Zero");
// } else if (num > 0 && num % 2 === 0) {
//     console.log("Positive Even");
// } else if (num > 0 && num % 2 !== 0) {
//     console.log("Positive Odd");
// } else if (num < 0 && num % 2 === 0) {
//     console.log("Negative Even");
// } else {
//     console.log("Negative Odd");
// }

// D] Nested if Statement


// Question-1
// let num = 15;

// if (num > 10) {
//     if (num % 3 === 0) {
//         console.log("Greater than 10 and divisible by 3");
//     } else {
//         console.log("Greater than 10 but not divisible by 3");
//     }
// }


// // Question-2
// let age = 20;
// let hasVoterID = true;

// if (age >= 18) {
//     if (hasVoterID) {
//         console.log("Can Vote");
//     } else {
//         console.log("Voter ID required");
//     }
// } else {
//     console.log("Underage");
// }


// // Question-3
// let marks = 85;

// if (marks >= 40) {
//     if (marks >= 80) {
//         console.log("Passed with Distinction");
//     } else {
//         console.log("Passed");
//     }
// } else {
//     console.log("Failed");
// }


// // Question-4
// let pin = 1234;
// let enteredPin = 1234;
// let balance = 5000;
// let withdrawal = 2000;

// if (enteredPin === pin) {
//     if (balance >= withdrawal) {
//         console.log("Withdrawal Successful");
//         balance = balance - withdrawal;
//         console.log("Remaining Balance:", balance);
//     } else {
//         console.log("Insufficient Balance");
//     }
// } else {
//     console.log("Incorrect PIN");
// }


// // Question-5
// let year = 2024;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("Leap Year");
//         } else {
//             console.log("Not a Leap Year");
//         }
//     } else {7
//         console.log("Leap Year");
//     }
// } else {
//     console.log("Not a Leap Year");
// }


// // Question-6
// let email = "student123@example.com";

// if (email.includes("@")) {
//     if (email.endsWith(".com")) {
//         if (email.length > 10) {
//             console.log("Valid Email");
//         } else {
//             console.log("Email is too short");
//         }
//     } else {
//         console.log("Email must end with .com");
//     }
// } else {
//     console.log("Email must contain @");
// }


// // Question-7
// let cartTotal = 1500;
// let isPremium = true;
// let discount = 0;
// let finalAmount;

// if (cartTotal >= 1000) {
//     if (isPremium) {
//         discount = 20;
//     } else {
//         discount = 10;
//     }
// } else {
//     discount = 0;
// }

// finalAmount = cartTotal - (cartTotal * discount / 100);

// console.log("Discount:", discount + "%");
// console.log("Final Amount: ₹" + finalAmount);


// // Question-8
// let number = 12;

// if (number > 0) {
//     if (number % 2 === 0) {
//         if (number % 4 === 0) {
//             console.log("Positive Even and Divisible by 4");
//         } else {
//             console.log("Positive Even but not divisible by 4");
//         }
//     } else {
//         console.log("Positive Odd");
//     }
// } else {
//     console.log("Not Positive");
// }


// // Question-9
// let candidateAge = 25;
// let hasDegree = true;
// let experience = 3;

// if (candidateAge >= 21 && candidateAge <= 30) {
//     if (hasDegree) {
//         if (experience >= 2) {
//             console.log("Eligible for Interview");
//         } else {
//             console.log("Insufficient Experience");
//         }
//     } else {
//         console.log("Graduation Degree Required");
//     }
// } else {
//     console.log("Age Criteria Not Met");
// }


// // Question-10
// let isPresent = true;
// let internalMarks = 35;
// let externalMarks = 40;

// if (isPresent) {
//     if (internalMarks >= 30) {
//         if (externalMarks >= 35) {
//             console.log("Eligible for Final Exam");
//         } else {
//             console.log("External Marks Insufficient");
//         }
//     } else {
//         console.log("Internal Marks Insufficient");
//     }
// } else {
//     console.log("Student is Absent");
// }

// E] switch Statement


// Question-1


// let month = 7;

// switch (month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
    
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//         break;

//     case 2:
//         console.log("28 days");
//         break;

//     default:
//         console.log("Invalid Month");
// }


// Question-2


// let word = "f"

// switch (word){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Vowels =>",word)
//         break

//     default:
//         console.log("consontants =>",word)
// }


// Question-3
// let season = 3;

// switch (season) {
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;

//     case 3:
//     case 4:
//         console.log("Summer");
//         break;

//     default:
//         console.log("Invalid Number");
// }


// // Question-4

// let marks =96;

// switch (true){
//     case marks>=75:
//         console.log("Distinction")
//     case marks>=60:
//         console.log("1st class")
//     case marks>=50:
//         console.log("2nd class")
//     case marks>=35:
//         console.log("3rd class")
//     case marks<35:
//         console.log("Failed")

//     default:
//         console.log("Invalid marks")
// }



// // Question-5
// let role = "admin";
// let action = "create";

// switch (role) {
//     case "admin":
//         switch (action) {
//             case "create":
//                 console.log("Create Access Granted");
//                 break;

//             case "edit":
//                 console.log("Edit Access Granted");
//                 break;

//             case "delete":
//                 console.log("Delete Access Granted");
//                 break;

//             default:
//                 console.log("Invalid Action");
//         }
//         break;

//     case "user":
//         console.log("Limited Access");
//         break;

//     default:
//         console.log("Invalid Role");
// }


// // Question-6
// let fruit = "mango";

// Corrected code: add break after each case.
// switch (fruit) {
//     case "apple":
//         console.log("Apple is red");
//         break;

//     case "mango":
//         console.log("Mango is yellow");
//         break;

//     case "banana":
//         console.log("Banana is yellow");
//         break;

//     default:
//         console.log("Unknown fruit");
// }


// // Question-7
// let value = "0";

// switch (value) {
//     case 0:
//         console.log("Number zero");
//         break;

//     case "0":
//         console.log("String zero");
//         break;

//     case false:
//         console.log("Boolean false");
//         break;

//     case null:
//         console.log("Null value");
//         break;

//     case undefined:
//         console.log("Undefined value");
//         break;

//     default:
//         console.log("Other value");
// }



// // Question-8
// let num1 = 10;
// let num2 = 3;
// let operator = "**";

// switch (operator) {
//     case "+":
//         console.log(num1 + num2);
//         break;

//     case "-":
//         console.log(num1 - num2);
//         break;

//     case "*":
//         console.log(num1 * num2);
//         break;

//     case "/":
//         if (num2 === 0) {
//             console.log("Cannot divide by zero");
//         } else {
//             console.log(num1 / num2);
//         }
//         break;

//     case "%":
//         if (num2 === 0) {
//             console.log("Cannot calculate remainder with zero");
//         } else {
//             console.log(num1 % num2);
//         }
//         break;

//     case "**":
//         console.log(num1 ** num2);
//         break;

//     default:
//         console.log("Invalid Operator");
// }


// // Question-9
// let day = 15;

// switch (true) {
//     case day >= 1 && day <= 10:
//         console.log("Beginning of the month");
//         break;

//     case day >= 11 && day <= 20:
//         console.log("Middle of the month");
//         break;

//     case day >= 21 && day <= 31:
//         console.log("End of the month");
//         break;

//     default:
//         console.log("Invalid Day");
// }


// // Question-10
// let category = "veg";
// let item = "paneer";
// let size = "full";
// let price = 0;

// switch (category) {
//     case "veg":
//         switch (item) {
//             case "paneer":
//                 switch (size) {
//                     case "half":
//                         price = 120;
//                         break;
//                     case "full":
//                         price = 220;
//                         break;
//                     default:
//                         console.log("Invalid Size");
//                 }
//                 break;

//             case "pizza":
//                 switch (size) {
//                     case "half":
//                         price = 150;
//                         break;
//                     case "full":
//                         price = 280;
//                         break;
//                     default:
//                         console.log("Invalid Size");
//                 }
//                 break;

//             default:
//                 console.log("Invalid Veg Item");
//         }
//         break;

//     case "nonveg":
//         switch (item) {
//             case "chicken":
//                 switch (size) {
//                     case "half":
//                         price = 180;
//                         break;
//                     case "full":
//                         price = 320;
//                         break;
//                     default:
//                         console.log("Invalid Size");
//                 }
//                 break;

//             case "biryani":
//                 switch (size) {
//                     case "half":
//                         price = 140;
//                         break;
//                     case "full":
//                         price = 260;
//                         break;
//                     default:
//                         console.log("Invalid Size");
//                 }
//                 break;

//             default:
//                 console.log("Invalid Non-Veg Item");
//         }
//         break;

//     default:
//         console.log("Invalid Category");
// }

// if (price > 0) {
//     console.log("Category:", category);
//     console.log("Item:", item);
//     console.log("Size:", size);
//     console.log("Final Price: ₹" + price);
// }


// F] Ternary Operator Questions

// Question-1
// let num = 21;
// let result = num % 7 === 0 ? "Divisible by 7" : "Not Divisible by 7";
// console.log(result);


// // Question-2
// let temperature = 32;
// let weather = temperature >= 30 ? "Hot Day" : "Pleasant Day";
// console.log(weather);


// // Question-3
// let str = "";
// let message = str === "" ? "Empty String" : "String has content";
// console.log(message);


// // Question-4
// let age = 16;
// let category = age < 13 ? "Child" : age <= 19 ? "Teenager" : "Adult";
// console.log(category);


// // Question-5
// let a = 25;
// let b = 40;
// let c = 30;

// let greatest = a > b ? (a > c ? a : c) : (b > c ? b : c);
// console.log("Greatest:", greatest);


// // Question-6
// let marks = 68;

// let grade = marks >= 75 ? "Distinction"
//     : marks >= 60 ? "First Class"
//     : marks >= 50 ? "Second Class"
//     : marks >= 35 ? "Pass"
//     : "Fail";

// console.log(grade);


// // Question-7
// let number = -8;

// let type = number === 0 ? "Zero"
//     : number > 0
//         ? (number % 2 === 0 ? "Positive Even" : "Positive Odd")
//         : (number % 2 === 0 ? "Negative Even" : "Negative Odd");

// console.log(type);


// // Question-8
// let year = 2024;

// let leapYear = year % 4 === 0
//     ? (year % 100 === 0
//         ? (year % 400 === 0 ? "Leap Year" : "Not a Leap Year")
//         : "Leap Year")
//     : "Not a Leap Year";

// console.log(leapYear);


// // Question-9
// let role = "admin";
// let action = "delete";

// let output = role === "admin"
//     ? (action === "delete" ? "Admin Delete"
//         : action === "edit" ? "Admin Edit"
//         : "Admin Other")
//     : role === "user"
//         ? (action === "view" ? "User View" : "User Restricted")
//         : "Invalid Role";

// console.log(output);


// // Question-10
// let cartTotal = 6000;

// let result2 = {
//     discount: cartTotal >= 5000 ? 20
//         : cartTotal >= 2000 ? 10
//         : cartTotal >= 1000 ? 5
//         : 0,

//     finalAmount: cartTotal - (cartTotal * (
//         cartTotal >= 5000 ? 20
//             : cartTotal >= 2000 ? 10
//             : cartTotal >= 1000 ? 5
//             : 0
//     ) / 100)
// };

// console.log(result2);