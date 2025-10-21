const calculate_sum = (numbers, div) => {
  return squareDimensions
    .filter((no) => no % div === 0)
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

const squareDimensions = [3, 5, 12, 3, 5, 2, 2];

const result = calculate_sum(squareDimensions, 2);
console.log("result: ", result);
