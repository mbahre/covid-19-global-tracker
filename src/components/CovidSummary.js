import React from "react";
import CovidCases from "./CovidCases";

import classes from "./CovidSummary.module.css";

function CovidSummary(props) {
  return (
    <React.Fragment>
      <ul className={classes["covid-summ"]}>
        {props.results.map(function (result) {
          return (
            <CovidCases
              key={result.id}
              newConfirmedCase={result.newConfirmed}
              totalConfirmedCase={result.totalConfirmed}
              newDeathCase={result.newDeaths}
              totalDeathCase={result.totalDeaths}
            ></CovidCases>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default CovidSummary;
