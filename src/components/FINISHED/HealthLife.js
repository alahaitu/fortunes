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

const EndofHealth = ({ radarData, radarOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
//All things related to nail health and hand-therapy
  return (
    <>
      <Jello duration="1.0s" delay="0.2s">
        <FContainer6>
          <FContent>
            <Jello duration="1.0s" delay="0.4s">
              <FItems>
                <FH1>
                  Here render Health data.title from data.js
                  <FP>Here render Health data.text from data.js</FP>
                  <Link to="/fortunes">
                    <Jello duration="1.0s" delay="0.8s">
                      <FBtn>Health</FBtn>
                    </Jello>
                  </Link>
                </FH1>
              </FItems>
            </Jello>
          </FContent>
        </FContainer6>
      </Jello>
    </>
  );
};

export default EndofHealth;
