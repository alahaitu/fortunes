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
