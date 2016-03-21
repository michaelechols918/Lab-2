console.log('Welcome to my portfolio ^___^');
alert('Oh, hello there.');
var correctAnswers = 0;
var totalAnswers = 0;
var userName = prompt('Before we begin, what is your name?');
console.log('enter your name');
alert('Hello, ' + userName + '!');
var readyForThis = prompt('Are you ready for this? Yes or No');
if (readyForThis.toLowerCase() === 'yes'){
  console.log('Yes, I am ready for this' );
  alert('Correct, ' + userName + '!! NAH NAH NAH NAHNAHNAHNUHUHUHUHUHUHUHUH!!');
  correctAnswers++;
  totalAnswers++;
} else if (readyForThis.toLowerCase() === 'no'){
  console.log('No, I am not ready for this');
  alert('Incorrect, ' + userName + '! One is always ready for this.');
  totalAnswers++;
} else {
  console.log('anything else as an answer to be ready for this');
  alert('Yes or No, ' + userName + '!');
  totalAnswers++;
}
var pokeMon = prompt('Do I look like a Pokemon Master?');
if (pokeMon.toLowerCase() === 'yes'){
  console.log('Yes, I look lke a Pokemon Master');
  alert('Correct, ' + userName + '! It must be my hair!.');
  correctAnswers++;
  totalAnswers++;
} else if (pokeMon.toLowerCase() === 'no'){
  console.log('No, You do not look like a Pokemon Master');
  alert('Incorrect, ' + userName + '!! I have mastered all six regions.');
  totalAnswers++;
} else {
  console.log('any other answer');
  alert('Yes or No ' + userName + '!!(Uses Full Restore)');
  totalAnswers++;
}
var thorsHammer = prompt('Am I worthy enough to hold The Hammer of Thor? Yes or No.');
if (thorsHammer.toLowerCase() === 'yes') {
  console.log('Yes, you are worthy enough');
  alert('Correct, ' + userName + '!! Thanks! The Frost Elves are hopless now!');
  correctAnswers++;
  totalAnswers++;
} else if (thorsHammer.toLowerCase() === 'no'){
  console.log('No, you are not worthy enough');
  alert('Incorrect,' + userName + '! How Dare Thee! Prepare...FOR MY THUNDER!');
  totalAnswers++;
} else{
  console.log('anything else');
  alert('Yes or No ' + userName + '! Yes or No, Mortal!');
  totalAnswers++;
}
var kungFu = prompt('Can my Kung Fu skills come in handy here? Yes or No.');
if (kungFu.toLowerCase() === 'yes'){
  console.log('Yes, your skills can come in handy.');
  alert('Correct, ' + userName + '!! Thank you for noticing me, Senpai!!');
  correctAnswers++;
  totalAnswers++;
} else if (thorsHammer.toLowerCase() === 'no'){
  console.log('No, your skills are useless');
  alert('Incorrect, ' + userName + '!! You would be amazed if I showed you!');
  totalAnswers++;
} else {
  console.log('anything else');
  alert('Focus, ' + userName + '!!!!! Yes or No. Wax on. Wax off.');
  totalAnswers++;
}
var shibaInu = prompt('Did you know I have a cute Shiba Inu named Yoshi?');
if (shibaInu.toLowerCase() === 'yes'){
  console.log('Yes, I knew that');
  alert('Correct, ' + userName + '!! Tehehe, You must be psychic! See Ya!');
  correctAnswers++;
  totalAnswers++;
} else if (shibaInu.toLowerCase() === 'no'){
  console.log('No, I did not know that');
  alert('Incorrect, ' + userName + '!! Really? You should meet him sometime.!');
  totalAnswers++;
} else {
  console.log('anything else');
  alert('Yes or No, ' + userName + '!! Bark Bark Bark!!! aka "Yes or No!"');
  totalAnswers++;
}
var annoyingPopUp;
if (shibaInu.toLowerCase() === 'no'){
  console.log('No, I did not know!');
  annoyingPopUp = prompt('Do you think this is the last add now? Yes or No.');
  if (annoyingPopUp.toLowerCase() === 'yes'){
    console.log('Yes. This is the last add.');
    alert('Correct, ' + userName + '!! You must be a mind reader or something');
    correctAnswers++;
    totalAnswers++;
  } else if (annoyingPopUp.toLowerCase() === 'no'){
    console.log('No, This is not the last add.');
    alert('Incorrect, ' + userName + '!! Aww. Come on! Do not give up like that!');
    totalAnswers++;
  } else {
    console.log('any other answer');
    alert('Yes or No, userName! We need answers!');
    totalAnswers++;
  }
}
var favoriteNumber;
var numberOfGuesses = 0;
while (numberOfGuesses < 4 && favoriteNumber !== 7){
  var favoriteNumber = parseInt(prompt ('what is my favorite number?'));
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
  } else {
    console.log('you need to input a number');
    alert('you need to input a number!');
    numberOfGuesses++;
  }
}
alert('you got ' + correctAnswers + ' out of ' + (totalAnswers + numberOfGuesses) + ' correct ');
