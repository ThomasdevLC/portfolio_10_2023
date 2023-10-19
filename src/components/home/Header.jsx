import { useContext } from "react";

import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { LangContext } from "../../context/LangContext";

const Header = () => {
  const { switchLang } = useContext(LangContext);

  return (
    <div className="header-container">
      <div className="header">
        <div className="header__left">
          <h1 className="header__left__name blur">Thomas Le Cam</h1>
          <h2 className="header__left__position blur">Développeur Frontend</h2>
        </div>
        <div className="header__right">
          <div className="header__right__lang">
            <LanguageSwitcher />
          </div>
          <NavLink to="/about">
            {switchLang === "fr" ? <p className="header__right__about blur">A propos</p> : <p className="header__right__about blur">About</p>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
