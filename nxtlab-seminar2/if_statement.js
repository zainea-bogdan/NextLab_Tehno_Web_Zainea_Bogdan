function testing_two_same_string(lista) {
  if (lista[0].length === lista[1].length) {
    let count = 0;
    for (let index = 0; index < lista[0].length; index++) {
      if (lista[0].charAt([index]) !== lista[1].charAt([index])) {
        count++;
      }
    }
    return count;
  } else {
    return -1;
  }
}

console.log(testing_two_same_string(["bogd1n", "bogdan"]));
console.log(testing_two_same_string(["bogdan", "bogdan"]));
console.log(testing_two_same_string(["bogdan1", "bogdan"]));
