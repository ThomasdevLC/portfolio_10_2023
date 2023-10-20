import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import pic from "../../assets/images/pic.png";
import gmail from "../../assets/images/gmail.png";
import linkedin from "../../assets/images/linkedin.png";
import git from "../../assets/images/git.png";
import cvfr from "../../assets/pdf/cvfr.pdf";
import cven from "../../assets/pdf/cven.pdf";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import Banner from "../../components/about/Banner";
import BackArrow from "../../utils/BackArrow";

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
        <div className="intro__left__bottom">
          <div className="intro__left__bottom__socials">
            <a href="https://www.linkedin.com/in/thomaslecam/" target="_blank" rel="noreferrer" className="intro__left__bottom__socials--link">
              <img src={linkedin} alt="lien linkedin" />
            </a>
            <a href="https://www.linkedin.com/in/thomaslecam/" target="_blank" rel="noreferrer" className="intro__left__bottom__socials--link">
              <img src={git} alt="lien linkedin" />
            </a>
            <a href="https://www.linkedin.com/in/thomaslecam/" target="_blank" rel="noreferrer" className="intro__left__bottom__socials--link">
              <img src={gmail} alt="lien linkedin" />
            </a>
          </div>

          <div className="intro__left__bottom__cv">
            <a className="intro__left__bottom__cv__link blur" href={switchLang === "fr" ? cvfr : cven} target="_blank" rel="noreferrer">
              {switchLang === "fr" ? "MON CV" : "MY CV"}
            </a>
          </div>
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
      <div className="intro__banner">
        <Banner />
      </div>
      <BackArrow />
    </div>
  );
};

export default About;
