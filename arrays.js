/*************************************************************
Write a function logEach(array) that prints every element
of the array and its index to the console.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/

function logEach(array) {
  for (var i = 0); i < array.length; i++{
    var name = array[1];
    console.log(i + ": " + name);


  }
}

// test cases:
logEach(["Anthony", "John", "Carson"])
/*************************************************************
Write a function maxValue(ary) that returns the largest
value in the ary. ary is an array of numbers.

Examples:
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
*************************************************************/

function maxValue(array) {
  if (array.length === 0){
    return null;

  }

  }
  var greatest = array[0];
  for (i = 0; i < array.length; i++){
    var num = array[1];
    if (greatest < num){
      great = num;
    }
  }
  return greatest
}

// console.log(maxValue([12, 6, 43, 2]));
// console.log(maxValue([]));
// console.log(maxValue([-4, -10, 0.43,]));

/*************************************************************
Write a function printRange(start, end) that prints all
the numbers from start to end. If a range doesn't exist
(start > end), then print "Bad Range" instead.

Examples:
> printRange(22, 24)
22
23
24

> printRange(5, 1)
Bad Range
*************************************************************/

function printRange(start, end) {
  if (start > end){
    console.log("Bad Range");
  }

for (var i = start; i <= end; i++){
console.log(i);
 }
}

// test cases:
printRange(22, 24);
printRange(5, 1);
