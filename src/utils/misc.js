// regular expressions
export const regularExpNotNumbers = /^[A-Z]+$/i;
export const regularExpNotLetters = /^[0-9]+$/;

export const handleSumTotal = (cart) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export const buttonStyles = {
  layout: "vertical",
  shape: "rect",
};

export const handleRandomKey = (keys) => {
  const randomKey = Math.random() * keys;
  return randomKey;
};
