import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeroBtn, HeroContainer, HeroContent, HeroItems, HeroP } from "../Hero/HeroElements";
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
}) => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const labels = ["Health", "Wealth", "Family", "Love", "Fucks given"];
  const data = { labels, datasets: [radarData] };
  const [progress, setProgress] = useState(0);

  // run when the user presses submit button
  const handleChange = (event) => {
    setCount(count + 1);
    const sum = radarData.data.map((value, i) => value + event.value[i]);
    const dataCopy = Object.assign({}, radarData);
    dataCopy.data = sum;
    setRadarData(dataCopy);
    setProgress((count + 1 / questions.length) * 100);

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
  const end = (
    <>
      <div style={{ padding: 20 }}>Finished</div>
      <Link to={allFinished ? "/fortunes" : "/"}>
        <HeroBtn>Go back</HeroBtn>
      </Link>
    </>
  );
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
          <HeroItems>
            {/* if current question is smaller than question array length 
        ask question, otherwise show ending text */}
            {finished ? end : question}
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Questionnaire;
