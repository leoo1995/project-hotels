export default inputDates => {
  const [dateFrom, dateTo] = inputDates;
  const timeUnixFrom = new Date(dateFrom.value).getTime();
  const timeUnixTo = new Date(dateTo.value).getTime();

  if (timeUnixFrom > timeUnixTo) {
    alert("Favor poner una fecha 'Desde:' anterior de la de 'Hasta:' ;");
  }
};
