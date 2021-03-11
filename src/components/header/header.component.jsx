import React, { useEffect, useState } from "react";
import { ReactComponent as CoronaIcon } from "../../assets/corona-icon.svg";
import "./header.styles.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`header ${show && "background__dark"}`}>
      <Link className="icon-container" to="/">
        <CoronaIcon />
        <h2 className="icon-title-1">Covid19</h2>
        <h2 className="icon-title-2"> Shadow</h2>
      </Link>
      <div className="options">
        <Link className="option" activeClassName="active" to="/">
          Home
        </Link>
        <Link className="option" activeClassName="active" to="/what-is-covid">
          Covid-19 Disease
        </Link>
        <Link className="option" activeClassName="active" to="/affected">
          Affected Countries
        </Link>
        <Link className="option" activeClassName="active" to="/prevention">
          Prevention
        </Link>
        <Link className="option" activeClassName="active" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
