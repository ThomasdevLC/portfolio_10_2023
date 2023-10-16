import WorksComponent from "../../components/works/WorksComponent";
import pwa from "../../assets/images/pwa.webp";
import pwa_2 from "../../assets/images/pwa_2.webp";

const Gca = () => {
  return (
    <div className="pwa__container">
      <WorksComponent />
      <div className="pwa__description">
        <img src={pwa} alt="image projet pwa version mobile" />
        <img src={pwa_2} alt="image projet pwa version mobile" />
      </div>
    </div>
  );
};

export default Gca;
