const fibo = (n) => {
  let prev2 = 0;
  let prev1 = 1;
  let newFibo = 0;
  for (let index = 0; index < n; index++) {
    newFibo = prev1 + prev2;
    prev2 = prev1;
    prev1 = newFibo;
  }
  return newFibo;
};

if (process.argv.length < 3) {
  console.log("not enough params");
} else {
  console.log(fibo(parseInt(process.argv[2])));
}
