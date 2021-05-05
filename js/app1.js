' use strict';

// bits of broken js code, don't ;look

// // console.log('Hello World');



// // get name



// // while(userName === null || userName === '')


// // if (!userName) {
// //   userName = 'guest';
// // }
// while(!userName) {
//   userName = prompt('What is your name? Please enter a real name.');
// }

// alert('Hi ' + userName '.' + 'Thanks for Visiting');

// if (userName !== 'Qaalid') {
//   console.log('not me');
//   alert('Oh, it not me')
// }

// let snackArray = ['Dole Whip', 'Pickles', 'Turkey Leg'];
// console.log(snackArray);

// // array methods - built in functions that work on array

// //add items to the end of our list - efficient 
// snackArray.push('Hungry Bear Burger');

// add items to the beginning unshift is inefficient
// snackArray.unshift('micikey pretzel')

// console.log('This is the index of ..', snackArray.indexOf('Dole Whip'))
// console.log(snackArray.length);

// let snackGuess = prompt('Can you guess one of my favorite snacks');

// console.log(snackGuess, 'This is their guess');

// for (let i = 0; i < snackArray.length; i++) {
//   console.log(snackArray[i]);
//   if (snackArray[i] === snackGuess) {
//     console.log('You Got It!');
//   }
// }

// let userName = prompt('Welcome to my Page! What is your name?');
// alert('Thank you', userName);
// alert('Welcome, ' + userName + '.' + ' Now it\'s time for a guessing Game!');

// let favMediaArray = ['lotr', 'asoiaf', 'avatar the last airbender', 'harry potter', 'dc', 'dragon ball', 'marvel', 'monster', 'world war Z', 'star wars']
// console.log(favMediaArray);

// let counter = 5;
// let userGotItRight = false;
// while (theyGotItRight === false && counter > 0) {
  
//   let favMediaGuess = prompt('Can you guess one of my favorite media?')
//   let favMediaGuess = favMediaGuess.toLocaleLowerCase();
//   for(let i = 0; i < favMediaGuess.length; i++) {
//     console.log(favMediaGuess[i]);
//     if (favMediaGuess === favMediaGuess[i]) {
//       alert('You got it!');
//       theyGotItRight = true;
//     } 
//   }
//   counter--
// }
  

// alert('These are all the possible correct answers ' + favMediaGuess);




// let myNum = 7;

// for (let i = 0; i < 5; i++) {
//   let userGuess = prompt('Guess a number between 1 to 10');
//   let numericalGuess = parseInt(userGuess);
//   if (numericalGuess === myNum) {
//     alert('Great Job');
//     points++;
//     break;
//   } else if (numericalGuess > myNum) {
//     alert('Too High, try again.');
//   } else if (numericalGuess < myNum) {
//     alert('Too low, try again.');
//   }
// }





// let randNum = prompt();
// alert()

// let guessNumber () {
//   let randNum = math.floor(math.randNum() * 10) + 1;

//   let ranNum = parseInt(prompt('Guess a number between 1 to 10: '));

//   if(number == randNum) {
//     alert('You\'ve guessed the right number!');
//   }
// }

// let randNum = (Math.floor(Math.random() * 100) + 1)
// alert('I\'m thinking of a number between 1 and 100, can you guess it?')
// for (let n= 0; n<5; n++) {
//   answers[7] = prompt('Which number am I thinking of?');
//   if (|(answers[7]/1)) {
//     alert('numbers only please.')
//     n--
//     continue
//   }
// }




// let favMediaArray = ['lotr', 'asoiaf', 'avatar the last airbender', 'harry potter', 'dc', 'dragon ball', 'marvel', 'monster', 'world war Z', 'star wars'];
// console.log(favMediaArray);

// let counter = 5;
// let userGotItRight = false;
// while (theyGotItRight === false && counter > 0) {
//   alert('You have ' + counter + ' guess left');
//   let favMediaGuess = prompt('Can you guess one of my favorite media?')
//   let favMediaGuess = favMediaGuess.toLocaleLowerCase();
  
//   for(let i = 0; i < favMediaGuess.length; i++) {
//     console.log(favMediaGuess[i]);
//     if (favMediaGuess === favMediaGuess[i]) {
//       alert('You got it!');
//       theyGotItRight = true;
//     } 
//   }
//   if (theyGotItRight === false) {
//     alert("Sorry, Incorrect. Try again.")
//   }
//   counter--;
// }