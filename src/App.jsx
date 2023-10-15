import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import BikeShop from "./pages/works/BikeShop";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Gca from "./pages/works/Gca";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bikeshop/:id" element={<BikeShop />}></Route>
        <Route path="/ferme-rougeraie/:id" element={<FermeRougeraie />}></Route>
        <Route path="/groupomania/:id" element={<Groupomania />}></Route>
        <Route path="/kasa/:id" element={<Kasa />}></Route>
        <Route path="/gca/:id" element={<Gca />}></Route>
        <Route path="*" element={<Home />}></Route>{" "}
      </Routes>
    </Router>
  );
}

export default App;
