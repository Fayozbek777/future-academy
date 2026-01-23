import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";
import fixedLogo from "../../images/fixed-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn } from "lucide-react";
import { Menu, X, MapPin, ChevronDown, User } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../Home/UI/Home.scss";
import "./UI/Auth.scss";

import owl from "../../images/owl-image.png";
import socials from "../../images/socials.png";
import wk from "../../images/wk.png";
import insta from "../../images/instagram.png";
import face from "../../images/facebook.png";
import yt from "../../images/youtube.png";
import tg from "../../images/telegram.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [cityOpen, setCityOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeTab, setActiveTab] = useState("login");

  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === "login") {
      console.log("LOGIN:", formData);
    } else {
      console.log("REGISTER:", formData);
    }
  };
  const socialLinks = [
    { icon: wk, name: "VK", url: "#" },
    { icon: insta, name: "Instagram", url: "#" },
    { icon: face, name: "Facebook", url: "#" },
    { icon: yt, name: "YouTube", url: "#" },
    { icon: tg, name: "Telegram", url: "#" },
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const footerLinks = [
    {
      title: "Подросткам",
      items: [
        "Web-разработка",
        "Прикладное программирование",
        "Графическое моделирование",
        "Game Development",
        "Soft skills",
        "Разработчик мобильных приложений",
        "Блогинг",
        "Создание игр",
        "Программирование",
        "Мультимедиа",
      ],
    },
    {
      title: "Взрослым",
      items: [
        "Разработчик игр на Unity",
        "Разработка ПО",
        "Графический Дизайн",
        "Тестировщик ПО",
        "Интернет Маркетинг",
        "Java-разработчик",
        "Python–разработчик",
        "IOS-разработчик",
        "Программирование",
      ],
    },
    {
      title: "Детям",
      items: [
        "Робототехника",
        "Создание игр",
        "Программирование",
        "Мультимедиа",
        "Soft skills",
        "Шахматы",
        "Блогинг",
      ],
    },
    {
      title: "Информация",
      items: [
        "Об академии",
        "Мероприятия",
        "Новости",
        "База знаний",
        "Карьера",
        "Контакты",
      ],
    },
  ];

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
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-glav-box">
          <motion.div
            className="nav-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/">
              <motion.img
                src={scrolled ? fixedLogo : logo}
                alt="Logo"
                className="nav-logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={scrolled ? "fixed" : "normal"}
              />
            </Link>
          </motion.div>

          <div
            className="burger-menu"
            onClick={() => setMenuActive(!menuActive)}
          >
            <motion.div
              animate={{ rotate: menuActive ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuActive ? <X size={32} /> : <Menu size={32} />}
            </motion.div>
          </div>

          <div className={`nav-right ${menuActive ? "active" : ""}`}>
            <ul className="item-list">
              <motion.li
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <a href="#" className="item">
                  <img src={titleSubImage} alt="" className="title-img" />
                  Все курсы
                </a>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
                data-aos-delay="150"
              >
                <a href="#" className="item">
                  Мероприятия
                </a>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <a href="#" className="item">
                  Базы знаний
                </a>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
                data-aos-delay="250"
              >
                <a href="#" className="item">
                  Карьера
                </a>
              </motion.li>

              <li
                className="city-select-container"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <motion.div
                  className="item city-trigger"
                  onClick={() => setCityOpen(!cityOpen)}
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="title-img-icon" size={20} />
                  Нижний Новгород
                  <motion.div
                    animate={{ rotate: cityOpen ? 180 : 0 }}
                    style={{ display: "flex", marginLeft: "5px" }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {cityOpen && (
                    <motion.div
                      className="city-dropdown-wrapper"
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
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
                                <motion.li
                                  key={index}
                                  className="city-name"
                                  onClick={() => setCityOpen(false)}
                                  whileHover={{ x: 5, color: "#f7941d" }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {city}
                                </motion.li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
                data-aos-delay="350"
              >
                <a href="#" className="item phone">
                  8 800 950-33-98
                </a>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <a href="#" className="item login-btn">
                  <User className="title-img-icon" size={20} />
                  Войти
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.nav>

      <div className="auth">
        <div className="auth-form-glav-box">
          <motion.div className="auth-form-left" data-aos="fade-right">
            <motion.div
              className="auth-chat-left"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={owl} alt="Owl" className="owl" />
            </motion.div>

            <div className="auth-chat-right">
              <motion.div
                className="auth-chat"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="auth-text">
                  Войдите в систему или зарегистрируйтесь, если у вас ещё нет
                  аккаунта
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="auth-form-right" data-aos="fade-left">
            <div className="auth-tabs">
              <motion.div
                className={`tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Вход
                {activeTab === "login" && (
                  <motion.div
                    className="tab-line"
                    layoutId="tabLine"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              <motion.div
                className={`tab ${activeTab === "register" ? "active" : ""}`}
                onClick={() => setActiveTab("register")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Регистрация
                {activeTab === "register" && (
                  <motion.div
                    className="tab-line"
                    layoutId="tabLine"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <motion.form
                key={activeTab}
                onSubmit={handleSubmit}
                className="auth-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  name="field1"
                  placeholder={
                    activeTab === "login" ? "Email или телефон" : "Ваше имя"
                  }
                  value={formData.field1}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.02, borderColor: "#F7941D" }}
                  transition={{ duration: 0.2 }}
                  required
                />

                <motion.input
                  type={activeTab === "login" ? "password" : "email"}
                  name="field2"
                  placeholder={activeTab === "login" ? "Пароль" : "Email"}
                  value={formData.field2}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.02, borderColor: "#F7941D" }}
                  transition={{ duration: 0.2 }}
                  required
                />

                <motion.input
                  type="password"
                  name="field3"
                  placeholder={
                    activeTab === "login" ? "Повторите пароль" : "Пароль"
                  }
                  value={formData.field3}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.02, borderColor: "#F7941D" }}
                  transition={{ duration: 0.2 }}
                  required
                />

                <div className="auth-social-section">
                  <div className="tex">Войти с помощью соцсетей:</div>
                  <motion.img
                    src={socials}
                    alt="Social networks"
                    className="socials"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {activeTab === "login" && (
                  <motion.div
                    className="forgot-password"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05, color: "#F7941D" }}
                  >
                    Забыли пароль?
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="auth-btn"
                  whileHover={{
                    scale: 1.05,
                    background:
                      "linear-gradient(90deg, #27AAE1 0%, #F7941D 100%)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === "login" ? "Войти" : "Зарегистрироваться"}
                  <LogIn className="login-icon" size={20} />
                </motion.button>
              </motion.form>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <footer className="footer" id="authFooter">
        <div className="footer-glav-box">
          <motion.div className="footer-left" data-aos="fade-right">
            <motion.img
              src={fixedLogo}
              alt="ХОД Future Academy"
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="footer-number"
              whileHover={{ scale: 1.05, color: "#F7941D" }}
              transition={{ duration: 0.2 }}
            >
              8 800 950-33-98
            </motion.div>

            <div className="footer-adress">г. Москва, ул. Ленина, д. 50</div>

            <motion.div
              className="footer-email"
              whileHover={{ scale: 1.05, color: "#F7941D" }}
              transition={{ duration: 0.2 }}
            >
              info@hodfutureacademy.ru
            </motion.div>

            <div className="footer-social-box">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={social.icon} alt={social.name} className="social" />
                </motion.a>
              ))}
            </div>

            <div className="footer-text">© 2024 ХОД, Future Academy</div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              className="footer-right"
              data-aos="fade-up"
              data-aos-delay={columnIndex * 100}
            >
              <div className="footer-items">
                <div className="footer-item-title">{column.title}</div>
                <ul>
                  {column.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href="#" className="footer-item">
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default LoginPage;
