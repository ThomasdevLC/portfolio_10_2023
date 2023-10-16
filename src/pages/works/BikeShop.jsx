import WorksComponent from "../../components/works/WorksComponent";
import bike_anim from "../../assets/images/bike_anim.webp";
import bike_final from "../../assets/images/bike_final.webp";
import bike_shop from "../../assets/images/bike_shop.webp";

const BikeShop = () => {
  return (
    <div className="bikeshop__container">
      <WorksComponent />

      <div className="bikeshop__description">
        <img src={bike_anim} alt="animation projet bike shop" />
        <img src={bike_final} alt="page lien boutique projet bike shop" />
        <img src={bike_shop} alt="page boutique projet bike shop" />
      </div>
    </div>
  );
};

export default BikeShop;
