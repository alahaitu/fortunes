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
import Testisivu from "../components/Hero";
import Fortunes from "../components/Fortunes";
import EndofLine from "../components/FINISHED";
// PAGES

const FinishedPage = ({ radarData, radarOptions }) => {
  return (
    <>
      <GlobalStyle />
      <EndofLine />
    </>
  );
};

export default FinishedPage;
