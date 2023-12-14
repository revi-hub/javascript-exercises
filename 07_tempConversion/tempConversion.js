const convertToCelsius = function(fahrenheits) {
  let celsius = ((fahrenheits - 32) * 5/9);
  if(!Number.isInteger(celsius)) return +celsius.toFixed(1);
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5 + 32);
  if(!Number.isInteger(fahrenheit)) return +fahrenheit.toFixed(1)
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
