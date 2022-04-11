import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [numberValue, setNumberValue] = useState(36);
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="checkbox-container">
        <input
          type="number"
          min="1"
          max="250"
          defaultValue={numberValue}
          onChange={(e) => setNumberValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="checkbox"
              id={continent}
              name="continentCheckbox"
              checked={continent === selectedCheckbox}
              onChange={(e) => setSelectedCheckbox(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedCheckbox && (
        <button onClick={() => setSelectedCheckbox("")}>
         Retour
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedCheckbox))
          .sort((a, b) => b.population - a.population)
          .slice(0, numberValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
