`use strict`

//TASK 1`

// let darthVader = { allegiance: "empire", weapon: "lightsabre", sith: "true" };

// console.log(darthVader);
// console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
// console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
// console.log(`Darth Vader is a sith? ${darthVader.sith}`);
// console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`); 


// let myArray =["hello","everyone"];

// console.log(myArray.length)
// console.log(myArray.push("having", "a", "nice", "day"));
// console.log(myArray.shift());
// console.log(myArray)

// for (let x = 0; x < myArray.length; x++) {
//   console.log(myArray[x])
// }

//TASK 2

function subtract(a,b) {
  return a-b;
}

console.log(subtract(18,7))


function welcome(name, age, gender) {
  console.log(`my name is ${name}, i am ${age} years old and of gender ${gender}`)
}

console.log(welcome("bobby", 25, "male"))

//ARROW FUNCTIONs

//1.
// welcome = (name,age,gender) => {
  
// }
//2.
// goodbye = (message) => console.log(message)
//3.
// goodbye = message => console.log(message)

powerUp = (n1, n2) => {
  return Math.pow(n1,n2)
}

console.log(powerUp(4,7))