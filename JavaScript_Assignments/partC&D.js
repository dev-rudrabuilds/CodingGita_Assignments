// C] if...else if...else Statement

// 1.
// let month = 9;
// if (month==12 || month==1 || month==2) {
//     console.log("Winter")
// } else if (month==3 || month==4 || month==5) {
//     console.log("Summer")
// } else if (month==6 || month==7 ||month==8) {
//     console.log("Monsoon")
// } else if (month==9 || month==10 || month==11) {
//     console.log("Autumn")
// } else {
//     console.log("Invalid")
// }

// 2.
// let income= 500000;
// if (income<300000) {
//     console.log("no Tax")
// } else if (income>300000 && income<700000) {
//     console.log("5% Tax")
// } else if (income>700000 && income<1000000) {
//     console.log("10% Tax")
// } else {
//     console.log("15% Tax")
// }

// 3.
// let studentMarks = 89;
// if (studentMarks>=90 && studentMarks<=100) {
//     console.log("Outstanding")
// } else if (studentMarks>=70 && studentMarks<=89) {
//     console.log("Good")
// } else if (studentMarks>=40 && studentMarks<=69) {
//     console.log("Average")
// } else if (studentMarks<=40 && studentMarks>=0) {
//     console.log("Needs Improvement")
// } else {
//     console.log("Invalid")
// }

// 4.
// let speedOfVehicle = 79;
// if (speedOfVehicle>=80) {
//     console.log("Fast")
// } else if (speedOfVehicle>=40 && speedOfVehicle<=79) {
//     console.log("Average")
// }

// 5.
// let personHeight = 170;
// if (personHeight>=170) {
//     console.log("Tall")
// } else if (personHeight>=150 && personHeight<=169) {
//     console.log("Average")
// } else if (personHeight<=149) {
//     console.log("Short")
// } else {
//     console.log("invalid")
// }

// 6.
// let dayNumber = 2;
// if (dayNumber==1 || dayNumber==2 || dayNumber==3 || dayNumber==4 || dayNumber==5) {
//     console.log("Weekday")
// } else if (dayNumber==6 || dayNumber==7) {
//     console.log("Weekend")
// }

// 7.
// let electricityBillOnUnits = 46;
// if (electricityBillOnUnits>=0 && electricityBillOnUnits<=50) {
//     console.log("2Rs per Unit")
// } else if (electricityBillOnUnits>=51 && electricityBillOnUnits<=150) {
//     console.log("4Rs per Unit")
// } else {
//     console.log("6Rs per Unit")
// }

// 8.
// let studentsPercentage = 92;
// if (studentsPercentage>=90 && studentsPercentage<=100) {
//     console.log("Excellent")
// } else if (studentsPercentage>=75 && studentsPercentage<=89) {
//     console.log("Good")
// } else if (studentsPercentage>=50 && studentsPercentage<=74) {
//     console.log("Satisfactory")
// } else if (studentsPercentage<=50 && studentsPercentage>=0) {
//     console.log("Poor")
// }

// 9.
// let subject1 = 75;
// let subject2 = 56;
// let subject3 = 92;
// if (subject1>subject2 && subject1>subject3) {
//     console.log("largest subject is: ", subject1)
// } else if (subject2>subject1 && subject2>subject3) {
//     console.log("largest subject is: ", subject2)
// } else if (subject3>subject1 && subject3>subject2) {
//     console.log("largest subject is: ", subject3)
// }

// 10.
// let num = 12;
// if (num==0) {
//     console.log("Zero")
// } else if (num>0 && num%2==0) {
//     console.log("Positive & Even")
// } else if (num>0 && num%2!=0) {
//     console.log("Positive & Odd")
// } else if (num<0 && num%2==0) {
//     console.log("Negative & Even")
// } else if (num<0 && num%2!=0) {
//     console.log("Negative & odd")
// } else {
//     console.log("invalid")
// }

// console.log("================================================================================")

// D] Nested if Statement

// 1.
// let num = -12;
// if (num>10) {
//     console.log("number is positive")
//     if (num%3==0) {
//         console.log("Divisible by 3")
//     } else {
//         console.log("Not Divisible by 3")
//     }
// } else {
//     console.log("invalid")
// }

// 2.
// let age = 19;
// let voterID = true
// if (age>=18) {
//     console.log("yes person is 18+")
//     if (voterID==true) {
//         console.log("Can Vote")
//     } else {
//         console.log("cannot vote")
//     }
// } else {
//     console.log("not 18 or 18+")
// }

// 3.
// let scoredMarks = 80;
// if (scoredMarks>=40) {
//     if (scoredMarks>=80) {
//         console.log("Passed with Distinction")
//     } 
// }

// 4.
// let atmPin = 12345;
// let balance = true;
// if (atmPin==12345) {
//     if (balance==true) {
//         console.log("balance is sufficient for withdrawal")
//     }
// }

// 5.
// let num = 2000;
// if (num%4==0) {
//     if (num%100==0) {
//         if (num%400==0) {
//             console.log("confirmed it's a leap year")
//         }
//     }
// }

// 6.                              ------------------------------------- DOUBT
// let userEmail = "user@123.com";
// if (userEmail=="user@123.com") {
//     if (".com" = userEmail ) {
//     }
// }

// 7.
// let onlineShopping = 1100;
// let user = "premium member"
// if (onlineShopping>=1000) {
//     if (user=="premium member") {
//         console.log(onlineShopping/20, "final amount:", onlineShopping)
//         }
//     }
//     if (user!="premium member") {
//             console.log(onlineShopping/10, "final amount:", onlineShopping)
//         }

// 8.
// let num = 80;
// if (num>0) {
//     if (num%2==0) {
//         if (num%4==0) {
//             console.log("Positive Even and Divisible by 4")
//         }
//     }
// }

// 9.
// let age = 24;
// let graduationDegree = "present";
// let userExperience = 4;
// if (age>=21 && age<=30) {
//     if (graduationDegree=="present") {
//         if (userExperience>=2) {
//             console.log("Eligible for Interview")
//         }
//     }
// }

10.
let student = "present";
let studentInternalMarks = 35;
let studentExternalMarks = 45;
if (student=="present") {
    if (studentInternalMarks>=30) {
        if (studentExternalMarks>=35) {
            console.log("Eligible for Final Exam")
        }
    }
}

























































