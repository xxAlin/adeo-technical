import React, { Component } from "react";

import Dashboard from "./components/pages/Dashboard";
import TermsAndConditions from "./components/pages/TermsAndConditions";

import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
