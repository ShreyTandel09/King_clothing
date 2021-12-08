import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact element={<HomePage />} path="/" />
        <Route element={<ShopPage />} path="/shop" />
        <Route element={<SignInAndSignUp />} path="/signin" />
      </Routes>
    </div>
  );
}

export default App;
