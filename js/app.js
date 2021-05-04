'use strict';

console.log('Welcome to my page!');
let userName = prompt('Welcome to my Page! What is your name?');
console.log('Thank you', userName);
alert('Welcome, ' + userName);


let workExp = prompt('Did Q work in Security? Please Answer with yes or no.');


let lowerCaseWork = workExp.toLocaleLowerCase();
// let upperCaseWork = workExp.toLocaleUpperCase();
// while(lowerCaseWork)
if (lowerCaseWork === 'yes' || lowerCaseWork === 'y') {
  alert('Good Job! I did work in Security.');
} else if (lowerCaseWork === 'no'|| lowerCaseWork === 'n') {
  alert('Sorry, Wrong Anwser');
} else {
  alert('Looks like you didn\'t read the question');
}

let favMovie = prompt('Does Q like the "Lord of the Rings" Movie Trilogy? Please Answer with yes or no.');

let lowerCaseFavMovie = favMovie.toLocaleLowerCase();
// let upperCaseFavMovie = favMovie.toLocaleUpperCase();

if (lowerCaseFavMovie === 'yes' || lowerCaseFavMovie === 'y') {
  alert('Yup! The extended version of course.');
} else if (lowerCaseFavMovie === 'no'|| lowerCaseFavMovie === 'n') {
  alert('Sorry, Wrong Anwser');
} else {
  alert('Looks like you didn\'t read the question');
}

let bookPoster = prompt('Does Q own a map of the Middle Earth? Please Answer with yes or no.');

let lowerCaseBookPoster = bookPoster.toLocaleLowerCase();

if (lowerCaseBookPoster === 'yes' || lowerCaseBookPoster === 'y') {
  alert('Correct!');
} else if (lowerCaseBookPoster === 'no' || lowerCaseBookPoster === 'no') {
  alert('Sorry, Wrong Answer');
} else {
  alert('Looks like you didn\'t read the question');
}


let bookReading = prompt('Does Q like to read? True or False');

let lowerCaseBook = bookReading.toLocaleLowerCase();

if (lowerCaseBook === 'true' || lowerCaseBook === 't') {
  alert('Correct!');
} else if (lowerCaseBook === 'false' || lowerCaseBook === 'f') {
  alert('Sorry, Wrong Answer');
} else {
  alert('Looks like you didn\'t READ the question');
}

let favShow = prompt('Does Q like Avatar the Last Airbender? True or False');

let lowerCaseFavShow = favShow.toLocaleLowerCase();

if (lowerCaseFavShow === 'true' || lowerCaseFavShow === 't') {
  alert('Correct!');
} else if (lowerCaseFavShow === 'false' || lowerCaseFavShow === 'f') {
  alert('Sorry, Wrong Answer');
} else {
  alert('Looks like you didn\'t READ the question');
}

