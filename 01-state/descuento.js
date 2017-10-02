
const myCart = [
  { price: 1 },
  { price: 2 },
  { price: 3 }
];

'use strict';


//const discount = .2;

// Broken: returns new array but mutates same object references.
const applyDiscount = (cart,discount) => {
  if (!cart.length) {
    return [];
  }
  
  const cart2 = Object.assign([], cart)

  const current = cart2.shift();
  
  const newCurrent = Object.assign({}, current)
  
  newCurrent.price *= (1 - discount);
  return [newCurrent].concat(applyDiscount(cart2,discount));
};

module.exports = applyDiscount;