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

const EndofWORK = ({ radarData, radarOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Jello duration="1.0s" delay="0.2s">
        <FContainer7>
          <FContent>
            <Jello duration="1.0s" delay="0.8s">
              <FItems>
                <FH1>
                  Here render Work data.title from data.js
                  <FP>Here render Work data.text from data.js</FP>
                  <Link to="/fortunes">
                    <Jello duration="1.0s" delay="0.8s">
                      <FBtn>WORK</FBtn>
                    </Jello>
                  </Link>
                </FH1>
              </FItems>
            </Jello>
          </FContent>
        </FContainer7>
      </Jello>
    </>
  );
};

export default EndofWORK;
