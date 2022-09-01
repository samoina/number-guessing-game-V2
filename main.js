//Player must guess a number between minimum and maximum
//Player gets a certain number of guesses
//Let player know how many guesses remain
//Let player know the correct answer if they lose
//Let player play again


//UI variables 
const game = document.querySelector('#game'),
      minNum = parseInt(document.querySelector('.min-num').innerHTML),
      maxNum = parseInt(document.querySelector('.max-num').innerHTML),
      guessInput = document.querySelector('#guess-input'),
      paraMessage = document.querySelector('.message'),
      submitBtn = document.querySelector('#guess-value');

let correctGuess = Math.floor(Math.random() * 100) + 1;
console.log(correctGuess);

guessInput.focus();


 //Generate the random min and max numbers
//  function generateNumbers(){
//   minimumNumber = Math.floor(Math.random() * 1) + 1;
//   maximumNumber = Math.floor(Math.random() * 100) + 1;
//   correctGuess = Math.floor(Math.random() * 100) + 1;
//   console.log(minimumNumber, correctGuess, maximumNumber);

//   //output the dynamic numbers to the HTML
//   minNum.textContent = minimumNumber;
//   maxNum.textContent = maximumNumber;
//  }

// generateNumbers();

function showResponse(message, color){
  paraMessage.textContent = message;
  paraMessage.style.backgroundColor = color;
}

submitBtn.addEventListener('click', checkGuess);

function checkGuess(ev){
  let userGuess = parseInt(guessInput.value);

  if(userGuess === correctGuess) {
    showResponse('Congrats! you got that right!', 'Green');
  } else if (userGuess<minNum || userGuess>maxNum) {
    showResponse('Wrong. Please enter a number within the limits', 'Red');
  } else {
    if(userGuess<correctGuess){
      showResponse('Wrong. Your guess is too low. Try again', 'Red')
    } else if (userGuess>correctGuess){
      showResponse('Wrong. Your guess is too high. Try again', 'Red')
    }
  }


  ev.preventDefault();
}






