class Sir_crescator {
  #value;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  next_val() {
    this.#value = this.#value + 2;
    return this.#value;
  }
}

test = new Sir_crescator(10);
for (let index = 0; index < 5; index++) {
  console.log(test.next_val());
}
