import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, MapPin, User } from "lucide-react";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UI/Education.scss";
import "../Home/UI/Home.scss";
import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";
import fixedLogo from "../../images/fixed-logo.png";
import phone from "../../images/phone-image.png";

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
const Education = () => {
  const [cityOpen, setCityOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
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

  const [difficulty, setDifficulty] = useState([]); // Новичок, Пользователь...
  const [educationType, setEducationType] = useState([]); // Любой, Профессия, Курс
  const [duration, setDuration] = useState(24); // до N месяцев

  const socialLinks = [
    { icon: wk, name: "VK", url: "#" },
    { icon: insta, name: "Instagram", url: "#" },
    { icon: face, name: "Facebook", url: "#" },
    { icon: yt, name: "YouTube", url: "#" },
    { icon: tg, name: "Telegram", url: "#" },
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
  const filteredCards = useMemo(() => {
    const educationCards = [
      {
        id: 1,
        type: "Программа",
        title: "Разработка мобильных приложений",
        description:
          "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        months: 24,
        bg: "#C7EEFF",
        discount: null,
        level: "Профессионал",
      },
      {
        id: 2,
        type: "Курс",
        title: "Web-разработка для начинающих",
        description:
          "Научитесь создавать современные сайты и веб-приложения с использованием HTML, CSS, JavaScript и React.",
        months: 6,
        bg: "#FFCE94",
        discount: null,
        level: "Новичок",
      },
      {
        id: 3,
        type: "Программа",
        title: "Python-разработчик",
        description:
          "Освойте один из самых популярных языков программирования и станьте востребованным специалистом.",
        months: 18,
        bg: "#FFE38E",
        discount: null,
        level: "Пользователь",
      },
      {
        id: 4,
        type: "Курс",
        title: "Графический дизайн",
        description:
          "Изучите основы дизайна, работу в Photoshop, Illustrator и Figma. Создавайте креативные проекты.",
        months: 12,
        bg: "#DDDDFF",
        discount: "-20%",
        level: "Пользователь",
      },
      {
        id: 5,
        type: "Программа",
        title: "Data Science и аналитика",
        description:
          "Станьте специалистом по работе с данными. Анализируйте информацию и стройте прогнозные модели.",
        months: 20,
        bg: "#B8EFCF",
        discount: null,
        level: "Профессионал",
      },
      {
        id: 6,
        type: "Курс",
        title: "UI/UX дизайн",
        description:
          "Проектируйте удобные и красивые интерфейсы. Изучите принципы пользовательского опыта.",
        months: 8,
        bg: "#C7EEFF",
        discount: null,
        level: "Новичок",
      },
      {
        id: 7,
        type: "Программа",
        title: "Frontend-разработка",
        description:
          "Освойте интернет-маркетинг, SEO, контекстную рекламу и SMM для продвижения бизнеса в сети.",
        months: 16,
        bg: "#C5DDFF",
        discount: "-20%",
        level: "Пользователь",
      },
      {
        id: 8,
        type: "Курс",
        title: "Digital-маркетинг",
        description:
          "Станьте специалистом по работе с данными. Анализируйте информацию и стройте прогнозные модели.",
        months: 10,
        bg: "#FFE9A8",
        discount: null,
        level: "Новичок",
      },
      {
        id: 9,
        type: "Программа",
        title: "Тестирование ПО",
        description:
          "Научитесь находить ошибки в программах, автоматизировать процессы тестирования.",
        months: 14,
        bg: "#FFEEF6",
        discount: null,
        level: "Пользователь",
      },
      {
        id: 10,
        type: "Курс",
        title: "Создание игр на Unity",
        description:
          "Разрабатывайте собственные компьютерные и мобильные игры на популярном движке Unity.",
        months: 12,
        bg: "#DDDDFF",
        discount: "-20%",
        level: "Пользователь",
      },
    ];

    return educationCards.filter((card) => {
      if (card.months > duration) return false;
      let typeMatch = true;
      if (educationType.length > 0) {
        const normalizedType = card.type === "Программа" ? "Профессия" : "Курс";
        typeMatch =
          educationType.includes("Любой") ||
          educationType.includes(normalizedType);
      }
      let levelMatch = true;
      if (difficulty.length > 0) {
        levelMatch = difficulty.includes(card.level);
      }

      return typeMatch && levelMatch;
    });
  }, [difficulty, educationType, duration]);

  const handleDifficultyChange = (value) => {
    setDifficulty((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleEducationTypeChange = (value) => {
    setEducationType((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-glav-box">
          <motion.div className="nav-left" whileHover={{ scale: 1.05 }}>
            <Link to="/">
              <motion.img
                src={scrolled ? fixedLogo : logo}
                alt="Logo"
                className="nav-logo"
                key={scrolled ? "fixed" : "normal"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </motion.div>

          <div
            className="burger-menu"
            onClick={() => setMenuActive(!menuActive)}
          >
            <motion.div animate={{ rotate: menuActive ? 90 : 0 }}>
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
                  href={`/${import.meta.env.VITE_EDUCATION_PATH || "education"}`}
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
                <a
                  href={`/${import.meta.env.VITE_EVENT_PATH}`}
                  className="item"
                >
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
                    >
                      <div className="city-dropdown-glow" />
                      <div className="city-dropdown-content">
                        <button
                          className="close-city-btn"
                          onClick={() => setCityOpen(false)}
                        >
                          <X size={24} />
                        </button>
                        <h3>Выберите Город</h3>
                        <div className="city-grid">
                          {[1, 2, 3, 4].map((col) => (
                            <ul key={col} className="city-col">
                              {cities.map((city, i) => (
                                <motion.li
                                  key={i}
                                  className="city-name"
                                  onClick={() => setCityOpen(false)}
                                  whileHover={{ x: 5, color: "#f7941d" }}
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
                  href={`/${import.meta.env.VITE_LOGIN_PATH || "login"}`}
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
      <div>
        <div className="education">
          <div className="educ-glav-box">
            <motion.div className="educ-left" data-aos="fade-right">
              <div className="filter-section">
                <div className="title">Уровень сложности</div>
                {["Новичок", "Пользователь", "Профессионал", "Эксперт"].map(
                  (level) => (
                    <motion.label
                      key={level}
                      className="sub-title"
                      whileHover={{ x: 5 }}
                    >
                      <input
                        type="checkbox"
                        checked={difficulty.includes(level)}
                        onChange={() => handleDifficultyChange(level)}
                        className="custom-checkbox"
                      />
                      <span className="checkbox-label">{level}</span>
                    </motion.label>
                  ),
                )}
              </div>

              {/* Тип обучения */}
              <div className="filter-section">
                <div className="title">Тип обучения</div>
                {["Любой", "Профессия", "Курс"].map((type) => (
                  <motion.label
                    key={type}
                    className="sub-title"
                    whileHover={{ x: 5 }}
                  >
                    <input
                      type="checkbox"
                      checked={educationType.includes(type)}
                      onChange={() => handleEducationTypeChange(type)}
                      className="custom-checkbox"
                    />
                    <span className="checkbox-label">{type}</span>
                  </motion.label>
                ))}
              </div>

              {/* Длительность */}
              <div className="filter-section">
                <div className="title">Длительность</div>
                <div className="duration-slider">
                  <div className="duration-label">до {duration} месяцев</div>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="slider"
                  />
                  <div className="duration-value">{duration} мес.</div>
                </div>
              </div>
            </motion.div>

            {/* Правая колонка — карточки */}
            <div className="educ-right">
              <div className="educ-cards">
                <AnimatePresence mode="wait">
                  {filteredCards.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="no-results"
                    >
                      По выбранным фильтрам ничего не найдено
                    </motion.div>
                  ) : (
                    filteredCards.map((card, index) => (
                      <motion.div
                        key={card.id}
                        className="educ-box"
                        style={{ backgroundColor: card.bg }}
                        data-aos="fade-up"
                        data-aos-delay={index * 60}
                        whileHover={{ scale: 1.04, y: -6 }}
                        transition={{ duration: 0.25 }}
                        layout
                      >
                        {card.discount && (
                          <motion.div
                            className="discount-badge"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.4,
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            {card.discount}
                          </motion.div>
                        )}

                        <div className="edc-sub-text">{card.type}</div>

                        <div className="educ-img-box">
                          <div className="educ-img-left">
                            <img src={phone} alt="Иконка" className="phone" />
                          </div>
                          <div className="educ-img-right">
                            <div className="edc-title">{card.title}</div>
                          </div>
                        </div>

                        <div className="edc-text">{card.description}</div>
                        <div className="edc-month">{card.months} мес.</div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
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

export default Education;
