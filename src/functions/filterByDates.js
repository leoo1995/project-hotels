export default (hotel, inputDates) => {
  const [dateFrom, dateTo] = inputDates;
  let timeUnixFrom = new Date(dateFrom.value).getTime() + 1;
  const timeUnixTo = new Date(dateTo.value).getTime() + 82800000; //+23 hours
  if (timeUnixFrom < new Date().getTime()) {
    timeUnixFrom = new Date().getTime() + 1;
  }
  if (timeUnixFrom > timeUnixTo) return false;
  if (timeUnixFrom <= timeUnixTo)
    return (
      hotel.availabilityFrom <= timeUnixFrom &&
      hotel.availabilityTo >= timeUnixTo
    );
  return true;
};
