import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HAts Page</h1>
  </div>
);

function App() {
  return (
    <Routes>
      <Route exact element={<HomePage />} path="/" />
      <Route element={<HatsPage />} path="/hats" />
    </Routes>
  );
}

export default App;
