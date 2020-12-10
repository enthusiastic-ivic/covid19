import React from "react";
import "./testing.styles.scss";

import {Link} from 'react-router-dom';

const Testing = () => (
  <div className="covid-testing">
    <h3>Who should get tested?</h3>
    <ul>
      <li>Those with covid-19 symptoms</li>
      <li>
        Those have had close contact with a person with confirmed covid-19
      </li>
      <li>
        Those who have been referred to get testing by their healthcare provider
      </li>
    </ul>
    <p>Covid-19 can be tested in two ways:</p>
    <ul>
        <li><Link to=''>Antibody test</Link> - might tell you if you had a past infection</li>
        <li><Link to=''>Viral test</Link> - shows if you have a current infection</li>
    </ul>
    <h3>Results</h3>
    <p>Incase you test positive, you should take <Link>protective steps</Link> to prevent others from getting it.</p>
    <p>If you test negative, then it means you never had the infection when your sample was collected. It means you should continue to take <Link>necessary steps</Link> to protect yourself.</p>
  </div>
);

export default Testing;
