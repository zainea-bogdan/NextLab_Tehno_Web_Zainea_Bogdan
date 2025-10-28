const increaseSalary = (lista_salarii, increase) => {
  if (Array.isArray(lista_salarii)) {
    if (typeof increase == true) {
      for (let index = 0; index < lista_salarii.length; index++) {
        lista_salarii[index] = lista_salarii[index] + lista_salarii[index] * (increase / 100);
      }

      return lista_salarii;
    } else {
      throw new Error("increaseul tre sa fie numar");
    }
  } else {
    throw new Error("primul argument tre sa fie array");
  }
};

const lista_salarii = [100, 200, 300];
const test = 10;

increaseSalary(lista_salarii, 10);

// increaseSalary(lista_salarii, "a");
// increaseSalary(test, 10);
