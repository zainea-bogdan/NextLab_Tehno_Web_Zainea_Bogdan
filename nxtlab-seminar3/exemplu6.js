const sortObjects = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else {
      return 1;
    }
  });
};

const studenti = [
  {
    nume: "bogdan",
    grupa: 1098,
    medie: 10,
  },
  {
    nume: "bogda2",
    grupa: 1097,
    medie: 8.8,
  },
  {
    nume: "bogdan3",
    grupa: 1100,
    medie: 8.9,
  },
  {
    nume: "bogdan4",
    grupa: 1099,
    medie: 9,
  },
];

console.log(sortObjects(studenti, "medie"));
