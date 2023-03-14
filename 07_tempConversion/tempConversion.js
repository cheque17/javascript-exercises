const convertToCelsius = function(fahrenheitTemperature) {
  let rawConversion = (fahrenheitTemperature-32)*5/9;
  let roundedResult = rawConversion.toFixed(1);
  let celsiusResult = parseFloat(roundedResult);
  return celsiusResult;
};

const convertToFahrenheit = function(celsiusTemperature) {
  let fahrenheitResult =  ( Math.round ( ( celsiusTemperature*9/5 + 32 ) * 10 ) /10 );
  return fahrenheitResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
