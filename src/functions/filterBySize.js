export default (hotel, size) => {
  switch (size.value) {
    case "small":
      return hotel.rooms <= 10;
    case "medium":
      return hotel.rooms > 10 && hotel.rooms <= 20;
    case "big":
      return hotel.rooms > 20;
    default:
      return true;
  }
};
