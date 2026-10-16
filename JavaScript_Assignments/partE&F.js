// // Q1
// let month = 2
// switch(month){
//     case 1:case 3: case 5:case 7:case 8:case 10: case 12:
//         console.log("31 Days")
//         break
//     case 4: case 6: case 9: case 12:
//         console.log("30 Days")
//         break
//     case 2:
//         console.log("28 Days")
//         break
//     default:
//         console.log("Invalid Month")
// }

// // Q2

// let ch = "o"
// switch(chr){
//     case "a":case "e": case "i": case "o" : case "u":
//         console.log("Vowels")
//         break
//     default:
//         console.log("Consonant")
// }

// // Q3

//  let num = 1
//  switch(true){
//      case num == 1 || num == 2:
//          console.log("Winter")
//          break
//      case num == 3||num==4:
//          console.log("Summer")
//          break
//      default:
//          console.log("Invalid Season")
//  }

// //  Q4


// let marks = 75
// switch(true){
//     case marks>75&&marks<=100:
//         console.log("Distinction")
//         break
//     case marks>=60:
//         console.log("1st Class")
//         break
//     case marks>=50:
//         console.log("2nd Class")
//         break
//     case marks>=35:
//         console.log("3rd Class")
//         break
//     case marks<35:
//         console.log("Failed")
//         break
//     default:
//         console.log("Invalid Marks")
// }

// // Q5

// let role = "admin"
// let action = "Create"
// switch(role){
//     case "admin":
//         switch(action){
//             case "Create":
//                 console.log("Start Creating")
//                 break
//             case "edit":
//                 console.log("start editing")
//                 break
//             case "delete":
//                 console.log("Are you Confirm?")
//                 break
//             default:
//                 console.log("invalid Action!!!")
            
//         }
//         break

//     case "User":
//         console.log("Limited Access")
//     default:
//         console.log("Invalid Role!!!!")

// }


// // Q6 


// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red");
//     break
//   case "mango":
//     console.log("Mango is yellow");
//     break
//   case "banana":
//     console.log("Banana is yellow");
//     break
//   default:
//     console.log("Unknown fruit");
// }

// // Q7

// let value = 0
// switch(value){
//     case 0:
//         console.log("Number Zero")
//         break
//     case "0": 
//         console.log("String Zero")
//         break
//     case False:
//         console.log("Boolean False")
//         break
//     case null:
//         console.log("Null Value")
//         break
//     case undefined:
//         console.log("Undefined Value")
//         break
//     default:
//         console.log("Other Value")
// }

// // Q8

// let num1=10
// let num2=5
// let operator="%"
// switch(operator){
//     case "+":
//         console.log(num1+num2)
//         break
//     case "-":
//         console.log(num1-num2)
//         break
//     case "*":
//         console.log(num1*num2)
//         break
//     case "/":
//         if(num2==0){
//             console.log("division by 0 is invalid")
//         }else{
//             console.log(num1/num2)
//         }
//         break
//     case "%":
//         if (num2==0){
//             console.log("Cannot calcualate remainder with zero divisor")
//         }else{
//             console.log(num1%num2)
//         }
//         break
//     case "**":
//         console.log(num1**num2)
//         break
//     default:
//         console.log("Invalid Operator")
// }

// // Q9

// let day = 17;

// switch (true) {
//   case day >= 1 && day <= 10:
//     console.log("Beginning of the month");
//     break;

//   case day >= 11 && day <= 20:
//     console.log("Middle of the month");
//     break;

//   case day >= 21 && day <= 31:
//     console.log("End of the month");
//     break;

//   default:
//     console.log("Invalid day");
// }

// // Q10










// // Ternary Operator Questions

// // Q1

// let abc = 21
// let result = abc %7 === 0 ? "divisible by 7" :"Not divisible by 7" 
// console.log(result)

// // Q2

// let temp = 33
// let status = temp>=30 ? "Hot Day" : "Pleasant Day"
// console.log(status)

// // Q3

// let str = ""
// let result = str.length===0 ? "Empty String" : "String has content"
// console.log(result)

// // Q4

// let age = 16
// let result = age<13 ? "child" : age<=19 ? "teenager" : "Adult"
// console.log(result)

// // Q5

// let a = 25;
// let b = 40;
// let c = 15;

// let greatest = a >= b ? (a >= c ? a : c) : (b >= c ? b : c);

// console.log("Greatest:", greatest);

// // Q6 

// let marks = 82;

// let result = marks >= 75 ? "Distinction": marks >= 60 ? "First Class" : marks >= 50 ? "Second Class" : marks? "Pass": "Fail";

// console.log(result);

// // Q7

// let num = -7;

// let result = num === 0? "Zero": num > 0? (num % 2 === 0 ? "Positive Even" : "Positive Odd"): (num % 2 === 0 ? "Negative Even" : "Negative Odd");

// console.log(result);

// // Q8

// let year = 2024;

// let result = year % 400 === 0 ? "Leap Year" : year % 100 === 0 ? "Not a Leap Year" : year % 4 === 0 ? "Leap Year" : "Not a Leap Year";

// console.log(result);

// // Q9

// let role = "admin";
// let action = "edit";

// let result = role === "admin" ? (action === "delete" ? "Admin Delete" : action === "edit" ? "Admin Edit"
// : "Admin Other") : role === "user" ? (action === "view" ? "User View" : "User Restricted") : "Invalid Role";

// console.log(result);

// // Q10

// let cartTotal = 6000;

// let result = cartTotal >= 5000 ? { discount: 20, payable: cartTotal * 0.80 } : cartTotal >= 2000 ? { discount: 10, payable: cartTotal * 0.90 } : cartTotal >= 1000 ? { discount: 5, payable: cartTotal * 0.95 } : { discount: 0, payable: cartTotal };

// console.log(result);