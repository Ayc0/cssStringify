function toDash(string) {
  return string.replace(/([A-Z])/g, function(char) {
    return "-" + char.toLowerCase();
  });
}

function stringify(object) {
  var array = Object.keys(object).map(function(cssAttribute) {
    if (typeof object[cssAttribute] === "object") {
      return (
        toDash(cssAttribute) + " { " + stringify(object[cssAttribute]) + " } "
      );
    }
    return toDash(cssAttribute) + ": " + object[cssAttribute] + "; ";
  });
  return array.join("");
}

module.exports = stringify;
