Number.prototype.times = function (functie) {
  const value = this.valueOf();
  for (let i = 0; i < value; i++) {
    functie(i);
    console.log(`repetat ${i + 1}`);
  }
};

(3).times(() => {});
