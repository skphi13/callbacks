var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var newArr = [];
  for (value of array) {
    newArr.push(callback(value));
  }
  console.log(newArr);
 }

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});