import React from "react";
import "./countries.styles.scss";

import Country from "../country/country.component";

const Countries = ({ countries }) => (
  <div className="search-country-names-container">
    {countries.map((country) => (
      <div key={country.CountryCode}>
        <Country country={country} />
      </div>
    ))}
  </div>
);

export default Countries;
