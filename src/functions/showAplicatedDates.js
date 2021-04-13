import showFullDate from "./showFullDate";
export default inputDates => {
  if (inputDates.filter(inputDate => inputDate.value).length === 2)
    return (
      <>
        {" "}
        desde el{" "}
        <span className="date">{showFullDate(inputDates[0].value)}</span> hasta
        el <span className="date">{showFullDate(inputDates[1].value)}</span>
      </>
    );
};
