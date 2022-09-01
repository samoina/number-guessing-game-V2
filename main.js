//Player must guess a number between minimum and maximum
//Player gets a certain number of guesses
//Let player know how many guesses remain
//Let player know the correct answer if they lose
//Let player play again


//UI variables 
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      paraMessage = document.querySelector('.message'),
      submitBtn = document.querySelector('#guess-value');

let minimumNumber,
    maximumNumber;


 //Generate the random min and max numbers
 function generateNumbers(){
  minimumNumber = Math.floor(Math.random() * 1) + 1,
  maximumNumber = Math.floor(Math.random() * 100) + 1
  console.log(minimumNumber, maximumNumber);

  //output the dynamic numbers to the HTML
  minNum.textContent = minimumNumber;
  maxNum.textContent = maximumNumber;
 }


submitBtn.addEventListener('click', checkGuess);

function checkGuess(ev){
  generateNumbers();
  let userGuess = guessInput.value;
  console.log(userGuess);

if(userGuess<minimumNumber || userGuess>maximumNumber) {
  console.log('error');
}

  ev.preventDefault();
}






