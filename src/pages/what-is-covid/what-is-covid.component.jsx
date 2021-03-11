import React from "react";
import "./what-is-covid.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, Switch } from "react-router-dom";

import CovidSubHeader from "../../components/covid-sub-header/covid-sub-header.component";
import Overview from "../../components/overview/overview.component";
import Symptoms from "../../components/symptoms/symptoms.component";
import Testing from "../../components/testing/testing.component";
import Accordion from "../../components/accordion/accordion.component";

const WhatIsCovid = ({ match }) => (
  <div className="what-is-covid">
    <div className="info-header">
      <span className="info-text-1">There is a current covid-19 pandemic</span>
      <Link className="info-text-2" to="">
        <span className="info-text">Find out more</span>
        <FontAwesomeIcon className="info-icon" icon="long-arrow-alt-right" />
      </Link>
    </div>
    <div className="covid-background">
      <div className="corona-virus">
        <span>Corona virus</span>
        <span className="virus-icon">
          <FontAwesomeIcon icon="virus" />
        </span>
      </div>
    </div>
    <div className="body">
      <div className="options">
        <Accordion
          title="Stay safe"
          body="Protect yourself"
          routing="/prevention"
        />
        <Accordion
          title="Situation updates"
          body="Situation reports"
          routing="/"
        />
        <Accordion
          title="Training & Exercises"
          body="Simulation exercises"
          routing="/simulation-exercises"
        />
      </div>
      <div className="overview-symptoms-testing">
        <CovidSubHeader />
        <Switch>
          <Route exact path={`${match.path}`} component={Overview} />
          <Route path={`${match.path}/symptoms`} component={Symptoms} />
          <Route path={`${match.path}/testing`} component={Testing} />
        </Switch>
      </div>
    </div>
  </div>
);

export default WhatIsCovid;
