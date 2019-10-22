'use strict';

function max(num){

  let newMax = num[0];
  //console.log(num[0]);

  let i = 0;
  while(i < num.length){
    if(newMax < num[i]){
      newMax = num[i];
    }
    i++;
  }
  console.log(newMax);
  return newMax;
}
max([1,2,3,4,5,6,7,]);