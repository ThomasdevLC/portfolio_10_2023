import { motion } from "framer-motion";

const Intro = () => {
  // Créer un tableau d'éléments à animer
  const blocks = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={`block-${i}`}
      className={`block block-${i + 1}`}
      initial={{ width: "5%" }}
      animate={{ width: 0 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  ));

  return (
    <div className="container">
      <motion.div className="intro-overlay" exit={{ opacity: 0 }}>
        {blocks}
      </motion.div>
    </div>
  );
};

export default Intro;
