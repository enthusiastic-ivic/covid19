import React from "react";
import "./simulation-exercises.styles.scss";

const SimulationExercises = () => (
  <div className="simulation__exercises">
    <h2 className="simulation__exercises__title">
      Corona virus disease simulation exercises
    </h2>
    <div className="body">
      <div className="body-1">
        <p>
          Thanks to the WHO`s Department of Health Security and Preparedness
          that has supported countries’ preparedness effort on the COVID-19
          outbreak. it has developed various COVID-19 tabletop exercise (TTX)
          packages which include:
        </p>
        <ol>
          <li>
            An Urban COVID-19 tabletop exercise to discuss critical issues in
            urban environments as the pandemic develops into an established
            infectious disease that may have periods of increased spread and
            number of persons affected.
          </li>
          <li>
            A Public Health and Social Measures (PHSM) tabletop exercise to
            conceptualize and manage ongoing (local) COVID-19 outbreaks in the
            country, while minimizing social and economic disruption through
            effective public health and social measures.
          </li>
          <li>
            A COVID-19 vaccine tabletop exercise that aims to assist countries
            to plan, develop and update their national deployment and
            vaccination plan (NDVP) for the equitable timely access to COVID-19
            vaccines specifically addressing regulatory and safety issues.
          </li>
          <li>
            A Health facility & IPC tabletop exercise that aims to examine the
            implementation of IPC strategies required to prevent or limit
            transmission of COVID-19 in health care facilities.
          </li>
          <li>
            A Generic COVID-19 top exercise to examine and strengthen existing
            plans, procedures and capabilities to manage the ongoing and future
            COVID-19 outbreaks.
          </li>
          <li>
            A Point of Entry (POE) tabletop exercise to examine and strengthen
            your existing plans, procedures and capabilities for managing
            COVID-19 cases in international travel including in aviation and
            ground crossings.
          </li>
        </ol>
        <h3>
          The simulation package consists of different elements including:
        </h3>
        <ul>
          <li>
            PowerPoint presentations to support the facilitation of the exercise
            and its subsequent debriefing
          </li>
          <li>
            A participants’ guide and a facilitators’ guide to explain what is
            expected from the different people involved in the preparation and
            running of the exercise.{" "}
          </li>
          <li>
            A set of reference documents and technical guidance on COVID-19
          </li>
        </ul>
        <p>
          Where some minor adaptions are needed to make the simulation
          country-specific and more relevant to the participants are highlighted
          in the package.{" "}
        </p>
        <p>
          If in any case you need technical support to implement this exercise,
          please contact your WHO country office or regional office focal point.
        </p>
      </div>
      <div className="body-2"></div>
    </div>
  </div>
);

export default SimulationExercises;
