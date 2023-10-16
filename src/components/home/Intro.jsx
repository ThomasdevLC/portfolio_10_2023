import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    const { gsap } = window;
    console.log("hello", block);
    console.log("hello", container);
    const container = document.querySelector(".main");
    const block = document.querySelectorAll(".block");
    gsap.from(block, {
      duration: 0.8,
      width: "0%",
      ease: "power1.in",
      delay: 2,
      stagger: {
        each: 0.04,
        from: "start",
      },

      onComplete: function () {
        gsap.to(container, { display: "none" });
      },
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="overlay">
          <div className="block block-1"></div>
          <div className="block block-2"></div>
          <div className="block block-3"></div>
          <div className="block block-4"></div>
          <div className="block block-5"></div>
          <div className="block block-6"></div>
          <div className="block block-7"></div>
          <div className="block block-8"></div>
          <div className="block block-9"></div>
          <div className="block block-10"></div>
          <div className="block block-11"></div>
          <div className="block block-12"></div>
          <div className="block block-13"></div>
          <div className="block block-14"></div>
          <div className="block block-15"></div>
          <div className="block block-16"></div>
          <div className="block block-17"></div>
          <div className="block block-18"></div>
          <div className="block block-19"></div>
          <div className="block block-20"></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
