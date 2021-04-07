export default (hotel, inputDates) => {
  const [dateFrom, dateTo] = inputDates;
  const timeUnixFrom = new Date(dateFrom.value).getTime();
  const timeUnixTo = new Date(dateTo.value).getTime();
  // if (!timeUnixFrom || !timeUnixTo) return true;
  if (timeUnixFrom > timeUnixTo) return false;
  if (timeUnixFrom <= timeUnixTo)
    return (
      hotel.availabilityFrom <= timeUnixFrom &&
      hotel.availabilityTo >= timeUnixTo
    );
  return true;
};
