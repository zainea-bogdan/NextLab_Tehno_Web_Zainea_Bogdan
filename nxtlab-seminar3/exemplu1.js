const numbers = [2004, 2000, 2025, 2017, 2010, 2023, 2002, 2007, 2008];

const varste_peste_18_ani = numbers.filter((x) => 2025 - x > 18).map((x) => 2025 - x);

console.log(varste_peste_18_ani);
