function pairN (ary, n) {
  for(var i = 0; i < ary.length; i += 1){
    var firstNum = ary[i];

  for(var j = 0; j < ary.length; j += 1){
  var secondNum = ary[j];

  if(firstNum + secondNum === n){
    pairs.push([i, j]);
   }
  }
 }

  return pairs;
}

function pairN (ary, n) {
 for (var i = 0; i < ary.length; i += 1){
  var firstNum = ary[i];

  for(var j = 0; j < ary.length; j += 1){
  var secondNum = ary[j];

  if(firstNum + secondNum === n){
  pairs.push([i, j]);
   }
  }
 }
}


function pairN(ary, n) {
  for (var i = 0; i < ary.length; i += 1){
  var firstNum = ary[i];

  for (var j = 0; j < ary.length; i += 1){
  var secondNum = ary[j];

  if firstnum + secondNum === n) {
    pairs.push([i, j]);
  }
}

var ary1 = [5, -5, 2, -2];
var result = pairN(ary1, 0);

console.log(result);
