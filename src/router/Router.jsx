import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";
const LOGIN_PATH = import.meta.env.VITE_LOGIN_PATH;

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${LOGIN_PATH}`} element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default Router;
