import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, MapPin, User } from "lucide-react";
import "./UI/Home.scss";
import "./UI/Intro.scss";

import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";
import introTreangle1 from "../../images/treangle-image.png";
import introVector1 from "../../images/vector1-image.png";
import introVector2 from "../../images/vector2-image.png";
import introVector3 from "../../images/vector3-image.png";
import introXIMage2 from "../../images/firts-x-image.png";
import introXIMage1 from "../../images/second-x-image.png";
import introBall from "../../images/ball-image.png";
import introMiniVector from "../../images/vectormini-image.png";

const Home = () => {
  const [cityOpen, setCityOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const cities = [
    "Абакан",
    "Азов",
    "Александров",
    "Алексин",
    "Альметьевск",
    "Анапа",
    "Ангарск",
    "Анжеро-Судженск",
    "Апатиты",
    "Арзамас",
    "Армавир",
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-glav-box">
          <div className="nav-left">
            <img src={logo} alt="Logo" className="nav-logo" />
          </div>

          <div
            className="burger-menu"
            onClick={() => setMenuActive(!menuActive)}
          >
            {menuActive ? <X size={32} /> : <Menu size={32} />}
          </div>

          <div className={`nav-right ${menuActive ? "active" : ""}`}>
            <ul className="item-list">
              <li>
                <a href="#" className="item">
                  <img src={titleSubImage} alt="" className="title-img" />
                  Все курсы
                </a>
              </li>
              <li>
                <a href="#" className="item">
                  Мероприятия
                </a>
              </li>
              <li>
                <a href="#" className="item">
                  Базы знаний
                </a>
              </li>
              <li>
                <a href="#" className="item">
                  Карьера
                </a>
              </li>

              <li className="city-select-container">
                <div
                  className="item city-trigger"
                  onClick={() => setCityOpen(!cityOpen)}
                >
                  <MapPin className="title-img-icon" size={20} />
                  Нижний Новгород
                  <motion.div
                    animate={{ rotate: cityOpen ? 180 : 0 }}
                    style={{ display: "flex", marginLeft: "5px" }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {cityOpen && (
                    <motion.div
                      className="city-dropdown-wrapper"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="city-dropdown-glow"></div>

                      <div className="city-dropdown-content">
                        <button
                          className="close-city-btn"
                          onClick={() => setCityOpen(false)}
                          aria-label="Закрыть"
                        >
                          <X size={24} />
                        </button>

                        <h3>Выберите Город</h3>
                        <div className="city-grid">
                          {[1, 2, 3, 4].map((col) => (
                            <ul key={col} className="city-col">
                              {cities.map((city, index) => (
                                <li
                                  key={index}
                                  className="city-name"
                                  onClick={() => setCityOpen(false)}
                                >
                                  {city}
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <a href="#" className="item phone">
                  8 800 950-33-98
                </a>
              </li>
              <li>
                <a href="#" className="item login-btn">
                  <User className="title-img-icon" size={20} />
                  Войти
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="intro">
        <div className="intro-glav-box">
          <div className="intro-backgraound">
            <div className="intro-back">
              <motion.img
                src={introXIMage2}
                alt=""
                className="x-image2"
                animate={{ y: [0, -20, 0], rotate: 10 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={introBall}
                alt=""
                className="intro-ball"
                animate={{ y: [0, 20, 0], x: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={introTreangle1}
                alt=""
                className="intro-treangle"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={introVector3}
                alt=""
                className="intro-line-image"
              />
              <img src={introVector2} alt="" className="intro-vector-2" />
              <img src={introVector1} alt="" className="intro-vector-1" />
              <img src={introMiniVector} alt="" className="intro-mini-vector" />
              <img src={introXIMage1} alt="" className="x-image1" />
              <div className="intro-content-wrapper">
                <motion.h1
                  className="title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Образовательная платформа
                </motion.h1>

                <motion.h1
                  className="title2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  ХОД Future Academy
                </motion.h1>

                <motion.h5
                  className="text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Актуальные знания для новичков и профессионалов
                </motion.h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
