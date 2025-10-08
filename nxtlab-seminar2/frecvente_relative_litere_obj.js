const string = "test1123test";

const getCounts = (string) => {
  const result = {};
  for (let index = 0; index < string.length; index++) {
    if (string.charAt(index) in result) {
      result[string.charAt(index)]++;
    } else {
      result[string.charAt(index)] = 1;
    }
  }
  return result;
};

console.log(getCounts(string));
