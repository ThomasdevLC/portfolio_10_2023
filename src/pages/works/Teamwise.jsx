import WorksComponent from "../../components/works/WorksComponent";
import searchPic from "../../assets/images/teamwise/teamwise-recherche.jpg";
import confirmPic from "../../assets/images/teamwise/teamwise-confirm.jpg";
import listPic from "../../assets/images/teamwise/teamwise-trajets-organisés.jpg";
import vhManagementPic from "../../assets/images/teamwise/teamwise-parc-vh.jpg";
import userManagementPic from "../../assets/images/teamwise/teamwise-gestion-user.jpg";
import Transition from "../../utils/Transition";

const Teamwise = () => {
  return (
    <div className="teamwise__container">
      <WorksComponent />
      <div className="teamwise__description">
        <img className="teamwise__description__image-one" src={searchPic} alt="image projet teamwise recherche" />
        <img className="teamwise__description__image-two" src={confirmPic} alt="image projet ferme de la rougeraie page produits" />
        <img className="teamwise__description__image-three" src={listPic} alt="image projet ferme de la rougeraie page produits" />
        <img className="teamwise__description__image-four" src={vhManagementPic} alt="image projet ferme de la rougeraie page produits" />
        <img className="teamwise__description__image-five" src={userManagementPic} alt="image projet ferme de la rougeraie page produits" />
      </div>
    </div>
  );
};

const WrappedTeamwise = Transition(Teamwise);

export default WrappedTeamwise;
