//HTML elements
let userWordInputForm = document.getElementById("wordInputForm");
const errorMessage = document.getElementById("errorMessage");
let startPage = document.getElementById("startPage");
let hangmanGame = document.getElementById("hangmanGame");

// Game JS elements
let userWordArray = [];
let guessingArray = [];
const space = " ";

userWordInputForm.onsubmit = function (event) {
  event.preventDefault();

  let userWord = userWordInputForm.elements.chooseWordInputField.value;
  console.log(userWord);

  if (userWord.length >= 20 || userWord.length < 1) {
    displayErrorMessage("! Word/sentence must be between 1-20 characters");
    userWordInputForm.reset();
  } else {
    //creates an array out of the inputted word
    userWordArray = userWord.split("");
    console.log(userWordArray);

    //creates another array with underscores representing each charachter of the word
    guessingArray = userWordArray.map(function () {
      return "_";
    });

    // replaces any spaces with an empty space instead of an underscore
    if (userWordArray.includes(" ")) {
      replaceItem(space);
    }
    console.log(userWordArray);
    console.log(guessingArray);

    startPage.classList.add("invisible");
    hangmanGame.classList.remove("invisible");
  }
};

// function for displaying the error message
function displayErrorMessage(message) {
  errorMessage.classList.add("visible");
  errorMessage.innerHTML = message;

  setTimeout(function () {
    errorMessage.classList.remove("visible");
  }, 2000);
}

// function for replacing items
// find the index of an item you want to replace
function findReplacementIndex(item) {
  let itemIndex = userWordArray.indexOf(item);
  let itemIndicesArray = []; // new
  while (itemIndex != -1) {
    itemIndicesArray.push(itemIndex); // new
    itemIndex = userWordArray.indexOf(item, itemIndex + 1);
    console.log(itemIndicesArray);
  }
  return itemIndicesArray; // new
}

function replaceItem(item) {
  let itemIndicesArray = findReplacementIndex(item);
  for (let i = 0; i < itemIndicesArray.length; i++) {
    let newIndex = itemIndicesArray[i];
    console.log(newIndex);
    guessingArray.splice(newIndex, 1, item);
  }
  console.log(guessingArray);
}
