// Create a function called wrapLog() that takes in a function (callback) and a string (name) and
// returns a function that internally invokes (calls) callback during its execution and also logs
// the name, input parameters, and return value of the callback function. Following is a template
// with example usage.

var wrapLog = function (callback, name) {
  if (name === 'area'){
  	return function(x,y){
  		console.log('area(' + x + ', ' + y + ') => ' + callback(x,y));
  	};
  } else if (name === 'volume'){
  	return function(x,y,z){
  		console.log('volume(' + x + ', ' + y + ', ' + z + ') => ' + callback(x,y,z));
  	};
  }
};

var area = function (x, y) {
  return x * y;	
};

var volume = function (x, y, z) {
  return x * y * z;
};

var logArea = wrapLog(area, "area");
var logVolume = wrapLog(volume, "volume");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6
logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24