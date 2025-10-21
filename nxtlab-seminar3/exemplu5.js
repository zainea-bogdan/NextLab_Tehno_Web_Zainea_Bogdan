const sampleDictionary = ["este"];
const sampleText = "javascript este minunat";

const test = (sampleText, sampleDictionary) => {
  return sampleText
    .split(" ")
    .map((word) => {
      if (sampleDictionary.includes(word)) {
        if (word.length <= 2) return word;
        return word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
      }
      return word;
    })
    .join(" ");
};

console.log(test(sampleText, sampleDictionary));
