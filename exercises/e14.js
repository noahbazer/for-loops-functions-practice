
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  var finalArr = [];
  for (let i = 0; i < array.length; i++) {               
    var depSum = 0;
    var withSum = 0;
  
    if (array[i].withdrawals) {
      for (let w = 0; w < array[i].withdrawals.length; w++) {
        withSum += array[i].withdrawals[w];
      }
    }
  
    if (array[i].deposits) {
      for (let d = 0; d < array[i].deposits.length; d++) {
        depSum += array[i].deposits[d];
      }
    }
  
    if (array[i].balance != (depSum - withSum)) {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
