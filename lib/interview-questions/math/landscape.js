var landscape = function () {

  var result = '';

  var flat = function (size) {
    for (var i = 0; i < size; i++) {
      result += '_';
    }
  };

  var mountain = function (size) {
    result += '/';
    for (var i = 0; i < size; i++) {
      result += '\'';
    }
    result += '\\';
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());