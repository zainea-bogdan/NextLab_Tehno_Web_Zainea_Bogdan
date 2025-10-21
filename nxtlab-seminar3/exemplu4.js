const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array, transformation) => {
  let result = 0;
  for (const element of array) {
    result = result + transformation(element);
  }
  return result;
};

console.log(reduce(sampleArray, (x) => x));
