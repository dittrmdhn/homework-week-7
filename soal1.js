const {
  perimeterSquare,
  areaSquare,
  perimeterRectangle,
  areaRectangle,
} = require("./module.js");

const squarePerimeter = perimeterSquare(4);
const squareArea = areaSquare(12);
const rectanglePerimeter = perimeterRectangle(8, 12);
const rectangleArea = areaRectangle(9, 15);

console.log(`Keliling persegi: ${squarePerimeter}`);
console.log(`Luas persegi: ${squareArea}`);
console.log(`Keliling persegi panjang: ${rectanglePerimeter}`);
console.log(`Luas persegi panjang: ${rectangleArea}`);
