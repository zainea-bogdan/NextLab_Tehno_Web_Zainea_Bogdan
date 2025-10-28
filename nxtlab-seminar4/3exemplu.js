function calcul_exponential() {
  const cache_list = [1];
  const calcul = (expo) => {
    if (expo < cache_list.length) {
      console.log("found " + expo);
      return cache_list[expo];
    } else {
      console.log("calculated " + expo);
      cache_list[expo] = calcul(expo - 1) * 2;
      return cache_list[expo];
    }
  };
  return calcul;
}

const rezultat = calcul_exponential();
console.log(rezultat(4));
console.log(rezultat(3));
console.log(rezultat(5));
