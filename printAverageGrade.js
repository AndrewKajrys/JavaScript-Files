function printAverage() {
for (var i =0; i < students.length; i++) {
var student = students[i];

var grades = student.grades;
var accScore = 0;

for (var j = 0; j < grades.length; j++) {
  var score = grades[j].score
  accScore += score;
  }

  var average = accScore / grades.length;
  console.log(student.name, average);
 }
}
