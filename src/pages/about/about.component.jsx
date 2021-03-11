import React from "react";
import "./about.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => (
  <div className="about">
    <h2 className="about__header">About Covid19Shadow</h2>
    <p>
      Covid19Shadow is a portal for the public to keep track of the latest news
      updates on the COVID-19 numbers. It is a self-based project powered by a
      Kenyan volunteer, a front-end developer. The creation of this site was
      inspired by the Corona Virus outbreak map by John Hopkins University that
      was very informative. The aim is to use technology to make information
      related to covid-19 more accessible.
    </p>
    <p>To contact us, visit our social media platform:</p>
    <ul>
      <li className="list">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <span className="social__media">Facebook</span>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} className="facebook" />
        </a>
      </li>
      <li className="list">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <span className="social__media">Instagram</span>
          <FontAwesomeIcon icon={["fab", "instagram"]} className="instagram" />
        </a>
      </li>
      <li className="list">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <span className="social__media">Twitter</span>
          <FontAwesomeIcon icon={["fab", "twitter"]} className="twitter" />
        </a>
      </li>
      <li className="list">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <span className="social__media">Whatsapp</span>
          <FontAwesomeIcon icon={["fab", "whatsapp"]} className="whatsapp" />
        </a>
      </li>
    </ul>
  </div>
);

export default About;
