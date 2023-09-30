const {
  perimeterSquare,
  areaSquare,
  perimeterRectangle,
  areaRectangle,
} = require("./module.js");

const side = 8;

const length = 12;
const width = 6;

const squarePerimeter = perimeterSquare(side);
const squareArea = areaSquare(side);

const rectanglePerimeter = perimeterRectangle(length, width);
const rectangleArea = areaRectangle(length, width);

console.log(`Keliling persegi dengan sisi ${side}cm = ${squarePerimeter}cm`);
console.log(`Luas persegi dengan sisi ${side}cm = ${squareArea}cm`);
console.log(
  `Keliling persegi panjang dengan panjang ${length}cm dan lebar ${width}cm = ${rectanglePerimeter}cm`
);
console.log(
  `Luas persegi panjang dengan panjang ${length}cm dan lebar ${width}cm = ${rectangleArea}cm`
);
