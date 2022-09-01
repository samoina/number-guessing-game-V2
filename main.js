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

let correctGuess = Math.floor(Math.random() * 100) + 1,
    counter = 4;
    

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
    newGameBtn.style.display = 'none';
    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;

    counter = 4;
    paraMessage.textContent ='';
    correctGuess = Math.floor(Math.random() * 100) + 1;

    ev.preventDefault();
  }
  
 
  

}

submitBtn.addEventListener('click', checkGuess);
function checkGuess(ev){
  let userGuess = parseInt(guessInput.value);
      

    if(userGuess === correctGuess) {
      showResponse('Congrats! you got that right!', 'Green');
      resetGame();
    } else {
      
      if(userGuess<correctGuess){
        counter--;
        showResponse(`Wrong. Your guess is too low. You have ${counter} more guesses`, 'Red')
      } else if (userGuess>correctGuess){
        counter--;
        showResponse(`Wrong. Your guess is too high. You have ${counter} more guesses`, 'Red')
      }
    }

    if(counter===0 && userGuess !== correctGuess) {
      showResponse(`!!!Game Over!!! The correct answer was ${correctGuess}`, 'Red');
      resetGame();
    }

  
  ev.preventDefault();
}






