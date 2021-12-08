import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <Routes>
      <Route exact element={<HomePage />} path="/" />
      <Route element={<ShopPage />} path="/shop" />
    </Routes>
  );
}

export default App;
