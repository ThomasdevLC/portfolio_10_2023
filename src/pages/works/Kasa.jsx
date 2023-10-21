import WorksComponent from "../../components/works/WorksComponent";
import kasaXl from "../../assets/images/kasa_xl.webp";
import kasaXs from "../../assets/images/kasa_xs.webp";
import Transition from "../../utils/Transition";

const Kasa = () => {
  return (
    <div className="kasa__container">
      <WorksComponent />
      <div className="kasa__description">
        <img src={kasaXl} alt="image projet kasa version desktop" />
        <img src={kasaXs} alt="image projet kasa version mobile" />
      </div>
    </div>
  );
};

const WrappedKasa = Transition(Kasa);

export default WrappedKasa;
