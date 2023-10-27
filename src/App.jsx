import { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { initCursorEffects } from "./utils/cursor";
import { LangContext } from "./context/LangContext";

import Home from "./pages/home/Home";
import BikeShop from "./pages/works/BikeShop";
import FermeRougeraie from "./pages/works/FermeRougeraie";
import Groupomania from "./pages/works/Groupomania";
import Kasa from "./pages/works/Kasa";
import Gca from "./pages/works/Gca";
import About from "./pages/about/About";

function App() {
  const location = useLocation();
  const { switchLang } = useContext(LangContext);

  useEffect(() => {
    const cleanup = initCursorEffects(location);
    return cleanup;
  }, [location, switchLang]);

  return (
    <div className="main-app">
      <AnimatePresence mode="wait">
        <>
          <motion.div
            className="introLoad"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.8,
            }}
          >
            {" "}
            <p className="introLoad-text">LOADING</p>
            <div className="introLoad-inner"></div>
          </motion.div>
          <div className="cursor"></div>
          <Routes key={switchLang}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/bikeshop/:id" element={<BikeShop />}></Route>
            <Route path="/ferme-rougeraie/:id" element={<FermeRougeraie />}></Route>
            <Route path="/groupomania/:id" element={<Groupomania />}></Route>
            <Route path="/kasa/:id" element={<Kasa />}></Route>
            <Route path="/gca/:id" element={<Gca />}></Route>
            <Route path="*" element={<Home />}></Route>{" "}
          </Routes>
        </>
      </AnimatePresence>
    </div>
  );
}

export default App;
