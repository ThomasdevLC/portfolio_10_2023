import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Mettre en pause pendant 3 secondes avant de démarrer l'animation
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 3000);

    // Nettoyer le timeout lorsque le composant est démonté
    return () => clearTimeout(timeout);
  }, []);

  // Créer un tableau d'éléments à animer
  const blocks = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={`block-${i}`}
      className={`block block-${i + 1}`}
      initial={{ width: "5%" }}
      animate={animationStarted ? { width: 0 } : { width: "5%" }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
    ></motion.div>
  ));

  return (
    <div className="container">
      <motion.div className="intro-overlay">{blocks}</motion.div>
    </div>
  );
};

export default Intro;
