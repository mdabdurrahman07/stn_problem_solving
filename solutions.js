// Problem 1

var staircase = function (n) {
  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
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

// Problem 3

var timeConversion = function (s) {
  const hours12 = Number(s.slice(0, 2));
  const minutesAndSeconds = s.slice(2, 8);
  const isPM = s.slice(8).toUpperCase() === "PM";
  const hours24 = (hours12 % 12) + (isPM ? 12 : 0);
  return String(hours24).padStart(2, "0") + minutesAndSeconds;
};

// Problem 4

var repeatStr = function (n, s) {
  return n > 0 ? s.repeat(n) : "";
};

// Problem 5

var solution = function (str) {
  return [...str].reverse().join("");
};

// Problem 6

var positiveSum = function (arr) {
  return arr.reduce((total, value) => (value > 0 ? total + value : total), 0);
};

// Problem 7

var summation = function (num) {
  return (num * (num + 1)) / 2;
};

// Problem 8

var booleanToString = function (b) {
  return b ? "true" : "false";
};

// Problem 9

var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};
