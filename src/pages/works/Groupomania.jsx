import WorksComponent from "../../components/works/WorksComponent";
import blogHome from "../../assets/images/blog_home.png";
import blogArticles from "../../assets/images/blog_articles.png";
import blogAdmin from "../../assets/images/blog_admin.png";
import Transition from "../../utils/Transition";

const Groupomania = () => {
  return (
    <section className="groupomania-container">
      <WorksComponent />
      <div className="farm__description">
        <img className="farm__description__image-one" src={blogHome} alt="image projet ferme de la rougeraie page a propos" />
        <img className="farm__description__image-two" src={blogArticles} alt="image projet ferme de la rougeraie page produits" />
        <img className="farm__description__image-two" src={blogAdmin} alt="image projet ferme de la rougeraie page produits" />
      </div>
    </section>
  );
};

const WrappedGroupomania = Transition(Groupomania);

export default WrappedGroupomania;
