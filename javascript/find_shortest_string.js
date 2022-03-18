function findShortestString(arr) {
  let comparison = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i].length < comparison.length) {
      comparison = arr[i]
    }
  }
  return comparison
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file

/************************************* 
initialize empty variable to hold comparison value

iterate through array:
compare lengths of elements
if length is less than the comparison value, reassign comparison value

**************************************/
// And a written explanation of your solution
