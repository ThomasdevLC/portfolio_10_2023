import Header from "../../components/home/Header";
import WorksList from "../../components/home/WorksList";
import Transition from "../../utils/Transition";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <WorksList />
    </div>
  );
};

const WrappedHome = Transition(Home);

export default WrappedHome;
