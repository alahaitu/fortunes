import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { GlobalStyle } from "../globalStyles";
import Hero from "../components/Hero";
import Testisivu from "../components/Hero";
import Fortunes from "../components/Fortunes";
// PAGES

const StartPage = ({radarData, radarOptions}) => {

return (
    <>
      
    <GlobalStyle />
  <Hero radarData={radarData} radarOptions={radarOptions} />  
        
    </>
  );
};

export default StartPage;