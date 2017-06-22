function printBestGrade(students) {
for (var i = 0; i < students.length; i++) {
var student = students[i];

var grades = student.grades;
var BestGrade = grades[0]. score;
for (var i = 0; i < grades.length; i++) {
var score = grades[i].score;

  if (bestGrade < score) {
    bestGrade = score;
  }

 }
 console.log(student.name, bestGrade);
 }
} 
