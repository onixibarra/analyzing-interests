// analyzing datasets
// solving problems through functions
// Use the pseudocode to help you write the 'countThePeople' function

function countThePeople(people) {
  // start a counter variable at 0
  // loop through the people
  // for each person, add one to the counter
  // after the loop, return the counter
  let counter = 0;
  for (let i = 0; i < people.length; i++) {
    counter += 1;
  }
  return counter
}
