import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Home/UI/Home.scss";
import { Send } from "lucide-react";
import wk from "../../images/wk.png";
import face from "../../images/facebook.png";
import insta from "../../images/instagram.png";
import yt from "../../images/youtube.png";
import tg from "../../images/telegram.png";
import logo from "../../images/logo.png";
import titleSubImage from "../../images/title-sub-image.png";
import fixedLogo from "../../images/fixed-logo.png";
import { ChevronDown, Menu, X, MapPin, User, ArrowRight } from "lucide-react";
import settings from "../../images/settings-image.png";
import smartGuy from "../../images/smart-guy.png";
import book from "../../images/book-image.png";
import teacher from "../../images/teacher-image.png";
import owl from "../../images/owl-image.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "./UI/Base.scss";

import {
  ChevronRight,
  Search,
  Filter,
  BookOpen,
  Video,
  FileText,
  Code,
  Lightbulb,
  TrendingUp,
  Clock,
  Eye,
  Heart,
  Share2,
  Download,
  Play,
  Star,
  Users,
  Calendar,
} from "lucide-react";
import Aos from "aos";
import { Link } from "react-router-dom";

const Base = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [likedArticles, setLikedArticles] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const categories = [
    {
      id: "all",
      name: "Все материалы",
      icon: <BookOpen size={20} />,
      color: "#F7941D",
    },
    {
      id: "programming",
      name: "Программирование",
      icon: <Code size={20} />,
      color: "#27AAE1",
    },
    {
      id: "design",
      name: "Дизайн",
      icon: <Lightbulb size={20} />,
      color: "#B8EFCF",
    },
    {
      id: "marketing",
      name: "Маркетинг",
      icon: <TrendingUp size={20} />,
      color: "#FFE38E",
    },
    {
      id: "video",
      name: "Видеоуроки",
      icon: <Video size={20} />,
      color: "#FFEEF6",
    },
  ];

  const popularTopics = [
    { name: "React.js", count: 145 },
    { name: "Python", count: 230 },
    { name: "UI/UX Design", count: 98 },
    { name: "JavaScript", count: 187 },
    { name: "Node.js", count: 112 },
    { name: "Figma", count: 89 },
    { name: "Digital Marketing", count: 76 },
    { name: "Machine Learning", count: 54 },
  ];

  const articles = [
    {
      id: 1,
      title: "Полное руководство по React Hooks",
      category: "programming",
      type: "article",
      description:
        "Изучите все современные хуки React: useState, useEffect, useContext и создавайте продвинутые приложения.",
      author: "Алексей Иванов",
      date: "15 января 2025",
      readTime: "12 мин",
      views: 2456,
      likes: 189,
      image: "📘",
      tags: ["React", "JavaScript", "Hooks", "Frontend"],
      difficulty: "Средний",
      content: `React Hooks революционизировали способ написания компонентов. В этой статье мы подробно разберем все основные хуки и научимся создавать собственные.`,
    },
    {
      id: 2,
      title: "Основы Python для начинающих",
      category: "programming",
      type: "video",
      description:
        "Пошаговое видео-руководство по изучению Python с нуля. От переменных до объектно-ориентированного программирования.",
      author: "Мария Петрова",
      date: "12 января 2025",
      readTime: "45 мин",
      views: 5234,
      likes: 423,
      image: "🐍",
      tags: ["Python", "Программирование", "Для начинающих"],
      difficulty: "Начальный",
      content: `Python - один из самых популярных языков программирования. Начните свой путь в IT с этого понятного курса.`,
    },
    {
      id: 3,
      title: "UI/UX Design: Принципы и практика",
      category: "design",
      type: "article",
      description:
        "Научитесь создавать удобные и красивые интерфейсы. Разбираем принципы юзабилити и визуального дизайна.",
      author: "Дмитрий Соколов",
      date: "10 января 2025",
      readTime: "18 мин",
      views: 3421,
      likes: 298,
      image: "🎨",
      tags: ["UI/UX", "Дизайн", "Figma", "Прототипирование"],
      difficulty: "Средний",
      content: `Хороший дизайн незаметен. Узнайте, как создавать интерфейсы, которые пользователи будут любить.`,
    },
    {
      id: 4,
      title: "SEO оптимизация в 2025",
      category: "marketing",
      type: "article",
      description:
        "Актуальные стратегии продвижения сайтов в поисковых системах. Практические советы и кейсы.",
      author: "Елена Волкова",
      date: "8 января 2025",
      readTime: "15 мин",
      views: 1876,
      likes: 156,
      image: "📊",
      tags: ["SEO", "Маркетинг", "Google", "Yandex"],
      difficulty: "Средний",
      content: `SEO постоянно меняется. Изучите современные техники для вывода сайта в топ поисковой выдачи.`,
    },
    {
      id: 5,
      title: "Создание REST API на Node.js",
      category: "programming",
      type: "video",
      description:
        "Практический курс по разработке RESTful API с использованием Express.js и MongoDB.",
      author: "Игорь Новиков",
      date: "5 января 2025",
      readTime: "60 мин",
      views: 4123,
      likes: 367,
      image: "⚙️",
      tags: ["Node.js", "API", "Backend", "MongoDB"],
      difficulty: "Продвинутый",
      content: `Создайте полноценный REST API с нуля. От настройки сервера до деплоя в продакшн.`,
    },
    {
      id: 6,
      title: "Адаптивная верстка: Grid и Flexbox",
      category: "programming",
      type: "article",
      description:
        "Мастер-класс по созданию адаптивных макетов с помощью CSS Grid и Flexbox.",
      author: "Анна Кузнецова",
      date: "3 января 2025",
      readTime: "20 мин",
      views: 2890,
      likes: 234,
      image: "📱",
      tags: ["CSS", "HTML", "Адаптивность", "Верстка"],
      difficulty: "Средний",
      content: `Научитесь создавать макеты, которые отлично выглядят на любых устройствах.`,
    },
    {
      id: 7,
      title: "Цветовая теория в дизайне",
      category: "design",
      type: "article",
      description:
        "Как выбирать цвета для проектов. Психология цвета и создание гармоничных палитр.",
      author: "Ольга Морозова",
      date: "1 января 2025",
      readTime: "10 мин",
      views: 1654,
      likes: 145,
      image: "🌈",
      tags: ["Цвет", "Теория", "Дизайн", "Психология"],
      difficulty: "Начальный",
      content: `Цвет - мощный инструмент в руках дизайнера. Узнайте, как использовать его правильно.`,
    },
    {
      id: 8,
      title: "Контент-маркетинг: Стратегия успеха",
      category: "marketing",
      type: "video",
      description:
        "Разработка контент-стратегии, создание вовлекающего контента и аналитика результатов.",
      author: "Сергей Белов",
      date: "28 декабря 2024",
      readTime: "35 мин",
      views: 3210,
      likes: 289,
      image: "✍️",
      tags: ["Контент", "SMM", "Стратегия", "Блог"],
      difficulty: "Средний",
      content: `Контент - король маркетинга. Создавайте материалы, которые привлекают и удерживают аудиторию.`,
    },
    {
      id: 9,
      title: "TypeScript для React разработчиков",
      category: "programming",
      type: "article",
      description:
        "Внедрение TypeScript в React проекты. Типизация компонентов, хуков и контекста.",
      author: "Алексей Иванов",
      date: "25 декабря 2024",
      readTime: "22 мин",
      views: 3876,
      likes: 312,
      image: "🔷",
      tags: ["TypeScript", "React", "Типизация"],
      difficulty: "Продвинутый",
      content: `TypeScript делает React-приложения надежнее. Научитесь писать типобезопасный код.`,
    },
    {
      id: 10,
      title: "Анимации в веб-дизайне",
      category: "design",
      type: "video",
      description:
        "Создание плавных анимаций с помощью CSS, JavaScript и библиотеки Framer Motion.",
      author: "Мария Петрова",
      date: "20 декабря 2024",
      readTime: "40 мин",
      views: 2567,
      likes: 223,
      image: "✨",
      tags: ["Анимация", "CSS", "Framer Motion", "UX"],
      difficulty: "Средний",
      content: `Анимации оживляют интерфейсы. Изучите лучшие практики и создавайте впечатляющие эффекты.`,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const handleLike = (id) => {
    setLikedArticles((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Начальный":
        return "#B8EFCF";
      case "Средний":
        return "#FFE38E";
      case "Продвинутый":
        return "#FFEEF6";
      default:
        return "#E0E0E0";
    }
  };

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
  const socialLinks = [
    { icon: wk, name: "VK", url: "#" },
    { icon: insta, name: "Instagram", url: "#" },
    { icon: face, name: "Facebook", url: "#" },
    { icon: yt, name: "YouTube", url: "#" },
    { icon: tg, name: "Telegram", url: "#" },
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

  useEffect(() => {
    Aos.init({
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
                <a href={`/${import.meta.env.VITE_BASE_PATH}`} className="item">
                  Базы знаний
                </a>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
                data-aos-delay="250"
              >
                <a
                  href={`/${import.meta.env.VITE_CAREER_PATH}`}
                  className="item"
                >
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
      <div className="base">
        {/* Hero Section */}
        <section className="base-hero">
          <div className="base-hero-content">
            <motion.div
              className="breadcrumb"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link to="/">
                <span className="breadcrumb-item">Главная</span>
              </Link>
              <ChevronRight size={16} className="breadcrumb-arrow" />
              <span className="breadcrumb-item active">База знаний</span>
            </motion.div>

            <motion.h1
              className="base-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              База знаний ХОД Future Academy
            </motion.h1>

            <motion.p
              className="base-hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Статьи, видеоуроки и руководства от экспертов индустрии
            </motion.p>

            {/* Search */}
            <motion.div
              className="base-search"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Search size={24} className="search-icon" />
              <input
                type="text"
                placeholder="Найти статью, курс или тему..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              className="base-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="stat-item">
                <FileText size={32} />
                <div className="stat-info">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Статей</div>
                </div>
              </div>
              <div className="stat-item">
                <Video size={32} />
                <div className="stat-info">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Видеоуроков</div>
                </div>
              </div>
              <div className="stat-item">
                <Users size={32} />
                <div className="stat-info">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Читателей</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="base-categories">
          <div className="categories-container">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`category-card ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  "--category-color": category.color,
                  background:
                    activeCategory === category.id
                      ? `linear-gradient(135deg, ${category.color}, #27AAE1)`
                      : "#ffffff",
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-name">{category.name}</div>
              </motion.button>
            ))}
          </div>
        </section>

        <div className="base-main">
          {/* Sidebar */}
          <aside className="base-sidebar" data-aos="fade-right">
            <div className="sidebar-section">
              <h3 className="sidebar-title">
                <TrendingUp size={20} />
                Популярные темы
              </h3>
              <div className="popular-topics">
                {popularTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    className="topic-tag"
                    whileHover={{ x: 5, scale: 1.05 }}
                  >
                    <span className="topic-name">{topic.name}</span>
                    <span className="topic-count">{topic.count}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">
                <Star size={20} />
                Рекомендуем
              </h3>
              <div className="recommended-list">
                {articles.slice(0, 3).map((article) => (
                  <motion.div
                    key={article.id}
                    className="recommended-item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="rec-emoji">{article.image}</div>
                    <div className="rec-info">
                      <div className="rec-title">{article.title}</div>
                      <div className="rec-meta">
                        <Eye size={12} /> {article.views}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </aside>

          {/* Articles Grid */}
          <div className="base-content">
            <div className="content-header">
              <h2 className="content-title">
                {activeCategory === "all"
                  ? "Все материалы"
                  : categories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <div className="content-count">
                {filteredArticles.length} материалов
              </div>
            </div>

            <div className="articles-grid">
              <AnimatePresence mode="wait">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    className="article-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="article-type-badge">
                      {article.type === "video" ? (
                        <Video size={16} />
                      ) : (
                        <FileText size={16} />
                      )}
                      {article.type === "video" ? "Видео" : "Статья"}
                    </div>

                    <div className="article-emoji">{article.image}</div>

                    <div
                      className="article-difficulty"
                      style={{
                        background: getDifficultyColor(article.difficulty),
                      }}
                    >
                      {article.difficulty}
                    </div>

                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>

                    <div className="article-tags">
                      {article.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="article-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="article-meta">
                      <div className="meta-left">
                        <span className="meta-item">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                        <span className="meta-item">
                          <Eye size={14} />
                          {article.views}
                        </span>
                      </div>
                      <motion.button
                        className={`like-btn ${likedArticles.includes(article.id) ? "liked" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(article.id);
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart
                          size={18}
                          fill={
                            likedArticles.includes(article.id)
                              ? "#F7941D"
                              : "none"
                          }
                        />
                        {article.likes +
                          (likedArticles.includes(article.id) ? 1 : 0)}
                      </motion.button>
                    </div>

                    <div className="article-author">
                      <Calendar size={14} />
                      {article.date} · {article.author}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredArticles.length === 0 && (
              <motion.div
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BookOpen size={64} />
                <p>Материалы не найдены</p>
                <span>Попробуйте изменить фильтры или поисковый запрос</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              className="article-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                className="article-modal"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedArticle(null)}
                >
                  ✕
                </button>

                <div className="modal-header">
                  <div className="modal-emoji">{selectedArticle.image}</div>
                  <h2 className="modal-title">{selectedArticle.title}</h2>
                  <div className="modal-meta-row">
                    <span className="modal-author">
                      📝 {selectedArticle.author}
                    </span>
                    <span className="modal-date">
                      📅 {selectedArticle.date}
                    </span>
                    <span className="modal-time">
                      ⏱️ {selectedArticle.readTime}
                    </span>
                  </div>
                </div>

                <div className="modal-content">
                  <p className="modal-description">
                    {selectedArticle.description}
                  </p>
                  <p className="modal-text">{selectedArticle.content}</p>

                  <div className="modal-tags">
                    {selectedArticle.tags.map((tag, i) => (
                      <span key={i} className="modal-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="modal-actions">
                    <motion.button
                      className="action-btn primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedArticle.type === "video" ? (
                        <Play size={18} />
                      ) : (
                        <BookOpen size={18} />
                      )}
                      {selectedArticle.type === "video"
                        ? "Смотреть видео"
                        : "Читать статью"}
                    </motion.button>
                    <motion.button
                      className="action-btn secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={18} />
                      Скачать
                    </motion.button>
                    <motion.button
                      className="action-btn secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share2 size={18} />
                      Поделиться
                    </motion.button>
                  </div>
                </div>
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
    </div>
  );
};

export default Base;
