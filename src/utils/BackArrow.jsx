import { NavLink } from "react-router-dom";
import backArrow from "../assets/images/arrow_left.png";

const BackArrow = () => {
  return (
    <NavLink to="/">
      <div className="back">
        <img className="back__arrow" src={backArrow} alt="fleche retour" />
        <span className="back__text blur">RETOUR</span>
      </div>
    </NavLink>
  );
};

export default BackArrow;
