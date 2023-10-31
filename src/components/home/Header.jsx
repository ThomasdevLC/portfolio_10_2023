import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../context/LangContext";
import LanguageSwitcher from "./LanguageSwitcher";
import Marquee from "./Marquee";

const Header = () => {
  const { switchLang } = useContext(LangContext);

  return (
    <div className="header-container">
      <div className="header">
        <div className="header__left">
          <h1 className="header__left__name blur">
            {" "}
            <span>Thomas </span> <span>Le Cam</span>{" "}
          </h1>
        </div>
        <div className="header__center">
          <Marquee />
        </div>
        <div className="header__right">
          <NavLink to="/about">
            <p className="header__right__about blur">
              <span className="header__right__about__text">{switchLang === "fr" ? "À propos" : "About"}</span>{" "}
              <span className="header__right__about__separator">|</span>
            </p>
          </NavLink>
          <div className="header__right__lang">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
