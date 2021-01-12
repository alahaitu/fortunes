import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import EndofFAMILY from "./FamilyLife";
import { StillScrolling1 } from "./FinishedElements";
import EndofHealth from "./HealthLife";
import EndofLove from "./LoveLife";
import EndofWORK from "./WorkLife";

const EndofLine = ({ radarData, radarOptions, allFinished }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const labels = ["Health", "Wealth", "Family", "Love", "Fucks given"];
  console.log(radarData);
  console.log(allFinished);

  /*const radarData = {
    labels,
    datasets: [
      { data: [0, 0, 0, 0, 0] },
      { data: [0, 0, 0, 0, 0] },
      { data: [0, 0, 0, 0, 0] },
      { data: [0, 0, 0, 0, 0] },
      { data: [0, 0, 0, 0, 0] },
    ],
  };*/
  console.log(radarData);

  const getAverage = (radarData, index) => {
    const avg =
      radarData.datasets.map((d) => d.data[index]).reduce((a, b) => a + b) /
      radarData.datasets.length;

    return avg;
  };

  const healthValue = getAverage(radarData, 0);
  const wealthValue = getAverage(radarData, 1);
  const familyValue = getAverage(radarData, 2);
  const loveValue = getAverage(radarData, 3);

  return (
    <>
      {allFinished ? (
        <StillScrolling1>
          <EndofLove value={loveValue} />
          <EndofWORK value={wealthValue} />
          <EndofFAMILY value={familyValue} />
          <EndofHealth value={healthValue} />
        </StillScrolling1>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default EndofLine;
