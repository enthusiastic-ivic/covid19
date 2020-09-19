import React from "react";
import "./affected-countries.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Search from "../../components/search/search.component";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AffectedCountries = ({ countries }) => (
  <div className="affected-countries">
    <div className="social-media-icons">
      <div className='social-media-icons-container'>
        <span className="share">share:</span>
        <FontAwesomeIcon icon={["fab", "facebook-f"]} className="facebook" />
        <FontAwesomeIcon icon={["fab", "instagram"]} className="instagram" />
        <FontAwesomeIcon icon={["fab", "twitter"]} className="twitter" />
        <FontAwesomeIcon icon={["fab", "whatsapp"]} className="whatsapp" />
      </div>
    </div>
    <Search countries={countries} />
  </div>
);

export default AffectedCountries;
