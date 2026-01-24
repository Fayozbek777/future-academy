import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Briefcase,
  Target,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  MapPin,
  Search,
  Filter,
  CheckCircle,
  Star,
} from "lucide-react";
import AOS from "aos";
import { ChevronDown, Menu, X, Send, User, ArrowRight } from "lucide-react";

import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";
import fixedLogo from "../../images/fixed-logo.png";
import settings from "../../images/settings-image.png";
import smartGuy from "../../images/smart-guy.png";
import book from "../../images/book-image.png";
import teacher from "../../images/teacher-image.png";
import owl from "../../images/owl-image.png";

import wk from "../../images/wk.png";
import face from "../../images/facebook.png";
import insta from "../../images/instagram.png";
import yt from "../../images/youtube.png";
import tg from "../../images/telegram.png";

import "aos/dist/aos.css";
import "./UI/Career.scss";
import "../Home/UI/Home.scss";
import "../Home/UI/Welcome.scss";
import "../Home/UI/Footer.scss";
import { Link } from "react-router-dom";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

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

  const socialLinks = [
    { icon: wk, name: "VK", url: "#" },
    { icon: insta, name: "Instagram", url: "#" },
    { icon: face, name: "Facebook", url: "#" },
    { icon: yt, name: "YouTube", url: "#" },
    { icon: tg, name: "Telegram", url: "#" },
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

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
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
  const categories = [
    { id: "all", name: "Все вакансии", icon: <Briefcase size={20} /> },
    { id: "development", name: "Разработка", icon: <Target size={20} /> },
    { id: "design", name: "Дизайн", icon: <Award size={20} /> },
    { id: "education", name: "Образование", icon: <Users size={20} /> },
    { id: "marketing", name: "Маркетинг", icon: <TrendingUp size={20} /> },
  ];

  const benefits = [
    {
      icon: <DollarSign size={32} />,
      title: "Конкурентная зарплата",
      desc: "Достойная оплата труда и бонусы",
    },
    {
      icon: <Clock size={32} />,
      title: "Гибкий график",
      desc: "Работайте когда вам удобно",
    },
    {
      icon: <Award size={32} />,
      title: "Обучение",
      desc: "Бесплатные курсы и развитие",
    },
    {
      icon: <Users size={32} />,
      title: "Команда мечты",
      desc: "Работа с профессионалами",
    },
    {
      icon: <MapPin size={32} />,
      title: "Удобный офис",
      desc: "Центр Москвы или удаленно",
    },
    {
      icon: <Star size={32} />,
      title: "Карьерный рост",
      desc: "Быстрое продвижение",
    },
  ];

  const vacancies = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      category: "development",
      location: "Москва / Удаленно",
      salary: "200 000 - 300 000 ₽",
      type: "Полная занятость",
      experience: "3+ года",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Ищем опытного Frontend-разработчика для создания современной образовательной платформы.",
      responsibilities: [
        "Разработка и поддержка веб-приложений",
        "Создание переиспользуемых компонентов",
        "Оптимизация производительности",
        "Code review и менторство",
      ],
      requirements: [
        "Опыт работы с React от 3 лет",
        "Отличное знание TypeScript",
        "Понимание принципов чистого кода",
        "Опыт работы в Agile-командах",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "design",
      location: "Москва",
      salary: "150 000 - 250 000 ₽",
      type: "Полная занятость",
      experience: "2+ года",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      description:
        "Требуется креативный дизайнер для создания удобных и красивых интерфейсов.",
      responsibilities: [
        "Проектирование пользовательских интерфейсов",
        "Создание прототипов и макетов",
        "Проведение UX-исследований",
        "Работа с дизайн-системой",
      ],
      requirements: [
        "Портфолио с кейсами",
        "Знание Figma на профессиональном уровне",
        "Понимание принципов UX",
        "Внимание к деталям",
      ],
    },
    {
      id: 3,
      title: "Python Developer",
      category: "development",
      location: "Удаленно",
      salary: "180 000 - 280 000 ₽",
      type: "Полная занятость",
      experience: "2+ года",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      description:
        "Нужен Python-разработчик для backend-разработки образовательной платформы.",
      responsibilities: [
        "Разработка API и микросервисов",
        "Работа с базами данных",
        "Написание тестов",
        "Оптимизация запросов",
      ],
      requirements: [
        "Опыт разработки на Python от 2 лет",
        "Знание Django или FastAPI",
        "Опыт работы с SQL",
        "Понимание REST API",
      ],
    },
    {
      id: 4,
      title: "Методист образовательных программ",
      category: "education",
      location: "Москва",
      salary: "120 000 - 180 000 ₽",
      type: "Полная занятость",
      experience: "1+ год",
      skills: ["Педагогика", "Методология", "Анализ", "Коммуникация"],
      description:
        "Приглашаем методиста для разработки образовательных программ.",
      responsibilities: [
        "Разработка учебных планов",
        "Создание методических материалов",
        "Контроль качества курсов",
        "Работа с преподавателями",
      ],
      requirements: [
        "Педагогическое образование",
        "Опыт в образовании от 1 года",
        "Знание современных методик",
        "Аналитическое мышление",
      ],
    },
    {
      id: 5,
      title: "Digital Marketing Manager",
      category: "marketing",
      location: "Москва",
      salary: "140 000 - 220 000 ₽",
      type: "Полная занятость",
      experience: "2+ года",
      skills: ["SEO", "SMM", "Google Analytics", "Контекстная реклама"],
      description:
        "Ищем маркетолога для продвижения образовательных продуктов.",
      responsibilities: [
        "Разработка маркетинговых стратегий",
        "Управление рекламными кампаниями",
        "Анализ эффективности",
        "Работа с брендом",
      ],
      requirements: [
        "Опыт в digital-маркетинге от 2 лет",
        "Знание инструментов аналитики",
        "Успешные кейсы",
        "Креативное мышление",
      ],
    },
    {
      id: 6,
      title: "Graphic Designer",
      category: "design",
      location: "Удаленно",
      salary: "100 000 - 160 000 ₽",
      type: "Полная занятость",
      experience: "1+ год",
      skills: ["Photoshop", "Illustrator", "InDesign", "After Effects"],
      description:
        "Требуется графический дизайнер для создания визуального контента.",
      responsibilities: [
        "Создание графики для курсов",
        "Разработка презентаций",
        "Дизайн рекламных материалов",
        "Работа с брендбуком",
      ],
      requirements: [
        "Портфолио с работами",
        "Владение Adobe Creative Suite",
        "Чувство стиля",
        "Умение работать в дедлайны",
      ],
    },
  ];

  const filteredVacancies = vacancies.filter((vacancy) => {
    const matchesCategory =
      activeCategory === "all" || vacancy.category === activeCategory;
    const matchesSearch =
      vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vacancy.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <div className="career">
        {/* Hero Section */}
        <section className="career-hero">
          <div className="career-hero-content">
            <motion.div
              className="breadcrumb"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="breadcrumb-item">Главная</span>
              <ChevronRight size={16} className="breadcrumb-arrow" />
              <span className="breadcrumb-item active">Карьера</span>
            </motion.div>

            <motion.h1
              className="career-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Построй карьеру мечты в ХОД Future Academy
            </motion.h1>

            <motion.p
              className="career-hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Присоединяйся к команде профессионалов, которые меняют будущее
              образования
            </motion.p>

            <motion.div
              className="career-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Сотрудников</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Открытых вакансий</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.8</div>
                <div className="stat-label">Рейтинг компании</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="career-benefits">
          <motion.h2 className="section-title" data-aos="fade-up">
            Почему стоит работать у нас?
          </motion.h2>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vacancies Section */}
        <section className="career-vacancies">
          <motion.h2 className="section-title" data-aos="fade-up">
            Открытые вакансии
          </motion.h2>

          {/* Filters */}
          <div className="vacancies-filters" data-aos="fade-up">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Поиск вакансий..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="categories">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Vacancies List */}
          <div className="vacancies-list">
            <AnimatePresence mode="wait">
              {filteredVacancies.map((vacancy, index) => (
                <motion.div
                  key={vacancy.id}
                  className="vacancy-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedVacancy(vacancy)}
                >
                  <div className="vacancy-header">
                    <div className="vacancy-main">
                      <h3 className="vacancy-title">{vacancy.title}</h3>
                      <div className="vacancy-meta">
                        <span className="meta-item">
                          <MapPin size={16} />
                          {vacancy.location}
                        </span>
                        <span className="meta-item">
                          <Clock size={16} />
                          {vacancy.type}
                        </span>
                        <span className="meta-item">
                          <Briefcase size={16} />
                          {vacancy.experience}
                        </span>
                      </div>
                    </div>
                    <div className="vacancy-salary">{vacancy.salary}</div>
                  </div>

                  <p className="vacancy-description">{vacancy.description}</p>

                  <div className="vacancy-skills">
                    {vacancy.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="vacancy-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Подробнее
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredVacancies.length === 0 && (
              <motion.div
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p>Вакансии не найдены. Попробуйте изменить фильтры.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Vacancy Modal */}
        <AnimatePresence>
          {selectedVacancy && (
            <motion.div
              className="vacancy-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVacancy(null)}
            >
              <motion.div
                className="vacancy-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedVacancy(null)}
                >
                  ✕
                </button>

                <h2 className="modal-title">{selectedVacancy.title}</h2>

                <div className="modal-meta">
                  <span>
                    <MapPin size={18} /> {selectedVacancy.location}
                  </span>
                  <span>
                    <DollarSign size={18} /> {selectedVacancy.salary}
                  </span>
                  <span>
                    <Clock size={18} /> {selectedVacancy.type}
                  </span>
                </div>

                <div className="modal-section">
                  <h3>Обязанности:</h3>
                  <ul>
                    {selectedVacancy.responsibilities.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Требования:</h3>
                  <ul>
                    {selectedVacancy.requirements.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-skills">
                  <h3>Ключевые навыки:</h3>
                  <div className="skills-list">
                    {selectedVacancy.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="modal-apply-btn">
                  Откликнуться на вакансию
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
    </>
  );
};

export default Career;
