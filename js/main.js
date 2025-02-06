let insert = prompt("Insert a word");

function isPalindrome(word) {
  const insertArray = insert.split("");
  const reverseArray = insertArray.reverse();
  const wordArray = reverseArray.join("");

  return word === wordArray;
}

console.log(isPalindrome(insert));

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const pickEvenOrOdd = prompt("Let's play a game: even or odd?");
const pickNumber = prompt("Ok, now insert a number").number;

function generateNumber(max) {
  return Math.floor(Math.random() * max);
}

console.log(generateNumber(6));

function SumNumbers(number) {}

// Expected output: 0, 1 or 2

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
