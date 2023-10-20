// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let letterArr = [];

  for (let i = 0; i < array.length; i++) {
    let name = (array[i].name);
    for (let l in name) {
      if (name[l].toLowerCase() === letter.toLowerCase()) {
        letterArr.push(array[i].name);
        break;
      }
    }
  }
  return letterArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
