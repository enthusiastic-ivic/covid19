import React from "react";
import "./mythbusters.styles.scss";

const Mythbusters = () => (
  <div className="mythbusters">
    <h1 className="__title">
      Advice for the public on coronavirus disease: Mythbusters
    </h1>
    <div className="body">
      <div className="body__1"></div>
      <div className="body__2">
        <p>
          Too many myths concerning covid19 have flooded our communities. We are
          all being exposed to a huge amount of COVID-19 information on a daily
          basis, and not all of it is reliable. Let us look forward to stopping
          the spread of misinformation.
        </p>
        <div className="shortcuts"></div>
        <h1>FACTS:</h1>
        <h1>Covid-19 virus is not transmitted via water or swimming</h1>
        <p>
          The virus only spreads between people when someone has close contact
          with an infected person, but not through water or swimming.
        </p>
      </div>
    </div>
  </div>
);

export default Mythbusters;
