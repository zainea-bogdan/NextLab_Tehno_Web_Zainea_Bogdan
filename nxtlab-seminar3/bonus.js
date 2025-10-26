const numere = [10, 9, 8];

const result =
  numere.reduce((x, y) => {
    return x + y;
  }) / numere.length;

console.log(result);
