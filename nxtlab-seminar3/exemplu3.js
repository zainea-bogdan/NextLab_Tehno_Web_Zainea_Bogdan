const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf("{" + format[i] + "}") !== -1) {
      modified = modified.replace("{" + format[i] + "}", format[i + 2]);
    }
  }
  return modified;
};

console.log(formatString("un {substantiv} este {adjectiv} ", "substantiv", "adjectiv", "calut", "dragut"));
