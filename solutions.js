// Problem 1

var staircase = function (n) {
  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(' '.repeat(n - i) + '#'.repeat(i));
  }
  return rows.join('\n');
};

// Problem 2

var gradingStudents = function (grades) {
  const MIN_ROUNDABLE_GRADE = 38;
  const MULTIPLE = 5;
  const MAX_GAP_TO_ROUND = 3;
 
  return grades.map((grade) => {
    if (grade < MIN_ROUNDABLE_GRADE) return grade;
    const gap = (MULTIPLE - (grade % MULTIPLE)) % MULTIPLE;
    return gap < MAX_GAP_TO_ROUND ? grade + gap : grade;
  });
};