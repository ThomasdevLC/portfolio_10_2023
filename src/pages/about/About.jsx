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
    <div className="intro-main">
      <div className="intro-container">
        <div className="home__intro">
          <div className="home__intro__pic">
            <img src={pic} alt="photo" />
          </div>
          <h1 className="home__intro__name">THOMAS LE CAM</h1>

          <h2 className="home__intro__position">
            <p>{switchLang === "fr" ? homeFr.position : homeEn.position}</p>
          </h2>
          <div className="home__intro__text">
            <p> {switchLang === "fr" ? homeFr.intro : homeEn.intro}</p>
          </div>

          <p className="home__intro__city">Montpellier</p>
          <p className="home__intro__contact">
            06 43 84 36 32 <br />
            thomas.lecam@gmail.com
          </p>
          <div className="home__intro__socials">
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

          <div className="home__intro__cv">
            {" "}
            <a className="header__cvbox__cv " href={switchLang === "fr" ? cvfr : cven} target="_blank" rel="noreferrer">
              {switchLang === "fr" ? "MON CV" : "MY CV"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
