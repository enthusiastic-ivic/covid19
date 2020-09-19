import React, { useState } from "react";
import "./search.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Countries from "../search-country-names-container/countries.component";

const Search = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const dynamicSearch = () => {
    return countries.filter((country) =>
      country.Country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="search-component">
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="Search country..."
            className="search-input"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="search-icon">
            <FontAwesomeIcon icon="search" />
          </button>
        </form>
      </div>
      <Countries countries={dynamicSearch()} />
    </div>
  );
};

export default Search;
