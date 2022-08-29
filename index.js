function hasTargetSum(array, target) {
  // Write your algorithm here
  const nums = {}; // stores numbers and their indices
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (target - num in nums) {
      return true; // [nums[targetSum - num], i]; // (pseu·do·code NO.2)
    }
    nums[array[i]] = i;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(N), Where ’N’ is the total number of elements in the given array
  O(N) , in the worst case, we will be pushing ’N’ numbers in the HashTable
  if two pointers was used the 
    time complexity: 0(n)
    space complexity: 0(1) no need for any space
*/

/* 
  Add your pseudocode here
  1. Search for "Y" (which is equivalent to "Target- X") in the HashTable
  2. If it's there, we found the required pair
  3. If not, insert "X" in the HashTable, so that we can search it for the later numbers
*/

/*
  Add written explanation of your solution here
  we are using hash table because we would also want to check for those that have duplicates
  1. We first, do a for loop through an array
  2. In line 6, we Search for “Y” (which is equivalent to “Target- X”) in the HashTable
  3. in line 7 we return true if we found a pair `x + y === target`
  4. In line 9, If X + Y != Target , insert “X” in the HashTable, so that we can search it for the later numbers
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;