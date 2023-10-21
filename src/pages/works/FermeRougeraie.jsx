import WorksComponent from "../../components/works/WorksComponent";
import farmProducts from "../../assets/images/ferme_rougeraie_about.webp";
import farmAbout from "../../assets/images/ferme_rougeraie_products.webp";
import Transition from "../../utils/Transition";

const FermeRougeraie = () => {
  return (
    <div className="farm__container">
      <WorksComponent />
      <div className="farm__description">
        <img className="farm__description__image-one" src={farmProducts} alt="image projet ferme de la rougeraie page a propos" />
        <img className="farm__description__image-two" src={farmAbout} alt="image projet ferme de la rougeraie page produits" />
      </div>
    </div>
  );
};

const WrappedFermeRougeraie = Transition(FermeRougeraie);

export default WrappedFermeRougeraie;
