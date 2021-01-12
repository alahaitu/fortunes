import { Jello } from "animate-css-styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getAnswers, healthAnswers } from "./data";
import { FBtn, FContainerS, FContent, FH1, FItems, FP } from "./FinishedElements";

const EndofHealth = ({ radarData, radarOptions, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const answer = getAnswers(value, healthAnswers);

  //All things related to nail health and hand-therapy
  return (
    <>
      <Jello duration="1.0s" delay="0.2s">
        <FContainerS>
          <FContent>
            <Jello duration="1.0s" delay="0.4s">
              <FItems>
                <FH1>
                  {answer.title}
                  <FP>{answer.text}</FP>
                  <Link to="/fortunes">
                    <Jello duration="1.0s" delay="0.8s">
                      <FBtn>Health</FBtn>
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

export default EndofHealth;
