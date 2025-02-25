const repeatString = function (name1, repeats) {
  let name = "";
  if (repeats >= 0) {
    for (i = 0; i < repeats; i++) {
      name += name1;
    }
    return name;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
