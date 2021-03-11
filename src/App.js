import React, { useState, useEffect } from "react";

import "./assets/font-awesome-icons/font-awesome-icons";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import WithSpinner from "./components/with-spinner/with-spinner.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import AffectedCountries from "./pages/affected-countries/affected-countries.component";
import Prevention from "./pages/prevention/prevention.component";
import WhatIsCovid from "./pages/what-is-covid/what-is-covid.component";
import About from "./pages/about/about.component";
import Footer from "./components/footer/footer.component";
import SimulationExercises from "./pages/simulation-exercises/simulation-exercises.component";
import Vaccines from "./pages/vaccines/vaccines.component";
import Mythbusters from "./pages/mythbusters/mythbusters.component";

const HomePageWithSpinner = WithSpinner(HomePage);
const AffectedCountriesWithSpinner = WithSpinner(AffectedCountries);

const App = () => {
  const [globalData, setGlobalData] = useState(null);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      console.log(data);
      setGlobalData(data.Global);
      setCountries(data.Countries);
    };
    // const fetchNews = async () => {
    //   const response = await fetch(
    //     "https://api.smartable.ai/coronavirus/news/kenya"
    //   );
    //   const data2 = await response.json();
    //   console.log(data2);
    // };
    fetchData();
    //fetchNews();
    // console.log(globalData);
  }, []);
  //console.log(globalData);
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePageWithSpinner
              globalData={globalData}
              countries={countries}
              isLoading={!!globalData}
            />
          )}
        />
        <Route
          path="/affected"
          render={(props) => (
            <AffectedCountriesWithSpinner
              isLoading={!!globalData}
              countries={countries}
            />
          )}
        />
        <Route path="/prevention" component={Prevention} />
        <Route path="/what-is-covid" component={WhatIsCovid} />
        <Route path="/about" component={About} />
        <Route path="/simulation-exercises" component={SimulationExercises} />
        <Route path="/vaccines" component={Vaccines} />
        <Route path="/mythbusters" component={Mythbusters} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

//this is: tones and i
//victoria kimani
