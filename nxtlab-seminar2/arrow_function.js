let sayhello = (lista) => {
  let rezultat = "";
  for (const element of lista) {
    rezultat = `${rezultat}${element}`;
  }
  return rezultat;
};

console.log(sayhello(["bogdan ", " zainea"]));
