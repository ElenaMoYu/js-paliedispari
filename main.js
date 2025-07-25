// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// const word = prompt("Insert a word");

// function isPalindrome(word) {
//   const firstWord = word.toLowerCase();
//   const oppositeWord = firstWord.split("").reverse();
//   return firstWord === oppositeWord.join("");
// }

// if (isPalindrome(word)) {
//   alert("It's a palindrome");
// } else {
//   alert("Not a palindrome");
// }

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function getUserSide() {
  const userSide = prompt("Odds or Evens?").toLowerCase();
  if (userSide != "odds" && userSide != "evens") {
    return getUserSide();
  } else {
    return userSide;
  }
}

function getUserNumber() {
  const userNumber = Number(prompt("Pick a number between 1 and 5"));
  if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    return getUserNumber();
  } else {
    return userNumber;
  }
}

const myNumber = Math.floor(Math.random() * 5) + 1;

const userSide = getUserSide();
const userNumber = getUserNumber();

const total = userNumber + myNumber;
const isEven = total % 2 === 0;

function results() {
  if ((isEven && userSide === "evens") || (!isEven && userSide === "odds")) {
    alert("You win!");
  } else {
    alert("I win ahahahaha!");
  }
}

console.log(results());
