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
        <p className="intro__right__stack">STACK</p>
        <ul className="intro__right__stack__list">
          <li>HTML5/CSS3</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>VUE</li>
          <li>RESPONSIVE DESIGN</li>
          <li>GIT</li>
        </ul>
        <p className="intro__right__libr">LIBRARIES</p>
        <ul className="intro__right__libr__list">
          <li>SASS</li>
          <li>GSAP</li>
          <li>FRAMER-MOTION</li>
        </ul>
      </div>
    </div>
  );
};

export default About;