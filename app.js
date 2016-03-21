var userAnswers = [];
var numTrack = 0;
var correctAnswers = 0;
var totalAnswers = 0;
var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementById('ans-two');
var pTagThree = document.getElementById('ans-three');
var pTagFour = document.getElementById('ans-four');
var pTagFive = document.getElementById('ans-five');
var pTagSix = document.getElementById('ans-six');
var pTagSeven = document.getElementById('ans-seven');

console.log('Welcome to my portfolio ^___^');
alert('Oh, hello there.');
var totalAnswers = 0;
var userName = prompt('Before we begin, what is your name?');
console.log('enter your name');
alert('Hello, ' + userName + '!');

/* function amCorrect() {
  if (userAnswers[i] === correctAnswers[i]) {
    numTrack++;
    for (var i = 0; i < pTagArray.length; i++) {
      pTagArray[i].textContent = 'Sweet dude!';
    }
  } else if (userAnswers[i] !== 'y' || 'n') {
    alert('Please enter y or n!');
  } else {
    for (var i = 0; i < pTagArray.length; i++) {
      pTagArray[i].textContent = 'Wrong answer, dude!';
    }
  }
} */

//Question 1
function question1() {
  userAnswers.push((prompt('Are you ready for this? Yes or No')).toLowerCase());
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswers[0] === 'yes'){
  console.log('Yes, I am ready for this' );
  pTagOne.textContent = 'Correct, ' + userName + '!! NAH NAH NAH NAHNAHNAHNUHUHUHUHUHUHUHUH!!';
  correctAnswers++;
  totalAnswers++;
} else if (userAnswers[0] === 'no'){
  console.log('No, I am not ready for this');
  alert('Incorrect, ' + userName + '! One is always ready for this.');
  totalAnswers++;
} else {
  console.log('anything else as an answer to be ready for this');
  alert('Yes or No, ' + userName + '!');
  totalAnswers++;
}


while (i < myQuestions.length - 2 && conLoop == true) {
  userAnswers.push((prompt(myQuestions[i])).toLowerCase());
  console.log('User Answers so far: ' + userAnswers);
  amCorrect();
  if (i === 4) {
    if (userAnswers[4] === correctAnswers[4]) {
      amCorrect();
    } else {
      conLoop = false;
    }
  }
  i++;
}

var favoriteNumber;
var numberOfGuesses = 0;
while (numberOfGuesses < 4 && favoriteNumber !== 7){
  var favoriteNumber = parseInt(prompt(myQuestions[6]));
  if (favoriteNumber < 7){
    console.log('sorry that is too low');
    alert('Sorry, too low.');
    numberOfGuesses++;
  } else if (favoriteNumber > 7){
    console.log('sorry thats to high.');
    alert('Sorry too high');
    numberOfGuesses++;
  } else if (favoriteNumber === 7){
    console.log('good job!');
    alert('Good Job!');
    numberOfGuesses = 4;
    numTrack++;
  } else {
    console.log('you need to input a number');
    alert('you need to input a number!');
    numberOfGuesses++;
  }
}
alert('you got ' + numTrack + ' out of 7' + '  correct ');
