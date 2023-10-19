import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LangProvider } from "./context/LangContext";

import Home from "./pages/home/Home";
import BikeShop from "./pages/works/BikeShop";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Gca from "./pages/works/Gca";
import About from "./pages/about/About";
import Intro from "./utils/Intro";

function App() {
  const location = useLocation();

  useEffect(() => {
    let mouseCursor = document.querySelector(".cursor");
    let menuTitles = document.querySelectorAll(".menu__item__name");
    let blurElements = document.querySelectorAll(".blur, img,.project__table__td__link--btn");

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
    if (location.pathname !== "/") {
      mouseCursor.classList.remove("link-grow");
    }

    blurElements.forEach((element) => {
      element.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("blur-cursor");
      });
      element.addEventListener("mouseover", () => {
        mouseCursor.classList.add("blur-cursor");
      });
    });

    return () => {
      mouseCursor.classList.remove("blur-cursor");
    };
  }, [location]);

  return (
    <div className="main-app">
      <AnimatePresence mode="wait">
        <LangProvider>
          <div className="cursor"></div>

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/bikeshop/:id" element={<BikeShop />}></Route>
            <Route path="/ferme-rougeraie/:id" element={<FermeRougeraie />}></Route>
            <Route path="/groupomania/:id" element={<Groupomania />}></Route>
            <Route path="/kasa/:id" element={<Kasa />}></Route>
            <Route path="/gca/:id" element={<Gca />}></Route>
            <Route path="*" element={<Home />}></Route>{" "}
          </Routes>
        </LangProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
