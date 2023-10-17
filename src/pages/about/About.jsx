import { useContext } from "react";
import pic from "../../assets/images/pic.png";
import cvfr from "../../assets/pdf/cvfr.pdf";
import cven from "../../assets/pdf/cven.pdf";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import { LangContext } from "../../context/LangContext";

const About = () => {
  const { switchLang } = useContext(LangContext);

  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left__pic">
          <img src={pic} alt="photo" />
        </div>
        <h1 className="intro__left__name">THOMAS LE CAM</h1>

        <h2 className="intro__left__position">
          <p>{switchLang === "fr" ? homeFr.position : homeEn.position}</p>
        </h2>
        <div className="intro__left__text">
          <p> {switchLang === "fr" ? homeFr.intro : homeEn.intro}</p>
        </div>

        <p className="intro__left__city">Montpellier</p>
        <p className="intro__left__contact">
          06 43 84 36 32 <br />
          thomas.lecam@gmail.com
        </p>
        <div className="intro__left__socials">
          <a href="https://www.linkedin.com/in/thomaslecam/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/ThomasdevLC" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:thomas.lecam@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>

        <div className="intro__left__cv">
          <a className="intro__left__cv__link" href={switchLang === "fr" ? cvfr : cven} target="_blank" rel="noreferrer">
            {switchLang === "fr" ? "MON CV" : "MY CV"}
          </a>
        </div>
      </div>

      <div className="intro__right">
        <div className="intro__right__stack">
          <p className="intro__right__stack__title">STACK</p>
          <ul className="intro__right__stack__list">
            <li>HTML5/CSS3</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>VUE</li>
            <li>RESPONSIVE DESIGN</li>
            <li>GIT</li>
          </ul>
        </div>
        <div className="intro__right__libr">
          <p className="intro__right__libr__title">LIBRARIES</p>
          <ul className="intro__right__libr__list">
            <li>SASS</li>
            <li>GSAP</li>
            <li>FRAMER-MOTION</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="banner__left">
          <p className="banner__left__text">
            <span>THOMAS LE CAM</span>
            <span>PORTFOLIO - 2023</span>
            <span>THOMAS LE CAM</span>
            <span>PORTFOLIO - 2023</span>
            <span>THOMAS LE CAM</span>
            <span>PORTFOLIO - 2023</span>
          </p>
        </div>
        <div className="banner__right">
          <p className="banner__right__text">
            <span>THOMAS LE CAM</span>
            <span>PORTFOLIO - 2023</span>
            <span>THOMAS LE CAM</span>
            <span>PORTFOLIO - 2023</span>
            <span>THOMAS LE CAM</span>
            <span>PORTFOLIO - 2023</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
