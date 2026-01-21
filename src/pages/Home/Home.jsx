import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, MapPin, User } from "lucide-react";
import "./Home.scss";

import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";

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
    <nav className="navbar">
      <div className="nav-glav-box">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>

        <div className="burger-menu" onClick={() => setMenuActive(!menuActive)}>
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
  );
};

export default Home;
