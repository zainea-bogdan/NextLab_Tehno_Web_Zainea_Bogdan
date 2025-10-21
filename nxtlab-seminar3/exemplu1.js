const numbers = [2004, 2000, 2025, 2017, 2010, 2023, 2002, 2007, 2008];

const map_age_above_18 = numbers
  .map((val) => {
    if (2025 - val >= 18) return val;
  })
  .filter((val) => val != undefined);

const filter_age_above_18 = numbers.filter((val) => 2025 - val > 18);

console.log(map_age_above_18);
console.log(filter_age_above_18);
