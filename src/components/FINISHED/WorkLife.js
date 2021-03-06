import { Jello } from "animate-css-styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getAnswers, wealthAnswers } from "./data";
import { FBtn, FContainerS, FContent, FH1, FItems, FP } from "./FinishedElements";

const EndofWORK = ({ radarData, radarOptions, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const answer = getAnswers(value, wealthAnswers);

  return (
    <>
      <Jello duration="1.0s" delay="0.2s">
        <FContainerS imgName={answer.imgName}>
          <FContent>
            <Jello duration="1.0s" delay="0.8s">
              <FItems>
                <FH1>
                  {answer.title}
                  <FP>{answer.text}</FP>
                  <Link to="/fortunes">
                    <Jello duration="1.0s" delay="0.8s">
                      <FBtn>WORK</FBtn>
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

export default EndofWORK;
