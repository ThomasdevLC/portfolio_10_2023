import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LangProvider } from "./context/LangContext";
import { initCursorEffects } from "./utils/cursor";

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
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const cleanup = initCursorEffects(location);
    return cleanup;
  }, [location]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIntro(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="main-app">
      <AnimatePresence mode="wait">
        <LangProvider>
          <div className="cursor"></div>
          <div className="intro-effect" style={{ display: showIntro ? "block" : "none" }}>
            <Intro />
          </div>

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
