import React from "react";

import classes from "./CovidCases.module.css";

function CovidCases(props) {
  const setNumberFormat = new Intl.NumberFormat("en-US");

  const confirmedCases = setNumberFormat.format(props.newConfirmedCase);
  const totalConfirmedCases = setNumberFormat.format(props.totalConfirmedCase);
  const deathCases = setNumberFormat.format(props.newDeathCase);
  const totalDeathCases = setNumberFormat.format(props.totalDeathCase);

  return (
    <li>
      <h2 className={classes["head-cases"]}>Covid Cases</h2>
      <p>
        New Covid Cases: <span>{confirmedCases}</span>
      </p>
      <p>
        Total New Covid Cases: <span>{totalConfirmedCases}</span>
      </p>
      <h2 className={classes["head-cases"]}>Covid Death Cases</h2>
      <p>
        New Death Covid Cases: <span>{deathCases}</span>
      </p>
      <p>
        Total Death Covid Cases: <span>{totalDeathCases}</span>
      </p>
    </li>
  );
}

export default CovidCases;
