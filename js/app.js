'use strict';

// alert('Welcome to my page!');


function getUserName () {
  let userName = prompt('Welcome to my Page! What is your name?');
  alert('Thank you ', userName);
  alert('Welcome, ' + userName + '.' + ' Now it\'s time for a little yes or no question game about me!');
  return userName;
}

let checkUserName = getUserName();



let points = 0; // Steven Brown helped me with this.

function getPoints() {
  points++;
  return points;
}

let workExp = prompt('Did Q work in Security?');

function getWorkExp(){
  
  let lowerCaseWork = workExp.toLocaleLowerCase();
  if (lowerCaseWork === 'yes' || lowerCaseWork === 'y') {
    alert('Good Job! I did work in Security.');
    getPoints();
  } else if (lowerCaseWork === 'no'|| lowerCaseWork === 'n') {
    alert('Sorry, Wrong Anwser');
  } else {
    alert('Looks like you didn\'t read the question');
  }


}
getWorkExp();



let favMovie = prompt('Does Q like the "Lord of the Rings" (lotr) Movie Trilogy? ');

let lowerCaseFavMovie = favMovie.toLocaleLowerCase();

function getFavMovie(){

  if (lowerCaseFavMovie === 'yes' || lowerCaseFavMovie === 'y') {
    alert('Yup! The extended version of course.');
    getPoints();
  } else if (lowerCaseFavMovie === 'no'|| lowerCaseFavMovie === 'n') {
    alert('Sorry, Wrong Anwser');
  } else {
    alert('Looks like you didn\'t read the question.');
  }
  
}
getFavMovie();


let bookPoster = prompt('Does Q own a map of the Middle Earth?');

let lowerCaseBookPoster = bookPoster.toLocaleLowerCase();
function getBookPoster(){

  if (lowerCaseBookPoster === 'yes' || lowerCaseBookPoster === 'y') {
    alert('Correct! It\'s my favorite thing on my wall.');
    getPoints();
  } else if (lowerCaseBookPoster === 'no' || lowerCaseBookPoster === 'no') {
    alert('Sorry, Wrong Answer');
  } else {
    alert('Looks like you didn\'t read the question.');
  }

}
getBookPoster();

let bookReading = prompt('Does Q like to read?');

let lowerCaseBook = bookReading.toLocaleLowerCase();

function getBookReading(){
  
  if (lowerCaseBook === 'yes' || lowerCaseBook === 'y') {
    alert('Correct!');
    getPoints();
  } else if (lowerCaseBook === 'no' || lowerCaseBook === 'n') {
    alert('Sorry, Wrong Answer');
  } else {
    alert('Looks like you didn\'t read the question.');
  }

}
getBookReading();

let favShow = prompt('Does Q like Avatar the Last Airbender (atla)?');

let lowerCaseFavShow = favShow.toLocaleLowerCase();

function getFavShow(){

  if (lowerCaseFavShow === 'yes' || lowerCaseFavShow === 'y') {
    alert('Correct!');
    getPoints();
  } else if (lowerCaseFavShow === 'no' || lowerCaseFavShow === 'n') {
    alert('Sorry, Wrong Answer');
  } else {
    alert('Looks like you didn\'t READ the question.');
  }
}
getFavShow();


alert('Now, ' + checkUserName + '.' + ' Now it\'s time for a guessing Game!');

let myFavMedia = ['lotr', 'asoiaf', 'avatar the last airbender', 'harry potter', 'dc', 'dragon ball', 'marvel', 'monster', 'world war Z', 'star wars'];
function getFavMedia(){
let counter = 5;
let theyGotItRight = false;
while (theyGotItRight === false && counter > 0) {
  alert('you have ' + counter + ' guesses');
  let userGuess1 = prompt('Guess one of my favorite series?');
  let userGuess = userGuess1.toLowerCase();

  for (let i = 0; i < myFavMedia.length; i++) {
    if (userGuess === myFavMedia[i]) {
      alert('You got it right!');
      theyGotItRight = true;
      getPoints();
    }
  }
  if (theyGotItRight === false) {
    alert('I am sorry you are incorrect, guess again.');
  }
  counter--;
}
}
getFavMedia();
  



let myNum = 7;
function getMyNum(){

  for (let i = 0; i < 5; i++) {
    let userGuess = prompt('Guess a number between 1 to 10.');
    let numericalGuess = parseInt(userGuess);
    if (numericalGuess === myNum) {
      alert('Great Job!');
      points++;
      break;
    } else if (numericalGuess > myNum) {
      alert('Too high! Try again.');
    } else if (numericalGuess < myNum) {
      alert('Too low! Try again.');
    }
  }
}
getMyNum();

function getAlert(){

  alert('Thanks for playing ' + checkUserName + ', you got ' + points + ' points. Nice!'); // Joel Connell helped me with this.
}
getAlert();