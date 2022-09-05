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
      submitBtn = document.querySelector('#guess-value'),
      newGameBtn = document.querySelector('#new-game');

newGameBtn.style.display = 'none';

let correctGuess = generateRandomNum(),
    counter = 4;

function generateRandomNum(){
  return Math.floor(Math.random() * 100) + 1
}

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

//Function to show response and feedback
function showResponse(message, color){
  paraMessage.textContent = message;
  paraMessage.style.backgroundColor = color;
}

//function to reset game
function resetGame(){
  guessInput.disabled = true;
  submitBtn.disabled = true;

  newGameBtn.style.display = 'block';

  newGameBtn.addEventListener('click', startNewGame);

  function startNewGame(ev){
    window.location.reload();

    ev.preventDefault();
  }
}

submitBtn.addEventListener('click', checkGuess);
function checkGuess(ev){
  let userGuess = parseInt(guessInput.value);

    if(isNaN(userGuess) || userGuess < minNum || userGuess > maxNum) {
      showResponse(`Please include a number within the limits`, 'Red')
    } else if (userGuess === correctGuess){
      showResponse('Congrats! you got that right!', 'Green');
      resetGame();
    } else {
      counter--;
      if(userGuess<correctGuess) {
        showResponse(`Wrong. Your guess is too low. You have ${counter} more guesses`, 'Red');
      } else {
        showResponse(`Wrong. Your guess is too high. You have ${counter} more guesses`, 'Red');
      }
    }

     if(counter===0 && userGuess !== correctGuess) {
      showResponse(`!!!Game Over!!! The correct answer was ${correctGuess}`, 'Red');
      resetGame();
    }
  ev.preventDefault();
}

//BRAD's METHOD on the udemy course
//create the variables
// let min = 15,
//   max = 20,
//   winningNum = getRandomNum(min, max),
//   guessesLeft = 3;
 
// //UI elements
// const game = document.querySelector("#game"),
//   minNum = document.querySelector(".min-num"),
//   maxNum = document.querySelector(".max-num"),
//   guessBtn = document.querySelector("#guess-value"),
//   guessInput = document.querySelector("#guess-input"),
//   message = document.querySelector(".message");

// //Assign UI min and max
// minNum.textContent = min;
// maxNum.textContent = max;

// //play again eventL but use event delegation
// game.addEventListener('mousedown', function(e){
//   if(e.target.className === 'play-again'){
//     window.location.reload()
//   }
// })

// //add eL
// guessBtn.addEventListener("click", checkGuess);

// function checkGuess(ev) {
//   let guess = parseInt(guessInput.value);

//   if (isNaN(guess) || guess < min || guess > max) {
//     setMessage(`Please enter a number between ${min} and ${max}`, 'red');
//   }

//   //check if won
//   if (guess === winningNum) {
//     gameOver(true, `Congratulations, you win! ${winningNum} is correct`)
//   } else {
//     guessesLeft -= 1;
//     if (guessesLeft === 0) {
//       gameOver(false, `Game over! You lost. The correct number was ${winningNum}`)
//     } else {
//       setMessage(`Guess is not correct. ${guessesLeft} guesses remaining`, 'red');
//       guessInput.style.borderColor = 'red';
//       guessInput.value = '';
//     }
//   }

//   ev.preventDefault();
// }

// function setMessage(msg, color) {
//   message.textContent = msg;
//   message.style.color = color;  
// }

// function gameOver(won, msg) {
//   let colour;
//   won === true ? colour = 'green' : colour = 'red'
//   guessInput.disabled = true;
//   guessInput.style.borderColor = colour;
//   message.style.color = colour;
//   setMessage(msg);

//   //play again
//   guessBtn.value = 'Play Again';
//   guessBtn.className += 'play-again';  
// }

// //Get the winning number
// function getRandomNum(min, max){
//   return Math.floor(Math.random() * ((max-min)+1)+ min);  
// }