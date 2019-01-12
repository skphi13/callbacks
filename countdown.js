var countdownGenerator = function (x) {
    /* your code here */
    var time = x + 1
  return function(){
    if (time > 1){
      time--
      return console.log('T-Minus', time)
    } else if (time == 0){
      time--
      return console.log('Blast Off!')
    } else {
      return console.log('Rockets already gone, bub!')
    }
    return time
  }
  };
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!