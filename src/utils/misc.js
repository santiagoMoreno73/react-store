export const handleSumTotal = (cart) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export const paypalOptions = {
  clientId:
    "AYzDxfz_fDE32J4vIm-NzWUiZHnWhO88krYPEpnng3V9AsKIyUb6vxPTiYGke2Qn_XROTvQFvtkeE-ke",
  intent: "capture",
  currency: "USD",
};

export const buttonStyles = {
  layout: "vertical",
  shape: "rect",
};
