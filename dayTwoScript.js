`use strict`

//TASK 1`

let darthVader = { allegiance: "empire", weapon: "lightsabre", sith: "true" };

console.log(darthVader);
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`); 


let myArray =["hello","everyone"];

console.log(myArray.length)
console.log(myArray.push("having", "a", "nice", "day"));
console.log(myArray.shift());
console.log(myArray)

for (let x = 0; x < myArray.length; x++) {
  console.log(myArray[x])
}