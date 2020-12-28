import React, { useState } from "react";
import { Wobble, RubberBand, Jello } from "animate-css-styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import {
  StillScrolling1,
  FContainerS,
  FContainerS2,
  FContainerS3,
  FContainer,
  FContainer1,
  FContainer2,
  FContainer3,
  FContainer4,
  FContainer5,
  FContainer6,
  FContainer7,
  FContainer8,
  FContent,
  FItems,
  FH1,
  FP,
  FBtn,
} from "./FinishedElements";
import EndofFAMILY from "./FamilyLife";
import EndofWORK from "./WorkLife";
import EndofLove from "./LoveLife";
import EndofHealth from "./HealthLife";

const EndofLine = ({ radarData, radarOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StillScrolling1>
      <EndofLove />
      <EndofWORK />
      <EndofFAMILY />
      <EndofHealth />
    </StillScrolling1>
  );
};

export default EndofLine;
