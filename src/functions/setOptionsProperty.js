const setOptionsProperty = (property, data) => {
  return data
    .map(hotel => hotel[property])
    .filter(
      (property, index, properties) => properties.indexOf(property) === index
    );
};
export default setOptionsProperty;
