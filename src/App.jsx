import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import BikeShop from "./pages/works/BikeShop";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Gca from "./pages/works/Gca";

function App() {
  const location = useLocation();

  useEffect(() => {
    let mouseCursor = document.querySelector(".cursor");
    let menuTitles = document.querySelectorAll(".workslinks__box__name");

    const cursor = (e) => {
      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";
    };

    window.addEventListener("mousemove", cursor);

    menuTitles.forEach((title) => {
      title.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
      });
      title.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
      });
    });
    // Vérifiez si l'emplacement actuel est différent de "/"
    if (location.pathname !== "/") {
      let mouseCursor = document.querySelector(".cursor");
      mouseCursor.classList.remove("link-grow");
    }
  }, [location]);

  return (
    <>
      <div className="cursor"></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bikeshop/:id" element={<BikeShop />}></Route>
        <Route path="/ferme-rougeraie/:id" element={<FermeRougeraie />}></Route>
        <Route path="/groupomania/:id" element={<Groupomania />}></Route>
        <Route path="/kasa/:id" element={<Kasa />}></Route>
        <Route path="/gca/:id" element={<Gca />}></Route>
        <Route path="*" element={<Home />}></Route>{" "}
      </Routes>
    </>
  );
}

export default App;
