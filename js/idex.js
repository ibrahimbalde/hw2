// //task1
// let age = prompt("enter your age");
// if (age >= 0 && age <= 2) {
//     console.log("you are a child", age);
// } else if (age >= 12 && age <= 18) {
//     console.log("you are teenager", age);
// } else if (age >= 18 && age <= 60) {
//     console.log("you are adult", age); 
// } else if (age >= 60) {
//     console.log("you are a senior citizen");
// }

// //Task2
// let number = prompt("enter a number from 0 to 9");
// if (number == 1) {
//     console.log("!");
// }

// else if (number == 2) {
//     console.log("@");
// }
// else if (number == 3) {
//     console.log("#");
// }
// else if (number == 4) {
//     console.log("$");
// }
// else if (number == 5) {
//     console.log("%");
// }
// else if (number == 6) {
//     console.log("^");
// }
// else if (number == 7) {
//     console.log("&");
// }
// else if (number == 8) {
//     console.log("*");
// }
// else if (number == 9) {
//     console.log("(");
// }
// else {
//     console.log("enter a valid number");
// }

//task3


//task4
// let year = prompt("enter a year");
// if (year % 400 === 0 ) {
//     console.log("this is a leapyear");
// } else if(year % 4 === 0) {
//     console.log("this is not a leapyear");
// } else if(year % 100 ===0) {
//     console.log("this is not a leapyear");
// }
// else{
//     console.log("try to write a leap year");
// }

//task5
let number = prompt("enter five digit number");
let n = parseInt(number);
while(n < 10000 && n > 99999) {
alert("this is not a five digit number");
number = prompt("enter a five digit number")
n = parseInt(number);
}
let digit1 = n % 10; 
n = n / 10;

let digit2 = n % 10; 
n = n / 10;

let digit3 = n % 10; 
n = n / 10;

let digit4 = n % 10; 
n = n / 10;

let digit5 = n % 10; 
n = n / 10;

if (parseInt(digit1 ) == parseInt( digit5)){
    if (parseInt(digit2) == parseInt(digit4)){

        console.log(number, "is a palindrome");
    }
}

else {
    console.log(number, "is not a palindrome");
}
