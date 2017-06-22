function arraySumN (ary, n) {
var results = [];

for (var i =0; i < ary.length; i++) {
var sum = 0;
var innerAry = ary[i];

for (var j = 0; j < ary[i].length; j++){
sum = sum + innerAry[j];
  }

  if (sum === n) {
  results.push(i);

  }
 }
return results;
}
