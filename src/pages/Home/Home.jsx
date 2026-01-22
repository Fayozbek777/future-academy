import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import person1 from "../../images/person1-image.png";
import person2 from "../../images/person2-image.png";
import person3 from "../../images/person3-image.png";
import star from "../../images/star-image.png";

import { ChevronDown, Menu, X, MapPin, User, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UI/Home.scss";
import "./UI/Intro.scss";
import "./UI/Career.scss";
import "./UI/Reviews.scss";

import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";
import fixedLogo from "../../images/fixed-logo.png";

import introTreangle1 from "../../images/treangle-image.png";
import introVector1 from "../../images/vector1-image.png";
import introVector2 from "../../images/vector2-image.png";
import introVector3 from "../../images/vector3-image.png";
import introXIMage2 from "../../images/firts-x-image.png";
import introXIMage1 from "../../images/second-x-image.png";
import introBall from "../../images/ball-image.png";
import introMiniVector from "../../images/vectormini-image.png";

import monitor from "../../images/monitor-image.png";
import tryImage from "../../images/try-image.png";
import diagram from "../../images/diagram-image.png";
import news from "../../images/newspaper-image.png";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const categories = [
    {
      id: "children",
      name: "Дети",
      age: "8 — 14 лет",
      progress: 20,
      icon: "👶",
    },
    {
      id: "teenagers",
      name: "Подростки",
      age: "15 — 17 лет",
      progress: 50,
      icon: "🧑",
    },
    {
      id: "adults",
      name: "Взрослые",
      age: "18+ лет",
      progress: 100,
      icon: "👨‍💼",
    },
  ];
  const stats = [
    { number: "600", desc: "Курсов" },
    { number: "82", desc: "Ведущих преподавателей" },
    { number: "14 795", desc: "Выпускников" },
  ];
  const courses = {
    children: ["Робототехника", "Английский язык", "Шахматы"],
    teenagers: [
      "Программирование на Python",
      "Графический дизайн",
      "Видеомонтаж",
      "Digital-маркетинг",
    ],
    adults: [
      "Full-stack разработка",
      "Data Science",
      "UX/UI дизайн",
      "Продуктовый менеджмент",
    ],
  };
  const [cityOpen, setCityOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  const cards = [
    {
      id: "main",
      image: monitor,
      title: "Программы обучения",
      text: "В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты.",
      bg: "#C5DDFF",
      hasButton: true,
    },
    {
      id: "news",
      image: news,
      title: "Новости Академии",
      bg: "#B8EFCF",
      hasButton: false,
    },
    {
      id: "diagram",
      image: diagram,
      title: "Мир IT",
      bg: "#FFEEF6",
      hasButton: false,
    },
    {
      id: "try",
      image: tryImage,
      title: "Попробуй!",
      text: "Пройдите тест и узнайте свои способности в сфере информационных технологий",
      bg: "#FFE38E",
      hasButton: false,
      isWide: true,
    },
  ];

  const reviews = [
    {
      id: 1,
      image: person1,
      name: "Алексей Иванов",
      course: "Студент курса «WEB-разработчик»",
      text: "Отличные курсы! Преподаватели объясняют всё доступно и понятно. За 3 месяца я освоил React и уже нашёл работу. Рекомендую всем, кто хочет начать карьеру в IT!",
      rating: "4.87 / 5",
    },
    {
      id: 2,
      image: person2,
      name: "Мария Петрова",
      course: "Студент курса «Python-разработчик»",
      text: "Прекрасная академия! Удобная платформа, интересные задания и поддержка на каждом этапе обучения. Особенно понравились практические проекты.",
      rating: "4.95 / 5",
    },
    {
      id: 3,
      image: person3,
      name: "Дмитрий Смирнов",
      course: "Студент курса «Data Science»",
      text: "Качественное обучение от профессионалов. Программа курса актуальная и современная. После окончания успешно прошёл собеседование в крупную компанию.",
      rating: "4.92 / 5",
    },
    {
      id: 4,
      image: person1,
      name: "Анна Кузнецова",
      course: "Студент курса «UI/UX дизайн»",
      text: "Невероятно полезный курс! Научилась работать в Figma, создавать прототипы и проводить пользовательские исследования. Преподаватели всегда на связи.",
      rating: "4.90 / 5",
    },
    {
      id: 5,
      image: person2,
      name: "Сергей Новиков",
      course: "Студент курса «Мобильная разработка»",
      text: "Лучшие курсы по мобильной разработке! Освоил Swift и Kotlin, создал несколько приложений. Очень доволен результатом и поддержкой наставников.",
      rating: "4.88 / 5",
    },
    {
      id: 6,
      image: person3,
      name: "Елена Волкова",
      course: "Студент курса «Frontend-разработка»",
      text: "Отличная программа обучения! Всё структурировано и понятно. За полгода стала уверенным frontend-разработчиком. Спасибо команде академии!",
      rating: "4.93 / 5",
    },
    {
      id: 7,
      image: person1,
      name: "Игорь Соколов",
      course: "Студент курса «DevOps»",
      text: "Современный подход к обучению. Много практики с реальными инструментами: Docker, Kubernetes, CI/CD. Рекомендую всем, кто хочет развиваться в DevOps.",
      rating: "4.91 / 5",
    },
    {
      id: 8,
      image: person2,
      name: "Ольга Морозова",
      course: "Студент курса «Тестирование ПО»",
      text: "Курс превзошёл все ожидания! Узнала много нового о автоматизации тестирования. Преподаватели - практикующие специалисты с большим опытом.",
      rating: "4.89 / 5",
    },
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
      <div className="intro">
        <div className="intro-glav-box">
          <div className="intro-backgraound">
            <div className="intro-back">
              {/* X Image 2 - плавающая анимация */}
              <motion.img
                src={introXIMage2}
                alt=""
                className="x-image2"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                data-aos="fade-down"
                data-aos-delay="100"
              />

              {/* Ball - плавающая анимация */}
              <motion.img
                src={introBall}
                alt=""
                className="intro-ball"
                animate={{
                  y: [0, 20, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                data-aos="zoom-in"
                data-aos-delay="200"
              />

              {/* Triangle - вращение */}
              <motion.img
                src={introTreangle1}
                alt=""
                className="intro-treangle"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              />

              {/* Line Image - появление */}
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={introVector3}
                alt=""
                className="intro-line-image"
                data-aos="fade-right"
                data-aos-delay="400"
              />

              {/* Vector 2 */}
              <motion.img
                src={introVector2}
                alt=""
                className="intro-vector-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                data-aos="fade-right"
                data-aos-delay="500"
              />

              {/* Vector 1 */}
              <motion.img
                src={introVector1}
                alt=""
                className="intro-vector-1"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                data-aos="fade-left"
                data-aos-delay="600"
              />

              {/* Mini Vector - пульсация */}
              <motion.img
                src={introMiniVector}
                alt=""
                className="intro-mini-vector"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                data-aos="zoom-in"
                data-aos-delay="700"
              />

              {/* X Image 1 */}
              <motion.img
                src={introXIMage1}
                alt=""
                className="x-image1"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                data-aos="fade-left"
                data-aos-delay="800"
              />

              {/* Content Wrapper */}
              <div className="intro-content-wrapper">
                <motion.h1
                  className="title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  Образовательная платформа
                </motion.h1>

                <motion.h1
                  className="title2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  ХОД Future Academy
                </motion.h1>

                <motion.h5
                  className="text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.6 }}
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  Актуальные знания для новичков и профессионалов
                </motion.h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="career">
        <div className="career-glav-box">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="career-left"
          >
            <div className="career-back">
              <h4 className="career-text1">Кем вы хотите стать?</h4>
              <h4 className="career-text2">
                Пора найти себя и выбрать подходящий курс :)
              </h4>
              <h4 className="career-text3">Удачи!</h4>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="owl-container"
            >
              <div className="owl-image">🦉</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="career-right"
          >
            <div className="career-select-box">
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`career-box ${selectedCategory === cat.id ? "active" : ""}`}
                >
                  <div className="career-box-left">
                    <div className="career-image">{cat.icon}</div>
                  </div>
                  <div className="career-box-right">
                    <div className="name">{cat.name}</div>
                    <div className="agee">{cat.age}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="career-line-container">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: selectedCategory
                    ? `${categories.find((c) => c.id === selectedCategory)?.progress}%`
                    : 0,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="career-line"
              />
            </div>

            <div className="career-items-container">
              <AnimatePresence mode="wait">
                {selectedCategory && (
                  <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="career-items-list"
                  >
                    {courses[selectedCategory].map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="career-item"
                      >
                        <h3>{course}</h3>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {!selectedCategory && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="career-placeholder"
                >
                  <div className="placeholder-icon">👆</div>
                  <p>Выберите возрастную категорию</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="video-player-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="video-wrapper"
          >
            {/* Animated Gradient Glow */}
            <motion.div
              className="video-glow"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Video Box */}
            <div className="video-box">
              {/* Play Overlay */}
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="play-overlay"
                  onClick={() => setIsPlaying(true)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="play-button"
                  >
                    <Play size={40} className="play-icon" fill="white" />
                  </motion.div>
                </motion.div>
              )}

              {/* YouTube iframe */}
              <div className="video-iframe-wrapper">
                <iframe
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/wwZY42mtwAQ?si=hm3KWLH1paRhKY_R${isPlaying ? "&autoplay=1" : ""}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="deco-circle deco-circle-1"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="deco-circle deco-circle-2"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        <div className="stats-section">
          {/* Main Text */}
          <motion.div
            className="text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            Актуальные знания от признанных экспертов рынка для новичков и
            практикующих специалистов.
          </motion.div>

          {/* Stats Box */}
          <div className="career-text-box">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="career-text-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <motion.h2
                  className="number"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {stat.number}
                </motion.h2>
                <div className="num-desc">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Open Day Banner */}
          <motion.div
            className="when-open"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <motion.div
              className="when-left"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="when-num">25</div>
              <div className="when-desc">Ноября</div>
            </motion.div>

            <div className="when-right">
              <motion.div
                className="when-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
              >
                День открытых дверей
              </motion.div>
              <motion.div
                className="when-text"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8 }}
              >
                Приглашаем всех желающих на бесплатную экскурсию в мир
                востребованных профессий и полезных навыков
              </motion.div>
            </div>

            <motion.div className="when-btn-wrapper">
              <motion.button
                className="when-btn"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Записаться
                <ArrowRight className="arrow-icon" size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <div className="study-program">
          <motion.div className="study-left" data-aos="fade-right">
            <motion.div
              className="study-box"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: cards[0].bg }}
            >
              <motion.img
                src={cards[0].image}
                alt=""
                className="monitor"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="study-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
              >
                {cards[0].title}
              </motion.div>

              <motion.div
                className="study-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                {cards[0].text}
              </motion.div>

              <motion.button
                className="study-btn"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00093C",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Подробнее
                <ArrowRight className="arrow-icon" size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
          <div className="study-right">
            {cards.slice(1).map((card, index) => (
              <motion.div
                key={card.id}
                className={
                  card.isWide
                    ? "study-box4"
                    : index === 0
                      ? "study-box2"
                      : "study-box3"
                }
                style={{ backgroundColor: card.bg }}
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={card.image}
                  alt=""
                  className="monitor"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="study-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  {card.title}
                </motion.div>

                {card.text && (
                  <motion.div
                    className="study-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                  >
                    {card.text}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="rew-back">
          <motion.div
            className="rew-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            data-aos="fade-down"
          >
            Отзывы наших студентов
          </motion.div>

          <div className="rew-swiper-container" data-aos="fade-up">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={92}
              slidesPerView="auto"
              loop={true}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2000}
              allowTouchMove={true}
              grabCursor={false}
              className="reviews-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <motion.div
                    className="rew-box"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rew-name-box">
                      <div className="rew-name-left">
                        <motion.img
                          src={review.image}
                          alt={review.name}
                          className="person1"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="rew-name">{review.name}</div>
                        <div className="rew-job">{review.course}</div>
                        <div className="rew-desc">{review.text}</div>

                        <div className="star-box">
                          <div className="star-left">
                            <motion.img
                              src={star}
                              alt="rating star"
                              className="star"
                              animate={{ rotate: [0, 15, -15, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                          <div className="star-right">
                            <div className="star-text">{review.rating}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
