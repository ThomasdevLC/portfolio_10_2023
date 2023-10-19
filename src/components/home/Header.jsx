import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import AboutFr from "./AboutFr";

const Header = () => {
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
            <p className="header__right__about blur">
              <AboutFr />
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
