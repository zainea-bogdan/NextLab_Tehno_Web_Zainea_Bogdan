function interecalare_stringuri(array, ...args) {
  for (let index = 0; index < args[0].length; index++) {
    array.push(args[0][index]);
    array.push(args[1][index]);
  }
  return array;
}

let array = [""];
console.log(interecalare_stringuri(array, ["test", "test3"], ["test2", "test4"]).join(" "));
