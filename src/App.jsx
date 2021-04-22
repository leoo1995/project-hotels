import React, { useState, useEffect } from "react";
import Hotel from "./components/Hotel";
import hotels from "./data.js";
import Date from "./components/Date";
import SelectPrice from "./components/SelectPrice";
import SelectCountry from "./components/SelectCountry";
import SelectSize from "./components/SelectSize";
import Reset from "./components/Reset";
import "./sass/App.scss";
import filterBySize from "./functions/filterBySize";
import filterByDates from "./functions/filterByDates";
import showAplicatedFilters from "./functions/showAplicatedFilters";
import showAplicatedDates from "./functions/showAplicatedDates";
import isDateFromBefore from "./functions/isDateFromBefore";
import { selectCountry, selectPrice, dates, selectSize } from "./initialStates";

const App = () => {
  const [inputDates, setInputDates] = useState(dates);
  const [country, setCountry] = useState(selectCountry);
  const [price, setPrice] = useState(selectPrice);
  const [size, setSize] = useState(selectSize);
  useEffect(() => isDateFromBefore(inputDates), [inputDates]);
  const changeDate = (id, value) => {
    const dateChanged = inputDates.map(inputDate =>
      inputDate.id === id ? { id: id, value: value } : inputDate
    );
    setInputDates(dateChanged);
  };

  const resetFilters = () => {
    setSize(selectSize);
    setCountry(selectCountry);
    setPrice(selectPrice);
    setInputDates(dates);
  };
  const filteredHotels = hotels
    .filter(hotel => (country.value ? hotel.country === country.value : true))
    .filter(hotel => filterBySize(hotel, size))
    .filter(hotel => (price.value ? hotel.price === +price.value : true))
    .filter(hotel => filterByDates(hotel, inputDates))
    .map((hotel, index) => <Hotel key={index} {...hotel} />);

  return (
    <>
      <header>
        <div className="time-interval">
          <h1>Hoteles</h1>
          Hay {filteredHotels.length + " "}
          {showAplicatedFilters(size, price, country)}
          {showAplicatedDates(inputDates)}
        </div>

        <div className="filter">
          {dates.map(d => (
            <div key={d.id} className="input-date">
              <span>{d.id === 1 ? "Desde:" : "Hasta:"}</span>
              <Date
                key={d.id}
                id={d.id}
                value={inputDates}
                changeDate={changeDate}
              />
            </div>
          ))}

          <SelectCountry value={[country, setCountry]} />
          <SelectPrice value={[price, setPrice]} />
          <SelectSize value={[size, setSize]} />
          <Reset resetFilters={resetFilters} />
        </div>
      </header>
      <main className="container">
        {filteredHotels.length ? filteredHotels : "No hay coincidencias"}
      </main>
    </>
  );
};
export default App;
