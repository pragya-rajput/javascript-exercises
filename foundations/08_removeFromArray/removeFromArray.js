const removeFromArray = function(arr , argnd) {

  let NewArr;
  
  for(int i = 0; i < arr.size(); i++)
  {
    if(arr[i] == argnd)
     NewArr = arr.filter( arr => arr[i] !== argnd );
    
  }
  
};

// Do not edit below this line
module.exports = removeFromArray;
