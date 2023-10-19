const useSpanElements = (sentence, className) => {
  const wordElements = sentence.split(" ").map((word, wordIndex) => (
    <div key={wordIndex} className={`${className}-first-level-word`}>
      {word.split("").map((char, charIndex) => (
        <span key={charIndex} className={`${className}-first-level-char`}>
          <span key={charIndex} className={`${className}-second-level-char`}>
            {char}
          </span>
        </span>
      ))}
    </div>
  ));

  return wordElements;
};

export default useSpanElements;
