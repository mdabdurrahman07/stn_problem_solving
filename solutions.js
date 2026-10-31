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

// Problem 10 

var runningSum = function (nums) {
  const result = new Array(nums.length);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result[i] = total;
  }
  return result;
};


// Problem 11

var maximumWealth = function (accounts) {
  let richest = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const balance of customer) wealth += balance;
    if (wealth > richest) richest = wealth;
  }
  return richest;
};

// Problem 12

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
 
  let writeIndex = 1;
  for (let readIndex = 1; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== nums[writeIndex - 1]) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }
  return writeIndex;
};

// Problem 13

var containsDuplicate = function (nums) {
  const seen = new Set();
  for (const value of nums) {
    if (seen.has(value)) return true;
    seen.add(value);
  }
  return false;
};

// Problem 14

var moveZeroes = function (nums) {
  let writeIndex = 0;
  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }
  for (let i = writeIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Problem 15

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let write = m + n - 1;
 
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[write] = nums1[i];
      i--;
    } else {
      nums1[write] = nums2[j];
      j--;
    }
    write--;
  }
};

// Problem 17

var plusOne = function (digits) {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  return [1, ...result];
};

// Problem 18

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};


// Problem 19 

var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] === ' ') end--;
 
  let length = 0;
  while (end >= 0 && s[end] !== ' ') {
    length++;
    end--;
  }
  return length;
};

// Problem 20

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
 
  const first = strs[0];
  for (let index = 0; index < first.length; index++) {
    for (let k = 1; k < strs.length; k++) {
      if (index >= strs[k].length || strs[k][index] !== first[index]) {
        return first.slice(0, index);
      }
    }
  }
  return first;
};
