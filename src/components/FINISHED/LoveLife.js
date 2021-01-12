import { Jello } from "animate-css-styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getAnswers, loveAnswers } from "./data";
import { FBtn, FContainerS, FContent, FH1, FItems, FP } from "./FinishedElements";

const EndofLove = ({ radarData, radarOptions, value }) => {
  const answer = getAnswers(value, loveAnswers);

  return (
    <>
      <Jello duration="1.0s" delay="0.4s">
        <FContainerS imgName={answer.imgName}>
          <FContent>
            <Jello duration="1.0s" delay="0.6s">
              <FItems>
                <FH1 delay="1s">
                  {answer.title}
                  <FP>{answer.text}</FP>
                  <Link to="/fortunes">
                    <Jello duration="1.0s" delay="1s">
                      <FBtn>LOVE</FBtn>
                    </Jello>
                  </Link>
                </FH1>
              </FItems>
            </Jello>
          </FContent>
        </FContainerS>
      </Jello>
    </>
  );
};

export default EndofLove;
