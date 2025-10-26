const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array, transformation) => {
  let result = 1;
  for (const element of array) {
    result = transformation(result, element);
  }
  return result;
};

console.log(reduce(sampleArray, (x, y) => x + y));
