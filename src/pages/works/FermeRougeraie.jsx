import WorksComponent from "../../components/works/WorksComponent";
import farmProducts from "../../assets/images/ferme_rougeraie_about.webp";
import farmAbout from "../../assets/images/ferme_rougeraie_products.webp";
import farmAdminProducts from "../../assets/images/farm-products-admin.png";
import farmAdminOrders from "../../assets/images/farm-orders.jpg";
import farmAdminTab from "../../assets/images/farm-tab.png";


import Transition from "../../utils/Transition";

const FermeRougeraie = () => {
  return (
    <div className="farm__container">
      <WorksComponent />
      <div className="farm__description">
        <img className="farm__description__image-one" src={farmProducts} alt="image projet ferme de la rougeraie page a propos" />
        <img className="farm__description__image-two" src={farmAbout} alt="image projet ferme de la rougeraie page produits" />
        <img className="farm__description__image-three" src={farmAdminProducts} alt="image projet ferme de la rougeraie admin produits" />
        <img className="farm__description__image-four" src={farmAdminOrders} alt="image projet ferme de la rougeraie admin  commande" />
        <img className="farm__description__image-four" src={farmAdminTab} alt="image projet ferme de la rougeraie admin tableau" />
      </div>
    </div>
  );
};

const WrappedFermeRougeraie = Transition(FermeRougeraie);

export default WrappedFermeRougeraie;
