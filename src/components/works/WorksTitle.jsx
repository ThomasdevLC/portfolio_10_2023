/* eslint-disable react/prop-types */

import useSpanElements from "../../utils/useSpanElements";

const WorksTitle = ({ title }) => {
  const className = "split";
  const sentence = title;

  const spanElemOne = useSpanElements(sentence, className);

  return <div className="split-word">{spanElemOne}</div>;
};

export default WorksTitle;
