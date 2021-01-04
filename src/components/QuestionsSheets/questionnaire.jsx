import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Link } from "react-router-dom";

import { HeroBtn3 } from "../Hero/HeroElements";

const Questionnaire = ({
  questions,
  setQValues,
  setRadarData,
  radarData,
  radarOptions,
}) => {
  const [count, setCount] = useState(0);

  // run when the user presses submit button
  const handleChange = (event) => {
    setCount(count + 1);
    const sum = radarData.datasets[1].data.map(
      (value, i) => value + event.value[i]
    );
    const dataCopy = Object.assign({}, radarData);
    dataCopy.datasets[1].data = sum;
    setRadarData(dataCopy);
  };

  // html for asking questions
  const question = (
    <div>
      {questions[count]?.childPage && questions[count]?.childPage()}
      <p>{questions[count]?.questionText}</p>
      {questions[count]?.questionOptions.map((option, index) => (
        <span key={index}>
          <button onClick={() => handleChange(option)}>{option.text}</button>
        </span>
      ))}
    </div>
  );
  const finished = (
    <>
      <p>Finished</p>
      <Link to="/">
        <HeroBtn3>Go back</HeroBtn3>
      </Link>
    </>
  );
  return (
    <>
      <div></div>
      {/* if current question is smaller than question array length 
        ask question, otherwise show ending text */}
      {count < questions.length ? question : finished}
      <Radar data={radarData} options={radarOptions} />
    </>
  );
};

export default Questionnaire;
