import React from "react";
import "./homepage.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = ({ globalData, countries }) => {
  console.log(globalData);
  console.log(countries);
  const {
    NewConfirmed,
    NewRecovered,
    NewDeaths,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
  } = globalData;
  return (
    <div className="homepage">
      <h3 className="global">
        <FontAwesomeIcon icon="globe" />
        GLOBAL
      </h3>
      <div className="new-cases">
        <div className="data new-confirmed">
          <h3 className="title confirmed-title">{NewConfirmed}</h3>
          <p className="text confirmed-text">new confirmed</p>
        </div>
        <div className="data new-recovered">
          <h3 className="title recovered-title">{NewRecovered}</h3>
          <p className="text recovered-text">new recovered</p>
        </div>
        <div className="data new-deaths">
          <h3 className="title deaths-title">{NewDeaths}</h3>
          <p className="text deaths-text">new deaths</p>
        </div>
      </div>
      <div className="total-cases">
        <div className="data total-confirmed">
          <h3 className="title confirmed-title">{TotalConfirmed}</h3>
          <p className="text confirmed-text">total confirmed</p>
        </div>
        <div className="data total-recovered">
          <h3 className="title recovered-title">{TotalRecovered}</h3>
          <p className="text recovered-text">total recovered</p>
        </div>
        <div className="data total-deaths">
          <h3 className="title deaths-title">{TotalDeaths}</h3>
          <p className="text deaths-text">total deaths</p>
        </div>
      </div>
      <div className="social-media-icons">
        <div className="social-media-icons-container">
          <span className="share">share:</span>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} className="facebook" />
          <FontAwesomeIcon icon={["fab", "instagram"]} className="instagram" />
          <FontAwesomeIcon icon={["fab", "twitter"]} className="twitter" />
          <FontAwesomeIcon icon={["fab", "whatsapp"]} className="whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
