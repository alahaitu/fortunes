import { Jello } from "animate-css-styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FBtn, FContainer6, FContent, FH1, FItems, FP } from "./FinishedElements";

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
