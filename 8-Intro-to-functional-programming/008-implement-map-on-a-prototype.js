// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];

  // Add your code below this line

  /* for loop

  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }*/

  // forEach
  this.forEach(function(item) {
    newArray.push(callback(item));
  });
    
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
