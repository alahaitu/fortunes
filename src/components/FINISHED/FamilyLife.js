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
import Navbar from "../Navbar";

const EndofFAMILY = ({ radarData, radarOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Jello duration="1.0s" delay="0.2s">
        <FContainer8>
          <FContent>
            <Jello duration="1.0s" delay="0.4s">
              <FItems>
                <FH1>
                  Here render family data.title from data.js
                  <FP>Here render more data.text from data.js</FP>
                  <Link to="/fortunes">
                    <Jello duration="1.0s" delay="0.8s">
                      <FBtn>FAMILY</FBtn>
                    </Jello>
                  </Link>
                </FH1>
              </FItems>
            </Jello>
          </FContent>
        </FContainer8>
      </Jello>
    </>
  );
};

export default EndofFAMILY;
