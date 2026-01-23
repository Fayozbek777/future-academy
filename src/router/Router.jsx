import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";
import Education from "../pages/Education/Education.jsx";
import Contact from "../pages/Contact/Contact.jsx";
const LOGIN_PATH = import.meta.env.VITE_LOGIN_PATH;
const EDUCATION_PATH = import.meta.env.VITE_EDUCATION_PATH;
const CONTACT_PATH = import.meta.env.VITE_CONTACT_PATH;

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${LOGIN_PATH}`} element={<LoginPage />} />
        <Route path={`/${EDUCATION_PATH}`} element={<Education />} />
        <Route path={`/${CONTACT_PATH}`} element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
