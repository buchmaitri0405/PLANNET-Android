var getRand = (function() {
    var nums = [0,1,2,3,4,5,6];
    var current = [];
	
	
    function rand(n) {
        return (Math.random() * n)|0;
    }
    return function() {
      if (!current.length) current = nums.slice();
      return current.splice(rand(10), 1);
    }
}());

console.log(getRand());