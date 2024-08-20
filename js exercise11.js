let shatar = prompt("shatar hiih");
let result = "";
for (let i = 0; i < Number(shatar); i++) {
  for (let j = 0; j < shatar; j++) {
    if ((i + j) % 2 === 0) {
      result += "_";
    } else {
      result += "#";
    }
  }
  result += "\n";
}
console.log(result);
