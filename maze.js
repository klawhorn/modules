function firstChoice (x) {
  if (x !== 2) {
    console.log('Wrong direction, try again.');
  } else {
    console.log('Excellent choice, please proceed! Type maze.2(), and put your next guess in the parentheses.');
  }
};

function secondChoice (x) {
  if (x !== 3) {
    console.log('Wrong direction, try again.');
  } else {
    console.log('Excellent choice, please proceed! Type maze.3(), and put your next guess in the parentheses.');
  }
};

module.exports = {
  firstStep: firstChoice,
  secondStep: secondChoice
}
