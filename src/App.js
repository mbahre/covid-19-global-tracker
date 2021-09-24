import React, { useState } from "react";
import CovidSummary from "./components/CovidSummary";

import "./App.css";

function App() {
  const [covidResults, setCovidResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveCovidDataHandler = async function () {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.covid19api.com/summary");

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const covidData = [];
      covidData.push(data.Global);

      const covidSummary = covidData.map(function (result) {
        return {
          id: 1,
          newConfirmed: result.NewConfirmed,
          totalConfirmed: result.TotalConfirmed,
          newDeaths: result.NewDeaths,
          totalDeaths: result.TotalDeaths,
        };
      });

      setCovidResults(covidSummary);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={retrieveCovidDataHandler}>
          Retrieve Global Covid-19 Results
        </button>
      </section>
      {!error && <CovidSummary results={covidResults}></CovidSummary>}
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
    </React.Fragment>
  );
}

export default App;
