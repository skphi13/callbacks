// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach((val, i)=> {
      if (val === "Waldo") {
        found(i);   // execute callback
      }
    })
  }
  
  function actionWhenFound(index) {
    console.log("Found him at index" + index + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);