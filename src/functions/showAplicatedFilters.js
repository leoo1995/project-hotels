export default (size, price, country) => {
  const prices = ["muy económicos", "económicos", "costosos", "muy costosos"];
  let sizeHotel;
  switch (size.value) {
    case "small":
      sizeHotel = "pequeños";
      break;
    case "medium":
      sizeHotel = "medianos";
      break;
    case "big":
      sizeHotel = "grandes";
    default:
      break;
  }

  return `hoteles${size.value ? " " + sizeHotel : " "}
  ${price.value && size.value ? " y " : ""}
  ${price.value ? " " + prices[price.value - 1] : " "}
  ${country.value ? " en " + country.value : " "}`;
};
