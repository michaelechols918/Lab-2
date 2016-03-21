var userAnswers = [];
var correctAnswers = 0;
var totalAnswers = 0;
var userAnswer;
var favoriteNumber;
var numberOfGuesses = 0;
var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementById('ans-two');
var pTagThree = document.getElementById('ans-three');
var pTagFour = document.getElementById('ans-four');
var pTagFive = document.getElementById('ans-five');
var pTagSix = document.getElementById('ans-six');
var pTagSeven = document.getElementById('ans-seven');

console.log('Welcome to my portfolio ^___^');
alert('Oh, hello there.');
var userName = prompt('Before we begin, what is your name?');
console.log('enter your name');
alert('Hello, ' + userName + '!');

//Question 1
function question1() {
  userAnswer = prompt('Are you ready for this? Yes or No').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswer === 'yes'){
    console.log('Yes, I am ready for this' );
    pTagOne.textContent = 'Correct, ' + userName + '!! NAH NAH NAH NAHNAHNAHNUHUHUHUHUHUHUHUH!!';
    correctAnswers++;
    totalAnswers++;
  } else if (userAnswer === 'no'){
    console.log('No, I am not ready for this');
    pTagOne.textContent = 'Incorrect, ' + userName + '! One is always ready for this.';
    totalAnswers++;
  } else {
    console.log('anything else as an answer to be ready for this');
    alert('Yes or No, ' + userName + '!');
    totalAnswers++;
  }
}
question1();

//Question 2
function question2() {
  userAnswer = prompt('Do I look like a Pokemon Master?').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswer === 'yes'){
    console.log('Yes, I look lke a Pokemon Master');
    pTagTwo.textContent = 'Correct, ' + userName + '! It must be my hair!.';
    correctAnswers++;
    totalAnswers++;
  } else if (userAnswer === 'no'){
    console.log('No, You do not look like a Pokemon Master');
    pTagTwo.textContent = 'Incorrect, ' + userName + '!! I have mastered all six regions.';
    totalAnswers++;
  } else {
    console.log('anything else as an answer');
    alert('Yes or No ' + userName + '!!(Uses Full Restore)');
    totalAnswers++;
  }
}
question2();

//Question 3
function question3() {
  userAnswer = prompt('Am I worthy enough to hold The Hammer of Thor? Yes or No.').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswer === 'yes'){
    console.log('Yes, you are worthy enough');
    pTagThree.textContent = 'Correct, ' + userName + '!! Thanks! The Frost Elves are hopless now!';
    correctAnswers++;
    totalAnswers++;
  } else if (userAnswer === 'no'){
    console.log('No, you are not worthy enough');
    pTagThree.textContent = 'Incorrect,' + userName + '! How Dare Thee! Prepare...FOR MY THUNDER!';
    totalAnswers++;
  } else {
    console.log('anything else as an answer');
    alert('Yes or No ' + userName + '! Yes or No, Mortal!');
    totalAnswers++;
  }
}
question3();

//Question 4
function question4() {
  userAnswer = prompt('Can my Kung Fu skills come in handy here? Yes or No.').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);
  if (userAnswer === 'yes'){
    console.log('Yes, your skills can come in handy.');
    pTagFour.textContent = 'Correct, ' + userName + '!! Thank you for noticing me, Senpai!!';
    correctAnswers++;
    totalAnswers++;
  } else if (userAnswer === 'no'){
    console.log('No, your skills are useless');
    pTagFour.textContent = 'Incorrect, ' + userName + '!! You would be amazed if I showed you!';
    totalAnswers++;
  } else {
    console.log('anything else as an answer');
    alert('Focus, ' + userName + '!!!!! Yes or No. Wax on. Wax off.');
    totalAnswers++;
  }
}
question4();

//Question 5 & 6
function question5and6() {
  userAnswer = prompt('Did you know I have a cute Shiba Inu named Yoshi?').toLowerCase();
  userAnswers.push(userAnswer);
  console.log('User Answers so far: ' + userAnswers);

  if (userAnswer === 'yes'){
    console.log('Yes, I knew that');
    pTagFive.textContent = 'Correct, ' + userName + '!! Tehehe, You must be psychic! See Ya!';
    correctAnswers++;
    totalAnswers++;

    userAnswer = prompt('Do you think this is the last add now? Yes or No.').toLowerCase();
    userAnswers.push(userAnswer);
    console.log('User Answers so far: ' + userAnswers);

//Runs if user gets question 5 correct.
    if (userAnswer === 'yes') {
      console.log('Yes. This is the last add.');
      pTagSix.textContent = 'Correct, ' + userName + '!! You must be a mind reader or something';
      correctAnswers++;
      totalAnswers++;
    } else if (userAnswer === 'no'){
      console.log('No, This is not the last add.');
      pTagSix.textContent = 'Incorrect, ' + userName + '!! Aww. Come on! Do not give up like that!';
      totalAnswers++;
    } else {
      console.log('any other answer');
      alert('Yes or No, userName! We need answers!');
      totalAnswers++;
    }

  } else if (userAnswer === 'no'){
    console.log('No, I did not know that');
    pTagFive.textContent = 'Incorrect, ' + userName + '!! Really? You should meet him sometime. One more question!';
    totalAnswers++;
  } else {
    console.log('anything else as an answer');
    alert('!! Bark Bark Bark!!! aka "Yes or No!"');
    totalAnswers++;
  }
}
question5and6();

function guessingGame() {
  while (numberOfGuesses < 4 && favoriteNumber !== 7){
    favoriteNumber = parseInt(prompt('What is my favorite number?'));
    if (favoriteNumber < 7){
      console.log('sorry that is too low');
      pTagSix.textContent = 'Sorry, too low.';
      numberOfGuesses++;
    } else if (favoriteNumber > 7){
      console.log('sorry thats to high.');
      pTagSix.textContent = 'Sorry, too high.';
      numberOfGuesses++;
    } else if (favoriteNumber === 7){
      console.log('good job!');
      pTagSix.textContent = 'Great job!';
      numberOfGuesses = 4;
      correctAnswers++;
    } else {
      console.log('you need to input a number');
      alert('you need to input a number!');
      numberOfGuesses++;
    }
  }
  totalAnswers++;
  alert('you got ' + correctAnswers + ' out of ' + totalAnswers + '  correct ');
}
guessingGame();
