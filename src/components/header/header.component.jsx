import React from "react";
import { ReactComponent as CoronaIcon } from "../../assets/corona-icon.svg";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link className="icon-container" to="/">
      <CoronaIcon />
      <h2 className="icon-title-1">Covid19</h2>
      <h2 className="icon-title-2"> Shadow</h2>
    </Link>
    <div className="options">
      <Link className="option" to="/">
        Home
      </Link>
      <Link className="option" to="">
        Covid-19 Disease
      </Link>
      <Link className="option" to="/affected">
        Affected Countries
      </Link>
      <Link className="option" to="">
        Prevention
      </Link>
      <Link className="option" to="">
        About
      </Link>
    </div>
  </div>
);

export default Header;
