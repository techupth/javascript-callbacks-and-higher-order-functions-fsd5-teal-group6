//Exercise #2: At Least Five Function
counter = 0;
function atLeastFive(array, operation) {
  // Start coding here

  operation(array);
  if (counter >= 5) {
    counter = 0;
    return true;
  } else {
    counter = 0;
    return false;
  }
}
const scoreCheck = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 70 ? counter++ : null;
  }

  //return counter >= 5 || false;
  //console.log(counter >= 5);
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreCheck);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreCheck);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreCheck);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
