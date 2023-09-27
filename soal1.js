const {
  perimeterSquare,
  areaSquare,
  perimeterRectangle,
  areaRectangle,
} = require("./module.js");

console.log(`Keliling persegi: ${perimeterSquare(4)}`);
console.log(`Luas persegi: ${areaSquare(4)}`);
console.log(`Keliling persegi panjang: ${perimeterRectangle(4, 6)}`);
console.log(`Luas persegi panjang: ${areaRectangle(4, 6)}`);
