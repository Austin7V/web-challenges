console.clear();

const root = document.getElementById("root");

import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();
root.append(circleElement, squareElement, pentagonElement);
