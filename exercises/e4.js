// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
 var min = undefined;
 for (let i = 0; i < array.length; i++) {
 if (min === undefined || array[i] < min) {
 var min = array[i];
 }}
return min;
}

export function findMaxValueInArray(array) {
  var max = undefined;
  for (let i = 0; i < array.length; i++) {
  if (max === undefined || array[i] > max) {
  var max = array[i];
  }}
return max;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
