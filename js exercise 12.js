let num = prompt("toogoo bicne uu?");
let result = "";
for (let i = 0; i < Number(num); i++) {
  for (let j = 1; j <= Number(num) - i; j++) {
    result += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

//const number = 5;
//let result2 = "";
//for (let i = 0; i < number; i++) {

// result2 += "\n";
//}
//console.log(result2);

// ----* 1
// ---*** 3
// --***** 5
// -******* 7
// ********* 9
