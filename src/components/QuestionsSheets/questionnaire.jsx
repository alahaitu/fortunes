import React, { useState } from "react";
import { Link } from "react-router-dom";

import Chart from "../Fortunes";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "../Hero/HeroElements";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Questionnaire = ({
  id,
  questions,
  setRadarData,
  radarData,
  radarOptions,
  handleQuestionnaireFinished,
  finished,
  allFinished,
  progress,
}) => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const labels = ["Health", "Wealth", "Family", "Love", "Fucks given"];
  const data = { labels, datasets: [radarData] };

  // run when the user presses submit button
  const handleChange = (event) => {
    setCount(count + 1);
    const sum = radarData.data.map((value, i) => value + event.value[i]);
    const dataCopy = Object.assign({}, radarData);
    dataCopy.data = sum;
    setRadarData(dataCopy);

    if (count === questions.length - 1) {
      handleQuestionnaireFinished(id);
    }
  };

  // html for asking questions
  const question = (
    <>
      <div style={{ padding: 20 }}>
        {questions[count]?.childPage && questions[count]?.childPage()}
      </div>
      <HeroP>{questions[count]?.questionText}</HeroP>
      {questions[count]?.questionOptions.map((option, index) => (
        <span key={index} style={{ paddingRight: 15 }}>
          <HeroBtn onClick={() => handleChange(option)}>{option.text}</HeroBtn>
        </span>
      ))}
    </>
  );
  let end;
  if (allFinished) {
    end = (
      <>
        <div style={{ padding: 20 }}>Finished</div>
        <Chart radarData={data} radarOptions={radarOptions} />

        <Link to={"/finished"}>
          <HeroBtn>End presence</HeroBtn>
        </Link>
      </>
    );
  } else {
    end = (
      <>
        <div style={{ padding: 20 }}>Finished</div>
        <Chart radarData={data} radarOptions={radarOptions} />

        <Link to={"/"}>
          <HeroBtn>Go back</HeroBtn>
        </Link>
      </>
    );
  }

  return (
    <>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar
          isOpen={isOpen}
          toggle={toggle}
          radarData={data}
          radarOptions={radarOptions}
          progress={progress}
        />
        <HeroContent>
          <HeroH1>
            <HeroItems>
              {/* if current question is smaller than question array length 
        ask question, otherwise show ending text */}
              {finished ? end : question}
            </HeroItems>
          </HeroH1>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Questionnaire;
