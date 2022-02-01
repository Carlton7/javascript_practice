`use strict`;

//TASK 1

// console.log("Hello World")

// let make = `AC Cobra`;
// let model = 'GT'

// console.log('carlton');

// console.info('anand');

// console.warn('sydney');

// console.error('leo');

// console.log('my favourite car is ' + make + ' and the model is '+ model )

// console.log("writing a test run for %c css changes to a statement", "color:green; background-color:orange; font-style: Bold; font-size: 40px; padding:40px");


//TASK 2

// let a;
// let b = "12345";
// let c = 12344;
// let d = true;
// let e = {a:"JavaScript"};

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${moneyPaidSoFar}`)


//TASK 4

// 1.
// let f = 100;
// while (f <= 200) {
//   console.log(f);
//   f = f + 10;
// }

// 2.
// let g = 100;
// while (g <= 200) {
//   if (g%2 == 0) {
//     console.log(g + "-")
//   } else {
//     console.log(g + "*")
//   }
//   g++
// }
  
//3.
// for (let h = 0; h < 10; h++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(j);
//   }
// }  

//4.
// for (let k = 100; k <= 200; k++) {
//   console.log(k)
// }  

// for (let l = 100; l <= 200; l++) {
//   if (l%2 == 0) {
//     console.log(l + "-")
//   } else {
//     console.log(l + "*")
//   }
// }  

//5.
// let current = new Date();
// let day = current.getDay();
// switch (day) {
//   case 1:
//     console.log(`its Monday`);
//   case 2:
//     console.log(`its Tuesday`);
//   case 3:
//     console.log(`its Wednesday`);
//   case 4:
//     console.log(`its Thursday`)
//   case 5:
//     console.log(`its Friday`);
//     break;
//   case 6:
//     console.log(`its Saturday`);
//     break;
//   case 0:
//     console.log(`its Sunday`);
//     break;
//   default:
//     console.log(`Invalid Range`);
//     break;
// }

//TASK 5:

// let strictA = true;
// let strictB = 1;
// console.log(strictA == strictB); //TRUE
// console.log(strictA === strictB); //FALSE

// console.log(strictA != strictB); //FALSE
// console.log(strictA !== strictB); //TRUE

// let age = 63
// for (let m = 1; m <= 5; m++) {
//   console.log((age >= 18 && age <=65) ? console.log("age is as expected") : console.log("incorrect age for this check"));
//   age++
// }  

// let age2 = 48
// for (let m = 1; m <= 6; m++) {
//   console.log((age2 >= 18 && age2 <=50) ? console.log("age is below 50") : console.log("wheeeyy your over 50!"));
//   age2++
// }  

// CHALLENGE

//FizzBuzz

// let n = 1;
// while (n <= 100) {
//   if (n%3 == 0 && n%5 == 0) {
//     console.log("FizzBuzz")
//   } else if (n%5 == 0) {
//     console.log("Buzz")
//   } else if (n%3 == 0) {
//     console.log("Fizz")
//   } else {
//     console.log(n)
//   }
//   n++
// }

//99 bottles of beer

//Solution 1
// for (let bottles = 99; bottles >= 0; bottles--) {
//   console.log((bottles > 0 && bottles <=99) ? console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.Take one down and pass it around, ${bottles-1} bottles of beer on the wall.`) : console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall."));
// }  

//Solution 2
for (let bottles = 99; bottles >= 0; bottles--) {
  if (bottles > 1 && bottles <=99) {
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.Take one down and pass it around, ${bottles-1} bottles of beer on the wall.`);
  } else if (bottles == 1) {
    console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer.Take one down and pass it around, ${bottles-1} bottles of beer on the wall.`);
  } else {
    console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
}  