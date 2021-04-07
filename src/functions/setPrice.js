export default price => {
  let categoryPrice = "";
  for (let i = 0; i < price; i++) {
    categoryPrice += "$";
  }
  return categoryPrice;
};
