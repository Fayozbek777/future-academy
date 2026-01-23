import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";
import { Send } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Locate, Mail } from "lucide-react";
import fixedLogo from "../../images/fixed-logo.png";

import wk from "../../images/wk.png";
import face from "../../images/facebook.png";
import insta from "../../images/instagram.png";
import yt from "../../images/youtube.png";
import tg from "../../images/telegram.png";
import settings from "../../images/settings-image.png";
import smartGuy from "../../images/smart-guy.png";
import book from "../../images/book-image.png";
import teacher from "../../images/teacher-image.png";
import owl from "../../images/owl-image.png";

const features = [
  {
    icon: settings,
    text: "Передовой подход к образовательному процессу",
  },
  {
    icon: book,
    text: "Непрерывное усовершенствование и пополнение базы курсов",
  },
  {
    icon: teacher,
    text: "Только практикующие преподаватели",
  },
  {
    icon: smartGuy,
    text: "Сопровождение на всех этапах. От начала обучения до трудоустройства",
  },
];

import {
  ChevronDown,
  Menu,
  X,
  MapPin,
  User,
  Phone,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Home/UI/Home.scss";
import "./UI/Contact.scss";
import socials from "../../images/socials.png";
import yandexDzen from "../../images/yandex.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
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
  const socialLinks = [
    { icon: wk, name: "VK", url: "#" },
    { icon: insta, name: "Instagram", url: "#" },
    { icon: face, name: "Facebook", url: "#" },
    { icon: yt, name: "YouTube", url: "#" },
    { icon: tg, name: "Telegram", url: "#" },
  ];
  const [cityOpen, setCityOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      text: "8 800 950-33-98",
      link: "tel:88009503398",
    },
    {
      icon: <Mail size={24} />,
      text: "info@hodfutureacademy.ru",
      link: "mailto:info@hodfutureacademy.ru",
    },
    {
      icon: <MapPin size={24} />,
      text: "г. Москва, ул. Ленина, д. 50",
      link: "#",
    },
  ];

  return (
    <div>
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
            <motion.img
              src={scrolled ? fixedLogo : logo}
              alt="Logo"
              className="nav-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={scrolled ? "fixed" : "normal"}
            />
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
                <a
                  href={`/${import.meta.env.VITE_EDUCATION_PATH}`}
                  className="item"
                >
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
                <a
                  href={`/${import.meta.env.VITE_LOGIN_PATH}`}
                  className="item login-btn"
                >
                  <User className="title-img-icon" size={20} />
                  Войти
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.nav>
      <div className="contact">
        <div className="contact-glav-box">
          <motion.div className="contact-left" data-aos="fade-right">
            <div className="breadcrumb">
              <span className="breadcrumb-item">
                <a href="/">Главная</a>
              </span>
              <ChevronRight size={16} className="breadcrumb-arrow" />
              <span className="breadcrumb-item active">Контакты</span>
            </div>

            <motion.h1
              className="title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              Контакты
            </motion.h1>

            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-info-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">{item.text}</div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="social-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
            >
              <motion.img
                src={socials}
                alt="Social networks"
                className="contact-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={yandexDzen}
                alt="Yandex Dzen"
                className="contact-image1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="contact-right" data-aos="fade-left">
            <div className="map-container">
              <motion.div
                className="map-glow"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1WawOkbEXKmzdkQvMYwzFaG54Wbk&hl=en&ehbc=2E312F"
                className="map-iframe"
                title="ХОД Future Academy Location"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="welcome">
        <motion.h1
          className="welc-glav-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          data-aos="fade-down"
        >
          Добро пожаловать в Академию будущего ХОД
        </motion.h1>

        <div className="welc-glav-box">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="welc-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <motion.img
                src={feature.icon}
                alt=""
                className="settings"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h3 className="text">{feature.text}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="welc-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          data-aos="zoom-in"
        >
          <div className="welc-form-box">
            <motion.div
              className="welc-form-left"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={owl} alt="" className="owl" />
            </motion.div>

            <div className="welc-form-middle">
              <motion.div
                className="welc-form-chat"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="welc-form-title">Помочь с выбором?</div>
                <div className="welc-form-text">
                  Оставьте заявку и наши специалисты свяжутся с вами, ответят на
                  все вопросы и подберут подходящий вариант обучения.
                </div>
              </motion.div>
            </div>

            <div className="welc-form-right">
              <form onSubmit={handleSubmit} className="welc-forma-box">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  className="name-inp"
                  value={formData.name}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                />

                <div className="welc-inp-box">
                  <motion.input
                    type="tel"
                    name="phone"
                    placeholder="Ваш телефон"
                    className="number-inp"
                    value={formData.phone}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    required
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Ваш e-mail"
                    className="email-inp"
                    value={formData.email}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    required
                  />
                </div>

                <div className="welc-btn-box">
                  <div className="welc-btn-left">
                    <div className="welc-text">
                      Нажимая на кнопку, я соглашаюсь на обработку персональных
                      данных и с правилами пользования Платформой
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    className="welc-btn"
                    whileHover={{
                      scale: 1.05,
                      background:
                        "linear-gradient(90deg, #27AAE1 0%, #F7941D 100%)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Отправить
                    <Send className="send-icon" size={18} />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <footer className="footer">
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
                      <a
                        href={`/${import.meta.env.VITE_CONTACT_PATH}`}
                        className="footer-item"
                      >
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
    </div>
  );
};

export default Contact;
