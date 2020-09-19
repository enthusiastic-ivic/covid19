import React from "react";
import "./country.styles.scss";

const Country = ({
  country: {
    Country,
    NewConfirmed,
    NewRecovered,
    NewDeaths,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
  },
}) => (
  <div className="country">
    <h5 className="country-title">{Country} Overview</h5>
    <div className="data">
      <div className="confirmed">
        <h4 className="new-confirmed">{TotalConfirmed}</h4>
        <span className="text">Confirmed</span>
        <span className='fresh-cases'>+{NewConfirmed} fresh cases</span>
      </div>
      <div className="recovered">
        <h4 className="new-recovered">{TotalRecovered}</h4>
        <span className="text">Recovered</span>
        <span className='fresh-recovered'>+{NewRecovered} fresh recovered</span>
      </div>
      <div className="deaths">
        <h4 className="new-deaths">{TotalDeaths}</h4>
        <span className="text">Deaths</span>
        <span className='fresh-deaths'>+{NewDeaths} fresh deaths</span>
      </div>
    </div>
  </div>
);

export default Country;
