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
      <div className="marquee">
        <div className="marquee__wrapper">
          <div className="content">
            &nbsp;{devText} <span className="dot"></span> portfolio 2023<span className="dot"></span>
            {devText} <span className="dot"></span> portfolio 2023<span className="dot"></span>
            {devText} <span className="dot"></span> portfolio 2023
            <span className="dot"></span>
            {devText} <span className="dot"></span> portfolio 2023<span className="dot"></span>
            {devText} <span className="dot"></span> portfolio 2023<span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
