import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";
import Education from "../pages/Education/Education.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Event from "../pages/Event/Event.jsx";
import Career from "../pages/Career/Career.jsx";
import Base from "../pages/Base/Base.jsx";
const LOGIN_PATH = import.meta.env.VITE_LOGIN_PATH;
const EDUCATION_PATH = import.meta.env.VITE_EDUCATION_PATH;
const CONTACT_PATH = import.meta.env.VITE_CONTACT_PATH;
const CAREER_PATH = import.meta.env.VITE_CAREER_PATH;
const EVENT_PATH = import.meta.env.VITE_EVENT_PATH;
const BASE_PATH = import.meta.env.VITE_BASE_PATH;

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${LOGIN_PATH}`} element={<LoginPage />} />
        <Route path={`/${EDUCATION_PATH}`} element={<Education />} />
        <Route path={`/${CONTACT_PATH}`} element={<Contact />} />
        <Route path={`/${EVENT_PATH}`} element={<Event />} />
        <Route path={`/${CAREER_PATH}`} element={<Career />} />
        <Route path={`/${BASE_PATH}`} element={<Base />} />
      </Routes>
    </div>
  );
};

export default Router;
