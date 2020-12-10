import React from "react";
import "./symptoms.styles.scss";

const Symptoms = () => (
  <div className="covid-symptoms">
    <p>
      First, you need to aware that anyone with covid-19 can have mild to severe
      symptoms.Older adults and people who have severe underlying medical
      conditions like heart or lung disease or diabetes seem to be at higher
      risk for developing more serious complications from COVID-19 illness. The
      symptoms may appear between the second and the fourteenth day after
      exposure to the virus.
    </p>
    <p>Common symptoms:</p>
    <ul>
      <li>Dry cough</li>
      <li>Fever</li>
      <li>Tiredness</li>
    </ul>
    <p>Other symptoms:</p>
    <ul>
      <li>diarrhea</li>
      <li>headache</li>
      <li>aches and pains</li>
      <li>skin rash</li>
      <li>sore throat</li>
    </ul>
    <p>Serious symptoms:</p>
    <ul>
      <li>breathing difficulty</li>
      <li>loss of movement or speech</li>
      <li>chest pain</li>
    </ul>
    <p>The above lists does not include all possible symptoms. They can however always be updated as we get more info from WHO and CDC</p>
  </div>
);

export default Symptoms;
