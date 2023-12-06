//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      count++;
    }
  }
  return operation(count);
}

function isAtLeast5(count) {
  if (count >= 5) {
    return true;
  } else {
    return false;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];
// Using `atLeastFive` function here;

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isAtLeast5);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isAtLeast5);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isAtLeast5);
