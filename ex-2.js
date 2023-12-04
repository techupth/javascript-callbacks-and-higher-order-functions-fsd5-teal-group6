//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let scoreMoreThan70 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      scoreMoreThan70 += 1;
    }
  }
  console.log(scoreMoreThan70);
  return operation(scoreMoreThan70);
}
function isAtLeastFive(amount) {
  return amount >= 5 ? true : false;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;
scoreRoom1Result = atLeastFive(studentScoresRoom1, isAtLeastFive);
scoreRoom2Result = atLeastFive(studentScoresRoom2, isAtLeastFive);
scoreRoom3Result = atLeastFive(studentScoresRoom3, isAtLeastFive);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
