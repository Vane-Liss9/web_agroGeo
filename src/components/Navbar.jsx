
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ArrowIcon from "./ArrowIcon";

const navItems = [
  { label: "home", path: "/" },
  { label: "howItWorks", path: "/como-funciona" },
  { label: "development", path: "/desarrollo" },
  { label: "data", path: "/datos" },
  { label: "team", path: "/equipo" },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header
      className={`site-header ${isHome ? "site-header-home" : ""}`}
    >
      <div className="container nav-container">

        <Link className="brand" to="/">
          <span className="brand-mark">
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M20 33V17"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M20 22C10 22 7 15 8 8c8-1 15 3 15 11"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 27c0-8 5-13 13-13 1 8-3 14-13 14"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="brand-name">
            Agro<span>Geo</span>
          </span>
        </Link>

        <nav className="main-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
            >
              {t(`navbar.${item.label}`)}
            </NavLink>
          ))}
        </nav>

        <div className="language-selector">
          <button
            className={`language-option ${
              i18n.language.startsWith("es") ? "active" : ""
            }`}
            type="button"
            onClick={() => changeLanguage("es")}
          >
            ES
          </button>

          <span className="language-divider">|</span>

          <button
            className={`language-option ${
              i18n.language.startsWith("en") ? "active" : ""
            }`}
            type="button"
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
        </div>

        <a
          className="nav-cta"
          href="/app/app-release.apk"
          download="AgroGeo.apk"
        >
          {t("navbar.download")} <ArrowIcon />
        </a>

      </div>
    </header>
  );
}


        