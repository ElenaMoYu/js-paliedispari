// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt("Insert a word");

function isPalindrome(word) {
  const firstWord = word.toLowerCase();
  const oppositeWord = firstWord.split("").reverse();
  return firstWord === oppositeWord.join("");
}

if (isPalindrom(word)) {
  alert("It's a palindrome");
} else {
  alert("Not a palindrome");
}

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const youChoose = prompt("Odds or Evens?").toLowerCase();
const chooseNumber = Number(prompt("Pick a number between 1 and 5"));

if (chooseNumber < 1 || chooseNumber > 5) {
  return chooseNumber;
} else {
  const myNumber = Math.floor(Math.random() * 5) + 1;
  const total = chooseNumber + myNumber;
  const isEven = total % 2 === 0;

  const youWin =
    (isEven && youChoose === "evens") || (!isEven && youChoose === "odds");

  if (youWin) {
    alert("You win!");
  } else {
    alert("I win ahahahaha!");
  }
}
