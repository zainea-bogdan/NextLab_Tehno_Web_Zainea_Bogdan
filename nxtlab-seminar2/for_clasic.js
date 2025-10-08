function for_clasic_sir_numere_in_string(lista) {
  let string_final = "";
  for (let index = 0; index < lista.length; index++) {
    string_final = `${string_final}${lista[index]}`;
  }
  return string_final;
}

console.log(for_clasic_sir_numere_in_string([1, 2, 3, 4]));
console.log(typeof for_clasic_sir_numere_in_string([1, 2, 3, 4]));
