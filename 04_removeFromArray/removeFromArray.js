const removeFromArray = function(array, ...elements) {
  let result = [];
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    let shouldRemove = false;
    for (let elementToTake of elements) {
      if (array[i] === elementToTake) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      result.push(array[i]);
    }
  }
  return result;
}



// Do not edit below this line
module.exports = removeFromArray;
