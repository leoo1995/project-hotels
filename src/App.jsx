import React, { useState } from "react";
import Hotel from "./components/Hotel";
import hotels from "./data.js";
import Date from "./components/Date";
import SelectPrice from "./components/SelectPrice";
import SelectCountry from "./components/SelectCountry";
import SelectSize from "./components/SelectSize";
import "./sass/App.scss";
import filterBySize from "./functions/filterBySize";
import filterByDates from "./functions/filterByDates";
const dates = [
  { value: "", id: 1 },
  { value: "", id: 2 }
];

const selectCountry = { value: "" };
const selectPrice = { value: "" };
const selectSize = { value: "" };

const App = () => {
  const [inputDates, setInputDates] = useState(dates);
  const [country, setCountry] = useState(selectCountry);
  const [price, setPrice] = useState(selectPrice);
  const [size, setSize] = useState(selectSize);
  const changeDate = (id, value) => {
    const dateChanged = inputDates.map(inputDate =>
      inputDate.id === id ? { id: id, value: value } : inputDate
    );
    setInputDates(dateChanged);
  };
  const changeCountry = value => setCountry({ value: value });
  const changePrice = value => setPrice({ value: value });
  const changeSize = value => setSize({ value: value });
  return (
    <>
      <header>
        <div className="filter">
          {dates.map(d => (
            <Date
              key={d.id}
              id={d.id}
              value={d.value}
              changeDate={changeDate}
            />
          ))}
          <SelectCountry
            value={selectCountry.value}
            changeCountry={changeCountry}
          />
          <SelectPrice value={selectPrice.value} changePrice={changePrice} />
          <SelectSize value={selectSize.value} changeSize={changeSize} />
        </div>
      </header>
      <main className="container">
        {hotels
          .filter(hotel =>
            country.value ? hotel.country === country.value : true
          )
          .filter(hotel => filterBySize(hotel, size))
          .filter(hotel => (price.value ? hotel.price == price.value : true))
          .filter(hotel => filterByDates(hotel, inputDates))
          .map((hotel, index) => (
            <Hotel key={index} {...hotel} />
          ))}
      </main>
    </>
  );
};
export default App;
