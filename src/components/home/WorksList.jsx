import { useRef } from "react";
import { NavLink } from "react-router-dom";
import worklist from "../../worklist/worklistData";

const WorksList = () => {
  const imageWrapperRef = useRef(null);
  const itemRef = useRef(null);

  const { gsap } = window;

  const onMouseEnter = () => {
    gsap.set(imageWrapperRef.current, {
      scale: 0.8,
      xPercent: 25,
      yPercent: 50,
      rotation: -15,
    });

    gsap.to(imageWrapperRef.current, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
  };

  const onMouseLeave = () => {
    gsap.to(imageWrapperRef.current, {
      opacity: 0,
      yPercent: -50,
      xPercent: 25,
      scale: 0.8,
      rotation: -15,
    });
  };

  const onMouseMove = ({ x, y }) => {
    const imageWrapperBounds = imageWrapperRef.current.getBoundingClientRect();
    const itemBounds = itemRef.current.getBoundingClientRect();
    let yOffset = itemBounds.top / imageWrapperBounds.height;
    yOffset = gsap.utils.mapRange(0, 1.5, -150, yOffset);

    gsap.to(imageWrapperRef.current, {
      duration: 1.25,
      x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
      y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
    });
  };

  return (
    <div className="workslinks">
      {worklist.map((project) => {
        return (
          <NavLink to={`/${project.link}/${project.id}`} key={project.id}>
            <div className="workslinks__box" ref={itemRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseMove={onMouseMove}>
              <p className="workslinks__box__name">{project.title}</p>
              <div className="workslinks__box__tag">
                {project.tags.map((tag, index) => (
                  <span key={index} className="workslinks__box__tag__name">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="workslinks__box__imgbox" ref={imageWrapperRef}>
                <img className="workslinks__box__img" src={project.image} alt={project.title} />
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default WorksList;
