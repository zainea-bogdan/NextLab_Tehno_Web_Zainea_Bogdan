const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.includes("{" + format[i] + "}")) {
      modified = modified.replace("{" + format[i] + "}", format[i + 2]);
    }
  }
  return modified;
};

console.log(formatString("un {substantiv} este {adjectiv} ", "substantiv", "adjectiv", "calut", "dragut"));
