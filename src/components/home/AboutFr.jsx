import useSpanElements from "../../utils/useSpanElements";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const AboutFr = () => {
  const { switchLang } = useContext(LangContext);

  const className = "split";
  let sentence;

  if (switchLang === "fr") {
    sentence = "À propos";
  } else {
    sentence = "About";
  }

  const spanElemOne = useSpanElements(sentence, className);

  return <div className="split-word">{spanElemOne}</div>;
};

export default AboutFr;
