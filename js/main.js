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

const pickEvenOrOdd = Number(
  prompt("Let's play a game: even (insert 2) or odd (insert 1)?")
);
const pickNumber = Number(prompt("Ok, now insert a number"));

function generateNumber(max) {
  return Math.floor(Math.random() * max);
}

function isEven(number) {
  return number % 2 === 0;
}

const sumNumbers = generateNumber(6) + pickNumber;

if (isNaN(pickNumber)) {
  console.log("Please insert a valid number");
} else if (pickEvenOrOdd !== 1 && pickEvenOrOdd !== 2) {
  console.log("Please insert 1 for odd or 2 for even");
} else if (
  (pickEvenOrOdd === 2 && isEven(sumNumbers)) ||
  (pickEvenOrOdd === 1 && !isEven(sumNumbers))
) {
  console.log("You won");
} else {
  console.log("You lost, you poor human");
}
