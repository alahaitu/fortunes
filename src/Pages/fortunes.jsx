import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { GlobalStyle } from "../globalStyles";
import Hero from "../components/Hero";
import Hellings from "../components/QuestionsSheets";
import Fortunes from "../components/Fortunes";

// PAGES <Helling radarData={radarData} radarOptions={radarOptions}/>

const FortunePage = ({ radarData, radarOptions }) => {
  return (
    <>
      <GlobalStyle />
      <Hellings radarData={radarData} radarOptions={radarOptions} />
    </>
  );
};

export default FortunePage;
