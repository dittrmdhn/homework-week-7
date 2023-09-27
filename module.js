const perimeterSquare = (side) => {
  return 4 * side;
};

const areaSquare = (side) => {
  return side * side;
};

const perimeterRectangle = (length, wide) => {
  return 2 * (length + wide);
};

const areaRectangle = (length, wide) => {
  return length * wide;
};

module.exports = {
  perimeterSquare,
  areaSquare,
  perimeterRectangle,
  areaRectangle,
};
