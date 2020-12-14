import React from "react";
import "./footer.styles.scss";

import { Link } from "react-router-dom";

import { ReactComponent as CoronaIcon } from "../../assets/corona-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <div className="footer">
    <div className="upper__container">
      <div className="icon__container">
        <CoronaIcon className="corona__icon" />
        <h2 className="icon-title-1">Covid19</h2>
        <h2 className="icon-title-2"> Shadow</h2>
      </div>
    </div>
    <div className="lower__container">
      <Link to="" className="legal__notice">
        Privacy Legal Notice
      </Link>
      <div className="footer__icons">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <FontAwesomeIcon icon={["fab", "whatsapp"]} />
        </a>
      </div>
      <span className="copyright__container">
        <FontAwesomeIcon icon="copyright" />
        2020
      </span>
    </div>
  </div>
);

export default Footer;
