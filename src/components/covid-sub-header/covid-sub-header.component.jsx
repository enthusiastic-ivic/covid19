import React from "react";
import "./covid-sub-header.styles.scss";
import { NavLink } from "react-router-dom";

const CovidSubHeader = () => (
  <div className="covid-sub-header">
    <NavLink className="overview" activeClassName="active" to="/what-is-covid">
      Overview
    </NavLink>
    <NavLink
      className="testing"
      activeClassName="active"
      to="/what-is-covid/testing"
    >
      Testing
    </NavLink>
    <NavLink
      className="symptoms"
      activeClassName="active"
      to="/what-is-covid/symptoms"
    >
      Symptoms
    </NavLink>
  </div>
);

export default CovidSubHeader;
