import { Jello } from "animate-css-styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FBtn, FContainer5, FContent, FH1, FItems, FP } from "./FinishedElements";

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
