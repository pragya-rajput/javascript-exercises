const sumAll = function(int lowerVal , int HigherLimit) 
{
    int sum = 0;
     for(int i = lowerVal; i <= HigherLimit; i++ )
      {
          sum = sum + i;                                               
      }
      return sum;
};

// Do not edit below this line
module.exports = sumAll;
