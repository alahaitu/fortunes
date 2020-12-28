import React, { useState } from "react";
import { Jello } from "animate-css-styled-components";
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

const EndofLove = ({ radarData, radarOptions }) => {
  return (
    <>
      <Jello duration="1.0s" delay="0.4s">
        <FContainer5>
          <FContent>
            <Jello duration="1.0s" delay="0.6s">
              <FItems>
                <FH1 delay="1s">
                  Here render Love data.title from data.js
                  <FP>Here render Love data.text from data.js</FP>
                  <Link to="/fortunes">
                    <Jello duration="1.0s" delay="1s">
                      <FBtn>LOVE</FBtn>
                    </Jello>
                  </Link>
                </FH1>
              </FItems>
            </Jello>
          </FContent>
        </FContainer5>
      </Jello>
    </>
  );
};

export default EndofLove;
