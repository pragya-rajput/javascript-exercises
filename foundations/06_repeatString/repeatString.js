const repeatString = function( string word , int num) {

  if(num <= 0)
  {
     console.log("ERROR");
  }

  for(int i = 0; i < num; i++)
  {
    console.log(word);
  }

};

// Do not edit below this line
module.exports = repeatString;
