console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "testste";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome Admin!");
} else {
  console.log("Acces denied!");
}

// Part 2: Even / Odd
const number = 19;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10;
let pricePerHotdog;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs < 1_000_000) {
  pricePerHotdog = 1;
} else {
  pricePerHotdog = 0.1;
}

const totalPrice = numberOfHotdogs * pricePerHotdog;
console.log("Total price:", totalPrice, "Euro");

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
