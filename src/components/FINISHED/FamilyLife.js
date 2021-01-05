import { Jello } from "animate-css-styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FBtn, FContainer8, FContent, FH1, FItems, FP } from "./FinishedElements";

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
