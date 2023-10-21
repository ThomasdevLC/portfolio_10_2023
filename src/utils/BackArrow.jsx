import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { NavLink } from "react-router-dom";
import backArrow from "../assets/images/arrow_left.png";

const BackArrow = () => {
  const { switchLang } = useContext(LangContext);

  return (
    <NavLink to="/">
      <div className="back">
        <img className="back__arrow" src={backArrow} alt="fleche retour" />
        <span className="back__text blur"> {switchLang === "fr" ? "RETOUR" : "HOME"} </span>
      </div>
    </NavLink>
  );
};

export default BackArrow;
