import React, { useState } from "react";

import EndofFAMILY from "./FamilyLife";
import { StillScrolling1 } from "./FinishedElements";
import EndofHealth from "./HealthLife";
import EndofLove from "./LoveLife";
import EndofWORK from "./WorkLife";

const EndofLine = ({ radarData, radarOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getAverage = (radarData, index) => {
    let value;
    // const values = radarData.datasets.map()
    return value;
  };

  const loveValue = getAverage(radarData, 1);

  return (
    <StillScrolling1>
      <EndofLove value={20} />
      <EndofWORK />
      <EndofFAMILY />
      <EndofHealth />
    </StillScrolling1>
  );
};

export default EndofLine;
