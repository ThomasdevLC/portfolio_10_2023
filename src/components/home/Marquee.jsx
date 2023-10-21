import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../context/LangContext";

const Marquee = () => {
  const { switchLang } = useContext(LangContext);
  const [devText, setDevText] = useState("");

  useEffect(() => {
    if (switchLang === "fr") {
      setDevText("développeur frontend");
    } else {
      setDevText(" frontend developer");
    }
  }, [switchLang]);
  return (
    <div>
      <div className="marquee blur">
        <div className="marquee__wrapper">
          &nbsp;{devText} <span className="marquee-dot"></span> portfolio 2023<span className="marquee-dot"></span>
          {devText} <span className="marquee-dot"></span> portfolio 2023<span className="marquee-dot"></span>
          {devText} <span className="marquee-dot"></span> portfolio 2023
          <span className="marquee-dot"></span>
          {devText} <span className="marquee-dot"></span> portfolio 2023<span className="marquee-dot"></span>
          {devText} <span className="marquee-dot"></span> portfolio 2023<span className="marquee-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
